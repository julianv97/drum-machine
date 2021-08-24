import React, { useEffect, useReducer } from "react";

import DrumContext from "./DrumContext";
import DrumReducer from "./DrumReducer";

import { bankOne } from "../context/bank";

const DrumState = (props) => {
  const initialState = {
    bank: bankOne,
    power: true,
    currentTrack: "",
    isSound: false,
    isChangeBank: false,
    volume: 1,
  };

  const [state, dispatch] = useReducer(DrumReducer, initialState);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      handleDispatch("CLEAR_TRACK");
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  });

  const handleDispatch = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  return (
    <DrumContext.Provider value={{ state, handleDispatch }}>
      {props.children}
    </DrumContext.Provider>
  );
};

export default DrumState;
