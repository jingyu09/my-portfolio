import React, { useEffect, useRef, useState } from "react";
import { socialMediaLinks } from "../../portfolio";

function getEmail() {
  const mail = socialMediaLinks.find((m) => m.link.startsWith("mailto"));
  return mail ? mail.link.substring("mailto:".length) : "";
}

export default function CopyEmailButton({ theme }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);
  const email = getEmail();

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!email) {
    return null;
  }

  const copy = async (event) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = email;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setCopied(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  const enter = (event) => {
    event.currentTarget.style.color = theme.text;
    event.currentTarget.style.backgroundColor = theme.body;
  };

  const leave = (event) => {
    event.currentTarget.style.color = theme.body;
    event.currentTarget.style.backgroundColor = theme.text;
  };

  return (
    <div className="resume-btn-div" style={{ marginTop: "12px" }}>
      <div>
        <a
          className="main-button"
          href={"mailto:" + email}
          onClick={copy}
          aria-live="polite"
          style={{
            color: theme.body,
            backgroundColor: theme.text,
            border: "solid 1px " + theme.text,
          }}
          onMouseEnter={enter}
          onMouseOut={leave}
        >
          {copied ? "Copied to clipboard" : "Copy My Email"}
        </a>
      </div>
    </div>
  );
}
