import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // 컴포넌트를 렌더링하는 문법
  <StrictMode>
    <App />
  </StrictMode>
);
