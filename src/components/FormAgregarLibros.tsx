import { useFormik } from 'formik';
import { validateFormAddBook } from './models/validateFormAddBook';

export const FormAgregarLibros = () => {
  
  const validate = (values:validateFormAddBook) => {
    const errors:validateFormAddBook = {'titulo': '', 'autor': '', 'genero': '', 'fechaEdicion': ''};
    if (!values.titulo) {
      errors.titulo = 'Rellene titulo, campo obligatorio.';
    } else if (values.titulo.length <= 8) {
      errors.titulo = 'Titulo debe ser de mas de 8 caracteres';
    }
 
    if (!values.autor) {
      errors.autor = 'Rellene Autor, campo obligatorio.';
    } else if (values.autor.length <= 6) {
      errors.autor = 'Autor debe tener de mas de 8 caracteres';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      titulo: '',
      autor: '',
      genero: '',
      fechaEdicion: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div className='flex justify-center items-center mt-5'>
      <div className="w-full max-w-xs box">
        <form onSubmit={formik.handleSubmit} className="container bg-white shadow-md shadow-gray-300 shadow-box-personal rounded px-8 pt-6 pb-8 mb-4">
          <div className="md:flex md:items-center mb-6">

            <label htmlFor="titulo" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Titulo</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="titulo"
              name="titulo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.titulo}
            />
            {formik.errors.titulo ? <div>{formik.errors.titulo}</div> : null}
          </div>
          <div className="md:flex md:items-center mb-6">
            <label htmlFor="autor" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Autor</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="autor"
              name="autor"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.autor}
            />
            {formik.errors.autor ? <div>{formik.errors.autor}</div> : null}
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
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <label htmlFor="fechaEdicion" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Fecha Publicacion</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaEdicion"
              name="fechaEdicion"
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
