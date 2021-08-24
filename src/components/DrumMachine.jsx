import React from "react";
import DrumState from "../context/DrumState";

import DrumPad from "./DrumPad";
import ControlPanel from "./ControlPanel";

const DrumMachine = () => {
  return (
    <DrumState>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly  py-10 my-4 font-russo bg-gray-700 w-4/5 md:w-8/12 h-4/5  border-4 border-regal-purple">
        <DrumPad />
        <ControlPanel />
      </div>
    </DrumState>
  );
};

export default DrumMachine;
