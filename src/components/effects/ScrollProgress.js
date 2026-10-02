import React, { useEffect, useState } from "react";
import "./Effects.css";

export default function ScrollProgress({ color }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const scrolled = window.scrollY || doc.scrollTop || 0;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%`, backgroundColor: color }}
    />
  );
}
