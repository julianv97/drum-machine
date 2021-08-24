import { bankOne, bankTwo } from "../context/bank";

const DrumReducer = (state, action) => {
  switch (action.type) {
    case "SOUND_TRACK":
      if (!state.power) return state;
      const audio = action.payload;
      if (!audio) return { ...state };
      audio.currentTime = 0;
      audio.volume = state.volume;
      audio.play();
      return { ...state, currentTrack: audio.id, isSound: audio.id };

    case "SET_POWER":
      return { ...state, power: action.payload, currentTrack: "", isSound: "" };

    case "CHANGE_BANK":
      if (state.bank === bankOne) {
        return { ...state, bank: bankTwo, isChangeBank: action.payload };
      }
      return { ...state, bank: bankOne, isChangeBank: action.payload };

    case "SET_VOLUME":
      return { ...state, volume: action.payload };

    case "CLEAR_TRACK":
      return { ...state, isSound: "" };

    default:
      throw new Error("no hay dispatch");
  }
};

export default DrumReducer;
