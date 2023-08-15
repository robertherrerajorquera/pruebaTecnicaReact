import {createContext } from 'react';
import { BooksState } from "../components/models/books";

 export type FavoritosContextState = {
     favoritosState: BooksState,
     favoritosAction: (data:object) => void
 }


//export const BooksContext = createContext({} as Books);
 export const BooksContext = createContext<FavoritosContextState>({} as FavoritosContextState);
