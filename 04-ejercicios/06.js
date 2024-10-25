/*
  CREAR UN ALGORITMO QUE DEVUELVA LA CANTIDAD DE NUMEROS POSITIVOS DE UN ARRAY.
*/

let array = [213,45,0,-5,123,124,78,123,563,-123];

function cuantosPositivos(array){
  let cantidadPositivos = 0;

  for (let numero of array){
    numero = numero > 0 ? cantidadPositivos++ : cantidadPositivos;
  }

  return cantidadPositivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);