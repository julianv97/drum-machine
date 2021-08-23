import React from "react";
import DrumState from "../context/DrumState";

import DrumPad from "./DrumPad";
import ControlPanel from "./ControlPanel";

const DrumMachine = () => {
  return (
    <DrumState>
      <DrumPad />
      <ControlPanel />
    </DrumState>
  );
};

export default DrumMachine;
