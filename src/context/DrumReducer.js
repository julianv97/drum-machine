const DrumReducer = (state, action) => {
  switch (action.type) {
    case "SOUND_TRACK":
      const audio = document.querySelector(
        `audio[data-key="${action.payload}"]`
      );
      if (!audio) return { ...state };
      audio.currentTime = 0;
      audio.play();
      return { ...state };
    default:
      throw new Error("no hay dispatch");
  }
};

export default DrumReducer;
