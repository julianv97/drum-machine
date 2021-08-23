import React, { useContext, useEffect } from "react";
import DrumContext from "../context/DrumContext";

const PadButton = ({ item }) => {
  const { handleDispatch } = useContext(DrumContext);

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === item.keyTrigger) {
      handleDispatch("SOUND_TRACK", e.key.toUpperCase());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button onClick={() => handleDispatch("SOUND_TRACK", item.keyTrigger)}>
      <audio src={item.url} data-key={item.keyTrigger}></audio>
      {item.keyTrigger}
    </button>
  );
};

export default PadButton;
