import React from "react";
import { useApp2Context } from "../useApp2Context";

// FN
const getFutureDate = (daysToAdd: number): string => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate); // Create a copy of the current date
  futureDate.setDate(currentDate.getDate() + daysToAdd); // Add the specified number of days
  return futureDate.toDateString(); // Format as "Fri Dec 06 2024"
};

// CMP
const MainDateDisplay: React.FC = () => {
  // VARS
  const {
    state: { daysCount },
    dispatch,
  } = useApp2Context();

  const futureDate = getFutureDate(daysCount);

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
          id="daysInput"
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
        <p>{futureDate}</p>
      </div>
    </main>
  );
};

export default MainDateDisplay;
