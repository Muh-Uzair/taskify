import React, { useReducer } from "react";

type Action = { type: "add" } | { type: "sub" };

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state > 0 ? state - 1 : state;
  }
};

const AppCalc: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex gap-[10px]">
      <button
        onClick={() => dispatch({ type: "sub" })}
        className="h-[20px] w-[20px] bg-gray-400"
      >
        -
      </button>
      <p>{state}</p>
      <button
        onClick={() => dispatch({ type: "add" })}
        className="h-[20px] w-[20px] bg-gray-400"
      >
        +
      </button>
    </div>
  );
};

export default AppCalc;
