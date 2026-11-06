import { useState } from 'react';

// Muestra la imagen; si no carga, queda visible solo el emoji.
// "children" permite poner elementos extra encima (etiquetas, cilindrada, etc.).
export default function FotoConEmoji({ className, emoji, src, alt, children }) {
  const [fallo, setFallo] = useState(false);

  return (
    <div className={className}>
      <span>{emoji}</span>
      {!fallo && <img src={src} alt={alt} onError={() => setFallo(true)} />}
      {children}
    </div>
  );
}
