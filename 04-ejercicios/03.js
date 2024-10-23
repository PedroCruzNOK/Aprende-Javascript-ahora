
function getbyIndx(arr, idx){
  if(idx > arr.length-1){
    return false;
  }else{
    return arr[idx];
  }
}

let resultado = getbyIndx([1,4,9,76,3,2,5,3,7,9,2], 30);
console.log(resultado);