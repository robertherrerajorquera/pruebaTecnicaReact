import { useState, useContext } from 'react';
//import { GlobalContext } from '../context/GlobalContext';
import { BooksContext } from "../context/BooksContext";



export const ListaAcciones = () => {
    const [favorito, setfavorito] = useState({
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
    });
    const  ctx  = useContext(BooksContext);
    const { favoritosAction } = ctx;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setfavorito({ ...favorito, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //  evita que la pagina se recargue
        favoritosAction(favorito);

    }
    return (
        <div className="flex justify-center items-center">
            <div className="container text-black bg-white shadow-md shadow-gray-300 rounded px-8 pt-6 pb-8 mb-4">
            <h4>Lista Acciones</h4>
                <form onSubmit={handleSubmit} >
                    <h2>Agrega libro a tus favoritos</h2>
                    <div className="mb-5">
                        <input type="text" onChange={handleChange} name="name" placeholder="Titulo del libro" className=" focus:outline-none focus:text-black-100 w-full" />
                    </div>
                    <div className="mb-5">
                        <input type="text" onChange={handleChange} name="authors" placeholder="Autor del libro" className="focus:outline-none focus:text-black-100 w-full" />
                    </div>
                    <div className="mb-5">
                        <input type="text" onChange={handleChange} name="mediaType" placeholder="Genero del libro" className="focus:outline-none focus:text-black-100 w-full" />
                    </div>
                    <button className="w-full">Agregar Favorito</button>
                </form>
            </div>
        </div>
    )
}

