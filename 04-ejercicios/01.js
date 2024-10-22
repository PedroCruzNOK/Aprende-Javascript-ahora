function numeroMayor(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}

let mayor = numeroMayor2(734, 432);

console.log(mayor);

//tambien se recomienda para mas sencillo utilizar la  condicional ternaria

function numeroMayor2(a, b){
  return (a > b) ? a : b;
}