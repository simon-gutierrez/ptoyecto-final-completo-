import FotoConEmoji from './FotoConEmoji.jsx';

export default function Portada({ onCatalogo }) {
  return (
    <header className="portada" id="inicio">
      <div className="izq">
        <span className="creador">Creado por: Simón Gutiérrez Marín 11-5</span>
        <h1>Vive la ruta <span>a toda velocidad</span></h1>
        <p>
          Motos deportivas, scooters, touring y todoterreno. Elige la tuya, siente la potencia y
          sal a rodar.
        </p>
        <button className="btn" onClick={() => onCatalogo('Todo')}>
          Conoce nuestro catálogo
        </button>
        <a className="btn alt" href="#historia">Nuestra historia</a>
      </div>
      <FotoConEmoji
        className="der"
        emoji="🏍️"
        src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200"
        alt="Moto en la carretera"
      >
        <div className="tag">Garantía · Financiación</div>
      </FotoConEmoji>
    </header>
  );
}
