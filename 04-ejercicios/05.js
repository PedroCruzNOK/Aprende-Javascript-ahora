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
let numeros = getMenorMayor(array);
console.log(numeros);