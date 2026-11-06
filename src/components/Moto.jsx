import FotoConEmoji from './FotoConEmoji.jsx';
import { formatoPrecio } from '../data/motos.js';

function BarraStat({ etiqueta, porcentaje, valor }) {
  return (
    <div className="barra-stat">
      <span>{etiqueta}</span>
      <div className="riel"><i style={{ width: `${porcentaje}%` }}></i></div>
      <span>{valor}</span>
    </div>
  );
}

export default function Moto({ moto: m }) {
  return (
    <article className="moto">
      <FotoConEmoji className="foto" emoji={m.emoji} src={m.img} alt={m.nombre}>
        <span className="cc">{m.cc}</span>
      </FotoConEmoji>
      <div className="cuerpo">
        <div className="tipo">{m.tipo}</div>
        <h3>{m.nombre}</h3>
        <BarraStat etiqueta="Potencia" porcentaje={Math.min(100, m.pot / 2)} valor={`${m.pot} hp`} />
        <BarraStat etiqueta="Velocidad" porcentaje={m.vel} valor={`${m.vel}%`} />
        <div className="pie">
          <div className="precio">{formatoPrecio(m.precio)}</div>
          <a href="#contacto">Cotizar</a>
        </div>
      </div>
    </article>
  );
}
