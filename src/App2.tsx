import React from "react";
import App2Content from "./components/App2Content";
import App2ContextProvider from "./App2ContextProvider";

const App2: React.FC = () => {
  // JSX
  return (
    <div>
      <App2ContextProvider>
        <App2Content />
      </App2ContextProvider>
    </div>
  );
};

export default App2;
