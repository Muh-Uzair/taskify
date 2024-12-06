import React from "react";
import { useApp2Context } from "../useApp2Context";

const MainDateDisplay: React.FC = () => {
  // VARS
  const {
    state: { daysCount },
    dispatch,
  } = useApp2Context();

  // JSX
  return (
    <main>
      <div className="flex gap-[10px]">
        <button
          onClick={() => dispatch({ type: "removeDay" })}
          className="h-[30px] w-[30px] rounded-[5px] bg-stone-400"
        >
          -
        </button>
        <input
          onChange={(e) =>
            dispatch({
              type: "daysInput",
              payload: { daysInput: Number(e.target.value) },
            })
          }
          className="pl-[5px]"
          value={daysCount}
          type="text"
        />
        <button
          onClick={() => dispatch({ type: "addDay" })}
          className="h-[30px] w-[30px] rounded-[5px] bg-stone-400"
        >
          +
        </button>
      </div>

      <div className="mt-[10px] flex items-center justify-center">
        Date today
      </div>
    </main>
  );
};

export default MainDateDisplay;
