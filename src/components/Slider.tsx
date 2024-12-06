import React from "react";
import { useApp2Context } from "../useApp2Context";

const Slider: React.FC = () => {
  // VARS
  const {
    state: { rangeVal },
    dispatch,
  } = useApp2Context();

  // JSX
  return (
    <section className="flex gap-[5px]">
      <input
        id="slider"
        value={rangeVal}
        onChange={(e) =>
          dispatch({
            type: "setRangeVal",
            payload: { rangeVal: Number(e.target.value) },
          })
        }
        type="range"
      />
      <span>{rangeVal}</span>
    </section>
  );
};

export default Slider;
