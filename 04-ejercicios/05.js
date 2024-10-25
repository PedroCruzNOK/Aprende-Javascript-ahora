//DEVUELVE EL NUMERO MAYOR Y EL NUMERO MENOR DE UN ARRAY

let array = [50, 56,-121,23,-9,234,74,123,0, 94, -345,-34];
function getMenorMayor(arr){
  let tam = arr.length-1;
  let numMenor = arr[tam];
  let numMayor = arr[tam];
  let i = 0;
  while (i <= arr.length-2) {
    if(numMenor >= arr[tam-1]){
      numMenor = arr[tam-1]; 
    }
    if(numMayor <= arr[tam-1]){
      numMayor = arr[tam-1];
    }
    tam--;
    i++;
  }
  let resultado = ['tu numero menor:',numMenor,  ' Tu numero mayor: ',numMayor];
  return resultado;
}


//Tambien esta seria una muy buena solucion

function getMenorMayor2(arr){
  let menor = arr[0];
  let mayor = arr[0];

  for (numero of arr){
    menor = menor <= numero ? menor : numero;
    mayor = mayor >= numero ? mayor : numero;
  }
  return [menor, mayor];
}


let numeros = getMenorMayor2(array);
console.log(numeros);


