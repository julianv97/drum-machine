import React, { useContext } from "react";
import DrumContext from "../context/DrumContext";
import SwitchButton from "./SwitchButton";

const ControlPanel = () => {
  const { state, handleDispatch } = useContext(DrumContext);

  return (
    <section className="flex flex-col items-center text-black pt-6">
      <article>
        <SwitchButton
          state={state.power}
          action={"SET_POWER"}
          label={"Power"}
          bg="bg-gray-400"
        />
      </article>
      <article className="h-10 w-40 bg-gray-300 flex justify-center items-center mb-4">
        {state.power ? state.currentTrack : ""}
      </article>
      <article>
        <input
          type="range"
          max="1"
          min="0"
          step="0.01"
          id="myinput"
          onChange={(e) => handleDispatch("SET_VOLUME", e.target.value)}
          className="rounded-lg cursor-pointer overflow-hidden appearance-none bg-gray-400 h-3 w-128"
        />
      </article>
      <article>
        <SwitchButton
          state={state.isChangeBank}
          action={"CHANGE_BANK"}
          label={"Bank"}
          bg="bg-regal-purple"
        />
      </article>
    </section>
  );
};

export default ControlPanel;
