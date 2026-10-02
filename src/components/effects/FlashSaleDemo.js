import React, { useEffect, useRef, useState } from "react";
import "./FlashSaleDemo.css";

const STOCK = 100; // 库存
const REQUESTS = 1000; // 同时涌入的请求数
const RATE_LIMIT_PASS = 400; // 演示里限流层放行的请求数

// 简化版模拟：只为说明思路，不是真实压测
function simulate(mode) {
  if (mode === "naive") {
    // 先查库存、再扣库存（不是原子操作）：同一批并发请求读到的是同一个库存值
    let stock = STOCK;
    let sold = 0;
    let remaining = REQUESTS;
    while (remaining > 0) {
      const wave = Math.min(remaining, 10 + Math.floor(Math.random() * 31));
      const seen = stock;
      if (seen > 0) {
        sold += wave;
        stock = seen - wave;
      }
      remaining -= wave;
    }
    return {
      sold: sold,
      oversold: Math.max(0, sold - STOCK),
      blocked: 0,
      soldOut: REQUESTS - sold,
    };
  }

  // 四层防线：限流 -> Redis + Lua 原子扣减 -> 消息队列 -> MySQL
  const passed = Math.min(REQUESTS, RATE_LIMIT_PASS);
  const sold = Math.min(STOCK, passed);
  return {
    sold: sold,
    oversold: 0,
    blocked: REQUESTS - passed,
    soldOut: passed - sold,
  };
}

export default function FlashSaleDemo({ theme }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("pipeline");
  const [result, setResult] = useState(null);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const chooseMode = (next) => {
    if (running) {
      return;
    }
    setMode(next);
    setResult(null);
    setProgress(0);
  };

  const start = () => {
    if (running) {
      return;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setResult(simulate(mode));
    setProgress(0);
    setRunning(true);
    let p = 0;
    timerRef.current = setInterval(() => {
      p += 0.04;
      if (p >= 1) {
        p = 1;
        clearInterval(timerRef.current);
        timerRef.current = null;
        setRunning(false);
      }
      setProgress(p);
    }, 40);
  };

  const shown = (key) => (result ? Math.round(result[key] * progress) : 0);
  const oversold = shown("oversold");

  const stats = [
    { label: "Sold", value: shown("sold") },
    {
      label: "Oversold",
      value: oversold,
      color: oversold > 0 ? "#dc2626" : "#16a34a",
    },
    { label: "Blocked by rate limiter", value: shown("blocked") },
    { label: "Rejected: sold out", value: shown("soldOut") },
  ];

  return (
    <div className="fs-demo">
      <button
        className="fs-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        style={{ color: theme.text, borderColor: theme.imageHighlight }}
      >
        {open ? "Hide" : "Try"} the flash-sale simulator
      </button>

      {open && (
        <div
          className="fs-card"
          style={{ backgroundColor: theme.highlight, color: theme.text }}
        >
          <p className="fs-intro" style={{ color: theme.secondaryText }}>
            {REQUESTS} requests rush to buy {STOCK} items at the same moment.
            Compare a naive check-then-update with the layered design used in
            Blueprint Seckill.
          </p>

          <div className="fs-modes">
            <button
              className={"fs-mode" + (mode === "naive" ? " fs-mode-on" : "")}
              onClick={() => chooseMode("naive")}
              aria-pressed={mode === "naive"}
              style={{ borderColor: theme.imageHighlight, color: theme.text }}
            >
              Naive (no protection)
            </button>
            <button
              className={"fs-mode" + (mode === "pipeline" ? " fs-mode-on" : "")}
              onClick={() => chooseMode("pipeline")}
              aria-pressed={mode === "pipeline"}
              style={{ borderColor: theme.imageHighlight, color: theme.text }}
            >
              Layered pipeline
            </button>
          </div>

          <div className="fs-flow" style={{ color: theme.secondaryText }}>
            {mode === "pipeline"
              ? "Rate limiter → Redis + Lua (atomic deduction) → RabbitMQ → MySQL (unique index)"
              : "Application reads the stock, then updates MySQL (two separate steps)"}
          </div>

          <button
            className="fs-run"
            onClick={start}
            disabled={running}
            style={{ backgroundColor: theme.imageHighlight, color: "#ffffff" }}
          >
            {running ? "Running..." : "Run simulation"}
          </button>

          <div className="fs-stats">
            {stats.map((stat) => (
              <div className="fs-stat" key={stat.label}>
                <div
                  className="fs-stat-value"
                  style={{ color: stat.color || theme.text }}
                >
                  {stat.value}
                </div>
                <div
                  className="fs-stat-label"
                  style={{ color: theme.secondaryText }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="fs-note" style={{ color: theme.secondaryText }}>
            This is a simplified simulation running in your browser, to
            illustrate the idea. The naive version's numbers change from run to
            run. The real load-test results are described in the{" "}
            <a
              href="https://github.com/jingyu09/blueprint-seckill"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.text }}
            >
              project repository
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
