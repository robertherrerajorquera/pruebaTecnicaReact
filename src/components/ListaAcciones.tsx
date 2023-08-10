import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const ListaAcciones = () => {

   
    const [favorito, setfavorito] = useState({
        name: '',
        autor: '',
        genero: ''
    });
    const { favoritos } = useContext(GlobalContext);


    console.log(favoritos);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setfavorito({ ...favorito, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //  evita que la pagina se recargue
        dispatch({
            type: 'ADD_FAV', value: favorito
        })
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
                        <input type="text" onChange={handleChange} name="autor" placeholder="Autor del libro" className="focus:outline-none focus:text-black-100 w-full" />
                    </div>
                    <div className="mb-5">
                        <input type="text" onChange={handleChange} name="genero" placeholder="Genero del libro" className="focus:outline-none focus:text-black-100 w-full" />
                    </div>
                    <button className="w-full">Agregar Favorito</button>
                </form>
            </div>
        </div>
    )
}
