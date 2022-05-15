import { createRoot } from "react-dom/client";
import App from "./App";

// React 18
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

//
// const rootElement = document.getElementById("root");
