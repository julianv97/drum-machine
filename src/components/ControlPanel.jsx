import React, { useContext } from "react";
import DrumContext from "../context/DrumContext";
import SwitchButton from "./SwitchButton";

const ControlPanel = () => {
  const { state, handleDispatch } = useContext(DrumContext);

  return (
    <section className="flex flex-col items-center text-black">
      <article>
        <SwitchButton
          state={state.power}
          action={"SET_POWER"}
          label={"Power"}
          bg={"bg-gray-700"}
        />
      </article>
      <article className="h-10 w-40 bg-gray-400 flex justify-center items-center">
        {state.power ? state.currentTrack : ""}
      </article>
      <article>
        <input
          type="range"
          max="1"
          min="0"
          step="0.01"
          onChange={(e) => handleDispatch("SET_VOLUME", e.target.value)}
        />
      </article>
      <article>
        <SwitchButton
          state={state.isChangeBank}
          action={"CHANGE_BANK"}
          label={"Bank"}
          bg="bg-blue-600"
        />
      </article>
    </section>
  );
};

export default ControlPanel;
