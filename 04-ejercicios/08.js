//CREAR UN ALGORITMO QUE TOME UN ARRAY DE OBJETOS Y DEVUELVA UN ARRAY DE PARES
let array = [{
  id:1,
  name:'juan'
},{
  id:2,
  name:'pedro'
}, {
  id:3,
  name:'carlos'
}];

function toPairs(array){
  let pairs = [];
  for ( idx in array){
    let elemento = array[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let pares = toPairs(array);
console.log(pares);