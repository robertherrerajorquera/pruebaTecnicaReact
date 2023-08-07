import { useFormik } from 'formik';

export const FormAgregarLibros = () => {
  const formik = useFormik({
    initialValues: {
      titulo: '', 
      autor: '',
      genero: '',
      fechaEdicion: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='flex justify-center items-center mt-5'>
<div className="w-full max-w-xs box"> 
  <form className="container bg-white shadow-md shadow-gray-300 shadow-box-personal rounded px-8 pt-6 pb-8 mb-4">
    <div className="md:flex md:items-center mb-6">

    <label htmlFor="titulo" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Titulo</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="titulo"
        name="titulo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.titulo}
      />
    </div>
    <div className="md:flex md:items-center mb-6">
    <label htmlFor="autor" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Autor</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="autor"
        name="autor"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.autor}
      />
    </div>
    <div className="md:flex md:items-center mb-6">
      <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="grid-state">
        Genero
      </label>
      <div className="relative">
        <select className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-state">
          <option>Hardcover</option>
          <option>GraphicNovel</option>
          <option>Paperback</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
    <label htmlFor="fecha" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Fecha Publicacion</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fecha"
        name="fecha"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.fechaEdicion}
      />
    </div>
    <div className="flex items-end justify-evenly">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Guardar Libro
      </button>
    </div>
  </form>
    </div>
    </div>
  );
}
