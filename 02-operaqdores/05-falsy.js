// corto circuito

//Todos estos valores devuelven false
//false
//0
//''
//null
//undefined
//NaN
let nombre = '';
let username = nombre || 'Anonimo';
console.log( username);

function fn1(){
  console.log('funcion 1');
  return false;
}

function fn2(){
  console.log('funcion 2');
  return true;
}

let x = fn1() && fn12();