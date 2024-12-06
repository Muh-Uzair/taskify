import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App2 from "./App2";
// import App from "./App.tsx";
// import TodoContextProvider from "./TodoContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TodoContextProvider>
      <App />/
    </TodoContextProvider> */}
    <App2 />
  </StrictMode>,
);
