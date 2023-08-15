import { useReducer, FC } from "react";
import { Reducer } from "./Reducer";
import { BooksContext } from "./BooksContext";
//import { Books } from "../components/models/books";


type Props = {
  //children?: ReactNode,
  children: JSX.Element | JSX.Element[]
  // any props that come into the component
}

export const initialState = {
  books: [ {
    url: "",
    name: "A Game of Thrones",
    isbn: "",
    authors: ["George R. R. Martin"],
    numberOfPages: "",
    publisher: "",
    country:"",
    mediaType:"Hardcover",
    released: "",
    characters: [],
    povCharacters: [],
  },
  {
    url: "",	
    name: "A Clash of Kings",
    isbn: "",
    authors: ["George R. R. Martin"],
    numberOfPages: "",
    publisher: "",
    country:"",
    mediaType:"Hardback",
    released: "",
    characters: [],
    povCharacters: [],
  },
  {
    url: "",	
    name: "A Storm of Swords",
    isbn: "",
    authors: ["George R. R. Martin"],
    numberOfPages: "",
    publisher: "",
    country:"",
    mediaType:"Hardcover",
    released: "",
    characters: [],
    povCharacters: [],
  },]
};

//export const GlobalContext = createContext<BooksState>({} as BooksState);
//export const GlobalContext = createContext();
export const ContextProvider: FC<Props>= ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);


  const addUser = (data:object) => {
    try {
      console.log("lista de favoritos", data);
      dispatch({
        type: "AGREGAR_FAVORITOS",
        payload:  data
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BooksContext.Provider value={{favoritosState: state, favoritosAction: addUser}}>
      {children}
    </BooksContext.Provider>
  );
}
