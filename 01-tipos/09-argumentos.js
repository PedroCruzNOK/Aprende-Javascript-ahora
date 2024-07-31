function suma(a, b){ //los valores referenciados dentro de las funciones se llaman parametros
  console.log(arguments); //con arguments accedemos a todos los argumentos que se estan pasando en la funcion
  return a+b;
}

let resultado = suma(4,342,6,7,8,9); //los valores que se le pasan  a una funcion se llaman argumentos
console.log(resultado);

console.log(typeof suma);
