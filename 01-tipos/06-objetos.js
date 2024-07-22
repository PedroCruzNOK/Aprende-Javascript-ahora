// Personaje de tv
let nombre = 'tanjiro';
let anime = 'demon slayer';
let edad = 16;

let personaje = {
  nombre:'Tanjiro',
  anime: 'Demon',
  edad: 16,
};
console.log(personaje.nombre); //acceder a propiedades mediante el punto
console.log(personaje['anime']); //acceder a propiedades mediante la llave
console.log(personaje);

personaje.edad = 13; //asignacion deun valor con respecto a su propiedad
personaje['edad'] = 17; // asignacion de un valor mediante la llave del objeto

let llave = 'anime'; // ejemplo de asignacion de un valor  a la llave para acceder a la propiedad de leprsonaje
personaje[llave];

delete personaje.anime; //eliminar una propiedad de un objeto
console.log(personaje);

