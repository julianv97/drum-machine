import React, { useReducer } from "react";

import DrumContext from "./DrumContext";
import DrumReducer from "./DrumReducer";

import { bankOne, bankTwo } from "../context/bank";

const DrumState = (props) => {
  const initialState = {
    bank: bankOne,
  };

  const [state, dispatch] = useReducer(DrumReducer, initialState);

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
