import React, { useContext } from "react";
import { Switch } from "@headlessui/react";

import DrumContext from "../context/DrumContext";

const SwitchButton = ({ state, action, label, bg }) => {
  const { handleDispatch } = useContext(DrumContext);
  return (
    <Switch.Group>
      <div className="text-black font-semibold text-sm pb-4 flex flex-col">
        <Switch.Label className="capitalize w-11">{label}</Switch.Label>
        <Switch
          checked={state}
          onChange={() => handleDispatch(action, !state)}
          className={`${
            state ? "bg-blue-600" : bg
          } relative inline-flex items-center h-6 rounded-full w-11 transform ease-in-out duration-200`}
        >
          <span className="sr-only">Enable power</span>
          <span
            className={`${
              state ? "translate-x-6" : "translate-x-1"
            }  w-4 h-4 flex  bg-white rounded-full transform ease-in-out duration-300`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default SwitchButton;
