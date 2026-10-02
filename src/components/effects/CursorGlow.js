import React, { useEffect, useRef } from "react";

export default function CursorGlow({ color }) {
  const glowRef = useRef(null);

  useEffect(() => {
    // 只在有鼠标的设备上启用（手机和平板不显示）
    const hasMouse =
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const el = glowRef.current;
    if (!hasMouse || !el) {
      return undefined;
    }

    let frame = null;

    const onMove = (event) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${event.clientX - 150}px, ${
          event.clientY - 150
        }px)`;
        el.style.opacity = "1";
      });
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
      }}
    />
  );
}
