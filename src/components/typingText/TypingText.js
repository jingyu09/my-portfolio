import React, { useEffect, useState } from "react";
import "./TypingText.css";

export default function TypingText({ lines, color }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIndex];
    const chars = Array.from(current);
    const typed = Array.from(text);
    let delay = deleting ? 40 : 90;
    if (!deleting && text === current) delay = 1400;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setLineIndex((lineIndex + 1) % lines.length);
      } else if (deleting) {
        setText(chars.slice(0, typed.length - 1).join(""));
      } else {
        setText(chars.slice(0, typed.length + 1).join(""));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, lineIndex, lines]);

  return (
    <p className="typing-text" style={{ color: color }}>
      {text}
      <span className="typing-cursor">|</span>
    </p>
  );
}
