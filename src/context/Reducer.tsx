//import { Action } from "./Actions";
import { Books} from "../components/models/books";

// interface Action {
//     type: string;
//     payload: string;
//   }
 type BooksAction = 
 | { type: 'AGREGAR_FAVORITOS'; payload: Books};
type State = {
    books: [];
}

export const Reducer = (state: State, action: BooksAction) => {
  console.log("info reducer",state)
  console.log("action reducer",action)
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
