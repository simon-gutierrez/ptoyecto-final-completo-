import { paradas } from '../data/motos.js';

export default function Historia() {
  return (
    <section className="historia" id="historia">
      <div className="ancho">
        <span className="rotulo">Nuestra historia</span>
        <div className="grid">
          <div>
            <h2 className="titulo">Nacimos en <span>el taller</span></h2>
            <p>
              Turbo Moto empezó en 2011 en un taller pequeño de Medellín, arreglando motos para los
              amigos del barrio. Entre llaves, aceite y carreras de domingo, nos dimos cuenta de
              que lo que más nos gustaba era ver a alguien estrenar su primera moto.
            </p>
            <p>
              Hoy vendemos motos nuevas y usadas revisadas una por una, con asesoría honesta,
              financiación y servicio técnico, porque creemos que una moto no se vende: se comparte
              la pasión por rodar.
            </p>
          </div>
          <div className="ruta">
            {paradas.map((p) => (
              <div className="parada" key={p.anio}>
                <b>{p.anio}</b> {p.titulo}
                <p>{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
