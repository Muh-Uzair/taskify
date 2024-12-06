import React from "react";
import Slider from "./Slider";
import MainDateDisplay from "./MainDateDisplay";
import Reset from "./Reset";

const App2Content: React.FC = () => {
  return (
    <div className="flex h-[400px] w-[400px] flex-col items-center justify-center gap-[10px] rounded-[5px] bg-stone-200">
      <Slider />
      <MainDateDisplay />
      <Reset />
    </div>
  );
};

export default App2Content;
