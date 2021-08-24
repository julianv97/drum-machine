import React from "react";
import DrumState from "../context/DrumState";

import DrumPad from "./DrumPad";
import ControlPanel from "./ControlPanel";

const DrumMachine = () => {
  return (
    <DrumState>
      <div className="flex flex-col md:flex-row items-center justify-center  pt-10 font-russo bg-gray-300 w-4/5 h-4/5 mt-10 border-4 border-blue-600">
        <DrumPad />
        <ControlPanel />
      </div>
    </DrumState>
  );
};

export default DrumMachine;
