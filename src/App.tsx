import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Nav } from './Nav';
import { AgregarLibro } from './pages/AgregarLibro';
import { Detalle } from './pages/Detalle';
import { Error404 } from './pages/Error404';
import { Favoritos } from './pages/Favoritos';
import { Home } from './pages/Home';
import { ContextProvider } from "./context/GlobalContext";


function App() {
  //console.log(ContextProvider());
  return (
    <BrowserRouter>
      <ContextProvider>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agreagar-libro" element={<AgregarLibro />} />
          <Route path="/libro" element={<Detalle />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
