//import { Action } from "./Actions";
export type Favorito = {
    name: string
    author: string
    type: string
}

interface Action {
    type: string;
    payload: string;
  }

export const Reducer = (state, action:Action) => {
  console.log(action)
 switch (action.type) {
     case "ADD_FAV":{
         return {
          ...state, 
          favorito: [...state ,action.payload]
         };
        }
 }
 return state;
}
