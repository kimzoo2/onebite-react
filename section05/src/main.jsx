import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// App이 루트 컴포넌트임 (관례)
createRoot(document.getElementById("root")).render(<App />);
