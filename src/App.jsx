import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#eee",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Dark Mode Click Counter</h1>
      <p style={{ fontSize: "2rem", margin: "20px 0" }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "1.2rem",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#bb86fc",
          color: "#121212",
          boxShadow: "0 4px 6px rgba(187, 134, 252, 0.5)",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#985eff")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#bb86fc")}
      >
        Click me
      </button>
    </div>
  );
}
