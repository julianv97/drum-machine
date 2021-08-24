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
          ? "bg-gray-300 w-20 h-20 md:w-24 md:h-24 cursor-pointer flex items-center justify-center rounded-md shadow-2xl hover:bg-regal-purple"
          : "bg-regal-purple w-18 h-18 md:w-22 md:h-22 cursor-pointer flex items-center justify-center rounded-md"
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
