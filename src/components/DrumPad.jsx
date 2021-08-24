import React, { useContext } from "react";
import DrumContext from "../context/DrumContext";

import PadButton from "./PadButton";

const DrumPad = () => {
  const { state } = useContext(DrumContext);
  return (
    <div className="grid grid-cols-3 gap-2">
      {state.bank.map((item) => (
        <PadButton key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DrumPad;
