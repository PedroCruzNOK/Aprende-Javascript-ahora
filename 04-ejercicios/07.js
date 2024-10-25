/*
  CREAR UN ALGORITMO QUE DEVUELVA EL PRECIO DEL PRODUCTO MAS IMPUESTO
*/

function precioCompleto(precio, impuesto){
  let precioFinal = (precio * impuesto) + precio;
  return precioFinal
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);