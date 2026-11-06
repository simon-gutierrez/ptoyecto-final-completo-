import { forwardRef } from 'react';
import Moto from './Moto.jsx';
import { motos, filtros } from '../data/motos.js';

const Catalogo = forwardRef(function Catalogo({ filtro, onFiltro }, ref) {
  const lista = filtro === 'Todo' ? motos : motos.filter((m) => m.tipo === filtro);

  return (
    <section className="catalogo" id="catalogo" ref={ref}>
      <div className="ancho">
        <span className="rotulo">Inventario</span>
        <h2 className="titulo">Catálogo de <span>motos</span></h2>

        <div className="filtros">
          {filtros.map((f) => (
            <button
              key={f}
              className={`filtro ${f === filtro ? 'activo' : ''}`}
              onClick={() => onFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="motos">
          {lista.map((m) => (
            <Moto key={m.nombre} moto={m} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Catalogo;
