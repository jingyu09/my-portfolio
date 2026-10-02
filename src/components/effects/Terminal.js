import React, { useEffect, useRef, useState } from "react";
import "./Terminal.css";
import {
  greeting,
  skills,
  degrees,
  experience,
  socialMediaLinks,
} from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";

const PAGES = [
  "home",
  "education",
  "experience",
  "projects",
  "contact",
  "resume",
];

const WELCOME =
  "Welcome to Jing Yu's terminal. Type 'help' to see what you can do.";

function getEmail() {
  const mail = socialMediaLinks.find((m) => m.link.startsWith("mailto"));
  return mail ? mail.link.substring("mailto:".length) : "";
}

function getGithub() {
  const gh = socialMediaLinks.find((m) => m.name === "Github");
  return gh ? gh.link : greeting.githubProfile;
}

// 所有内容都来自 portfolio.js，改了那边，这里会自动跟着变
function run(input) {
  const raw = input.trim();
  if (!raw) {
    return { lines: [] };
  }
  const parts = raw.split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (name) {
    case "help":
      return {
        lines: [
          "Available commands:",
          "  whoami       who I am",
          "  skills       my tech stack",
          "  education    where I study",
          "  experience   what I have done",
          "  projects     things I have built",
          "  contact      how to reach me",
          "  open <page>  go to a page: " + PAGES.join(", "),
          "  clear        clear the screen",
          "  exit         close the terminal",
        ],
      };
    case "whoami":
      return {
        lines: [
          greeting.title.replace("Hi all, I'm ", ""),
          (greeting.roles || []).join(" | "),
          greeting.subTitle,
        ],
      };
    case "skills": {
      const lines = [];
      skills.data.forEach((group) => {
        lines.push(group.title + ":");
        lines.push(
          "  " + group.softwareSkills.map((s) => s.skillName).join(", ")
        );
      });
      return { lines };
    }
    case "education":
      return {
        lines: degrees.degrees.map(
          (d) => d.title + " - " + d.subtitle + " (" + d.duration + ")"
        ),
      };
    case "experience": {
      const all = experience.sections.reduce(
        (list, section) => list.concat(section.experiences),
        []
      );
      return {
        lines: all.map(
          (e) => e.title + " @ " + e.company + " (" + e.duration + ")"
        ),
      };
    }
    case "projects":
      return {
        lines: ProjectsData.data.map((p) => p.name + " - " + p.description),
      };
    case "contact":
      return {
        lines: ["Email:  " + getEmail(), "GitHub: " + getGithub()],
      };
    case "open":
    case "cd": {
      const page = (args[0] || "").toLowerCase().replace("/", "");
      if (PAGES.indexOf(page) === -1) {
        return { lines: ["usage: open <page>  (" + PAGES.join(", ") + ")"] };
      }
      return { lines: ["Opening /" + page + " ..."], go: page };
    }
    case "clear":
      return { lines: [], clear: true };
    case "exit":
      return { lines: [], close: true };
    case "sudo":
      if (args.join(" ").toLowerCase() === "hire jingyu") {
        return {
          lines: [
            "[sudo] permission granted.",
            "Great choice. Let's talk: " + getEmail(),
          ],
        };
      }
      return { lines: ["sudo: this incident will not be reported."] };
    default:
      return {
        lines: ["command not found: " + name + ". Type 'help' for commands."],
      };
  }
}

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState([{ kind: "out", text: WELCOME }]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // 键盘：按 ` 打开/关闭，按 Esc 关闭
  useEffect(() => {
    const onKey = (event) => {
      const tag = (event.target && event.target.tagName) || "";
      if (event.key === "`" && tag !== "INPUT" && tag !== "TEXTAREA") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines, open]);

  const submit = (event) => {
    event.preventDefault();
    const value = input;
    const result = run(value);

    if (result.clear) {
      setLines([]);
    } else {
      const added = [{ kind: "cmd", text: "$ " + value }].concat(
        result.lines.map((text) => ({ kind: "out", text: text }))
      );
      setLines((previous) => previous.concat(added));
    }

    if (value.trim()) {
      setHistory((previous) => previous.concat(value));
    }
    setHistIdx(-1);
    setInput("");

    if (result.close) {
      setOpen(false);
    }
    if (result.go) {
      setTimeout(() => {
        window.location.assign("/" + result.go);
      }, 350);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) {
        return;
      }
      const next = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setInput(history[next]);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (histIdx < 0) {
        return;
      }
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(history[next]);
      }
    }
  };

  return (
    <>
      <button
        className="term-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open terminal"
        title="Open terminal (press `)"
      >
        &gt;_
      </button>
      {open && (
        <div className="term-panel" role="dialog" aria-label="Terminal">
          <div className="term-bar">
            <span>jingyu@portfolio ~</span>
            <button
              className="term-close"
              onClick={() => setOpen(false)}
              aria-label="Close terminal"
            >
              &times;
            </button>
          </div>
          <div
            className="term-body"
            ref={bodyRef}
            onClick={() => inputRef.current && inputRef.current.focus()}
          >
            {lines.map((line, index) => (
              <div key={index} className={"term-line term-" + line.kind}>
                {line.text}
              </div>
            ))}
            <form onSubmit={submit} className="term-form">
              <span className="term-prompt">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                aria-label="Terminal command"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
