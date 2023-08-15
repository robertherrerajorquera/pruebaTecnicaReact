//import { Books } from "../components/models/books"
import { useContext } from "react";
//import { GlobalContext } from "../context/GlobalContext";
import { BooksContext } from "../context/BooksContext";
import { ListaAcciones } from "../components/ListaAcciones";


export const Favoritos = () => {
  const data = useContext(BooksContext);

  return (
    <div className="flex justify-center">
  
      <div className="w-full">
      <h1>Lista de Favoritos</h1>
        <div className="w-6/12">
          {data.favoritosState.books.map((favorito) => (
            <div key={favorito.name} className="bg-white shadow-md shadow-gray-300 shadow-box-personal rounded px-8 pt-6 pb-8 mb-4">
              <div>
                <h5>Titulo: {favorito.name}</h5>
                <h6>Autor: {favorito.authors}</h6>
                <h6>Genero: {favorito.mediaType}</h6>
              </div>
            </div>
          )
          )}
        </div>
        <div className="w-6/12">
          <ListaAcciones></ListaAcciones>
        </div>
      </div>

    </div>
  )
}
