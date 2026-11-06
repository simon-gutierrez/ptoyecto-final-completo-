import { categorias } from '../data/motos.js';

export default function Categorias({ onCatalogo }) {
  return (
    <section className="categorias" id="categorias">
      <div className="ancho">
        <span className="rotulo">Elige tu estilo</span>
        <h2 className="titulo">Nuestras <span>categorías</span></h2>
        <div className="fila-cat">
          {categorias.map((c, i) => (
            <button key={c.nombre} className="cat" onClick={() => onCatalogo(c.nombre)}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="ico">{c.emoji}</span>
              <h3>{c.nombre}</h3>
              <small>{c.lema}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
