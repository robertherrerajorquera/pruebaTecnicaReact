import { createContext, ReactNode, useReducer, FC } from "react";
import {Reducer} from "./Reducer";

type Props = {
  children?: ReactNode,

  // any props that come into the component
}

const initialState = {
  favoritos: [
    {
      name: "A Game of Thrones",
      author: "George R. R. Martin",
      type: "Hardcover"
    },
    {
      name: "A Clash of Kings",
      author: "George R. R. Martin",
      type: "Hardback"
    },
    {
      name: "A Storm of Swords",
      author: "George R. R. Martin",
      type: "Hardcover"
    },
  ],
};



export const GlobalContext = createContext(initialState);
export const ContextProvider: FC<Props>= ({ children }) => {


  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
