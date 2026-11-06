export default function Barra({ onCatalogo }) {
  return (
    <div className="barra">
      <a className="logo" href="#inicio">Turbo Moto</a>
      <div className="links">
        <a href="#inicio">Inicio</a>
        <a href="#historia">Historia</a>
        <a href="#categorias">Categorías</a>
        <a
          href="#catalogo"
          onClick={(e) => {
            e.preventDefault();
            onCatalogo('Todo');
          }}
        >
          Catálogo
        </a>
        <a href="#contacto">Contacto</a>
      </div>
    </div>
  );
}
