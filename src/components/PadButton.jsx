import React, { useContext, useEffect, useRef } from "react";
import DrumContext from "../context/DrumContext";

const PadButton = ({ item }) => {
  const { state, handleDispatch } = useContext(DrumContext);

  const refAudio = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === item.keyTrigger) {
      handleDispatch("SOUND_TRACK", refAudio.current);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        !(state.isSound === item.id)
          ? "bg-gray-500 w-20 h-20 cursor-pointer flex items-center justify-center rounded-md shadow-2xl hover:bg-blue-700"
          : "bg-blue-700 w-20 h-20 cursor-pointer flex items-center justify-center rounded-md"
      }
      onClick={() => handleDispatch("SOUND_TRACK", refAudio.current)}
    >
      <audio
        src={item.url}
        data-key={item.keyTrigger}
        ref={refAudio}
        id={item.id}
      ></audio>
      {item.keyTrigger}
    </div>
  );
};

export default PadButton;
