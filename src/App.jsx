// src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.background = window.Telegram.WebApp.themeParams.bg_color || "#1e1e1e";
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30%' }}>
      <h1 style={{ color: "#fff" }}>Click Counter</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          fontSize: "2rem",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          background: "#0088cc",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default App;
