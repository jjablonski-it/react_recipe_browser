import { cleanup } from "@testing-library/react";
import React, { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

interface Recipe {
  [x: string]: any;
}
export interface State {
  items: Recipe[];
  loading: boolean;
  keywords: string[];
}

export type Action = { type: "TEST" };

const initialState: State = {
  items: [],
  keywords: ["test"],
  loading: false,
};

export const Context = createContext<State>(initialState);

export const Provider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    dispatch({ type: "TEST" });
  }, []);

  return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
};