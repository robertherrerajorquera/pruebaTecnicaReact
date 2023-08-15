//import { Action } from "./Actions";
//import {BooksState, Books} from "../components/models/books";

// interface Action {
//     type: string;
//     payload: string;
//   }
// type BooksAction = 
// | { type: 'AGREGAR_FAVORITOS'; payload: Books};

export const Reducer = (state, action) => {
 // console.log(action)
 switch (action.type) {
     case "AGREGAR_FAVORITOS":{
         return {
          ...state, 
          books: [...state.books , action.payload]
         };
        }
 }
 return state;
}
