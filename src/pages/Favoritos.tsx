//import { Books } from "../components/models/books"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ListaAcciones } from "../components/ListaAcciones";


export const Favoritos = () => {
  const { favoritos } = useContext(GlobalContext);
  console.log(favoritos);

  return (
    <div className="flex justify-center">
  
      <div className="w-full">
      <h1>Lista de Favoritos</h1>
        <div className="w-6/12">
          {favoritos.map((favorito) => (
            <div key={favorito.name} className="bg-white shadow-md shadow-gray-300 shadow-box-personal rounded px-8 pt-6 pb-8 mb-4">
              <div>
                <h5>Titulo: {favorito.name}</h5>
                <h6>Autor: {favorito.author}</h6>
                <h6>Genero: {favorito.genero}</h6>
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
