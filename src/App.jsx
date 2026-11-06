import { useEffect, useRef, useState } from 'react';
import Cinta from './components/Cinta.jsx';
import Barra from './components/Barra.jsx';
import Portada from './components/Portada.jsx';
import Marcador from './components/Marcador.jsx';
import Historia from './components/Historia.jsx';
import Idea from './components/Idea.jsx';
import Categorias from './components/Categorias.jsx';
import Catalogo from './components/Catalogo.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // null = el catálogo está oculto; si no, guarda la categoría activa
  const [filtro, setFiltro] = useState(null);
  const catalogoRef = useRef(null);

  // Cada vez que se elige un filtro, se baja suavemente hasta el catálogo
  useEffect(() => {
    if (filtro !== null) {
      catalogoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [filtro]);

  return (
    <>
      <Cinta />
      <Barra onCatalogo={setFiltro} />
      <Portada onCatalogo={setFiltro} />
      <Marcador />
      <Historia />
      <Idea />
      <Categorias onCatalogo={setFiltro} />
      {filtro !== null && <Catalogo ref={catalogoRef} filtro={filtro} onFiltro={setFiltro} />}
      <Footer />
    </>
  );
}
