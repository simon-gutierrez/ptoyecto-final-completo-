import { marcador } from '../data/motos.js';

export default function Marcador() {
  return (
    <div className="marcador">
      {marcador.map((m) => (
        <div key={m.texto}>
          <strong>{m.valor}</strong>
          <span>{m.texto}</span>
        </div>
      ))}
    </div>
  );
}
