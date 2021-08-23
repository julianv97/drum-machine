import React, { useContext, useEffect } from "react";
import DrumContext from "../context/DrumContext";

const PadButton = ({ item }) => {
  const { handleDispatch } = useContext(DrumContext);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handleDispatch("SOUND_TRACK", e.key.toUpperCase());
    });
    return () => document.removeEventListener("keydown", (e) => console.log(e));
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
