import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import TodoContextProvider from "./TodoContextProvider.tsx";
// import AppCalc from "./AppCalc";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
    {/* <AppCalc /> */}
  </StrictMode>,
);
