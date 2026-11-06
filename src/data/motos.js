const U = (id) => `https://images.unsplash.com/photo-${id}?w=700&h=450&fit=crop`;

// "pot" (hp) y "vel" (0 a 100) alimentan las barras de cada moto.
// Si una foto no carga, se muestra el emoji.
// Para usar fotos propias, cambia "img" por una ruta local (ej. '/img/moto.jpg').
export const motos = [
  { nombre: 'Rayo R6 Sport', tipo: 'Deportivas', cc: '600 cc', precio: 62000000, pot: 118, vel: 95, emoji: '🏍️', img: U('1558981806-ec527fa84c39') },
  { nombre: 'Viper 1000', tipo: 'Deportivas', cc: '1000 cc', precio: 98000000, pot: 200, vel: 100, emoji: '🏍️', img: U('1568772585407-9361f9bf3a87') },
  { nombre: 'Falcon 300', tipo: 'Deportivas', cc: '300 cc', precio: 24000000, pot: 40, vel: 70, emoji: '🏍️', img: U('1609630875171-b1321377ee65') },
  { nombre: 'Urban Scoot 125', tipo: 'Scooters', cc: '125 cc', precio: 9500000, pot: 11, vel: 40, emoji: '🛵', img: U('1558980664-10e7170b5df9') },
  { nombre: 'City Glide 150', tipo: 'Scooters', cc: '150 cc', precio: 12500000, pot: 14, vel: 48, emoji: '🛵', img: U('1571068316344-75bc76f77890') },
  { nombre: 'Maxi Scooter 300', tipo: 'Scooters', cc: '300 cc', precio: 28000000, pot: 28, vel: 62, emoji: '🛵', img: U('1591637333184-19aa84b3e01f') },
  { nombre: 'Nómada GT 900', tipo: 'Touring', cc: '900 cc', precio: 85000000, pot: 95, vel: 80, emoji: '🧳', img: U('1449426468159-d96dbf08f19f') },
  { nombre: 'Cruiser Clásica 750', tipo: 'Touring', cc: '750 cc', precio: 58000000, pot: 52, vel: 66, emoji: '🧳', img: U('1558980394-4c7c9299fe96') },
  { nombre: 'Ruta Sport Touring', tipo: 'Touring', cc: '650 cc', precio: 47000000, pot: 70, vel: 74, emoji: '🧳', img: U('1525160354320-d8e92641c563') },
  { nombre: 'Trail X 250', tipo: 'Todoterreno', cc: '250 cc', precio: 17500000, pot: 24, vel: 55, emoji: '⛰️', img: U('1547549082-6bc09f2049ae') },
  { nombre: 'Enduro Pro 450', tipo: 'Todoterreno', cc: '450 cc', precio: 39000000, pot: 52, vel: 72, emoji: '⛰️', img: U('1596357395217-80de13130e92') },
  { nombre: 'Aventura 800', tipo: 'Todoterreno', cc: '800 cc', precio: 76000000, pot: 90, vel: 84, emoji: '⛰️', img: U('1609630875171-b1321377ee66') },
];

export const filtros = ['Todo', 'Deportivas', 'Scooters', 'Touring', 'Todoterreno'];

export const categorias = [
  { nombre: 'Deportivas', emoji: '🏍️', lema: 'Velocidad pura' },
  { nombre: 'Scooters', emoji: '🛵', lema: 'Ideales para la ciudad' },
  { nombre: 'Touring', emoji: '🧳', lema: 'Viajes largos y cómodos' },
  { nombre: 'Todoterreno', emoji: '⛰️', lema: 'Barro, trocha y aventura' },
];

export const marcador = [
  { valor: '0–100', texto: 'en menos de 3,5 s' },
  { valor: '1.000+', texto: 'motos entregadas' },
  { valor: '15', texto: 'años de experiencia' },
  { valor: '24/7', texto: 'asistencia en ruta' },
];

export const paradas = [
  { anio: '2011', titulo: 'El taller', texto: 'Abrimos con dos mecánicos y un banco de trabajo.' },
  { anio: '2016', titulo: 'Primera sala de ventas', texto: 'Empezamos a vender motos nuevas de marcas aliadas.' },
  { anio: '2021', titulo: 'Motos de aventura', texto: 'Sumamos touring y todoterreno para viajar lejos.' },
  { anio: '2026', titulo: 'Hoy', texto: 'Más de 1.000 motociclistas ruedan con nosotros.' },
];

export const formatoPrecio = (n) => '$' + n.toLocaleString('es-CO');
