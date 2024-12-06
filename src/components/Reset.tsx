import React from "react";
import { useApp2Context } from "../useApp2Context";

const Reset: React.FC = () => {
  //VARS
  const { dispatch } = useApp2Context();

  // JSX
  return (
    <section>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="rounded-[3px] bg-blue-400 px-[5px] text-white"
      >
        Reset
      </button>
    </section>
  );
};

export default Reset;
