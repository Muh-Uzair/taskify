import { useContext } from "react";
import { App2Context } from "./App2Context";

const useApp2Context = () => {
  const context = useContext(App2Context);

  if (!context)
    throw new Error("App2Context must be consumed inside App2ContextProvider");

  return context;
};

export { useApp2Context };
