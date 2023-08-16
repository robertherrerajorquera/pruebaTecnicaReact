//import { Books } from "../components/models/books"
import { useContext, Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { BooksContext } from "../context/BooksContext";
import { ListaAcciones } from "../components/ListaAcciones";


export const Favoritos = () => {
  const data = useContext(BooksContext);

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <div className="flex justify-center grid grid-rows-2">

      <div className="grid row-span-3">
        <h1 className="">Lista de Favoritos</h1>
        <div className="m-3">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Agregar Favoritos
          </button>
        </div>
      </div>

      <div className="grid row-span-2">
        <div className="">
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


        <div className="">
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                     <h2>Agrega libro a tus favoritos</h2>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    <ListaAcciones></ListaAcciones>
                    </p>
                  </div>

      
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
          
        </div>
      </div>

    </div>
  )
}
