import {NavLink} from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <div className='linksHeader'>
      <NavLink className={({isActive})=>(isActive ? "activado": "desactivado")} to="/">Home</NavLink>
        <NavLink className={({isActive})=>(isActive ? "activado": "desactivado")} to="/agreagar-libro">Agregar Libro</NavLink>
        <NavLink className={({isActive})=>(isActive ? "activado": "desactivado")} to="/favoritos">Favoritos</NavLink>
      </div>
       
    </nav>
  )
}

