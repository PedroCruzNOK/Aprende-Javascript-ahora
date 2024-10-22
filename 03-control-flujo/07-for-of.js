//while
// do while
//for

let animales = ['conejo', 'perro', 'iguana','caballo', 'salamandra'];

// se usa principalmente para acceder a los valores de un array
for (let animal of animales){
  console.log(animal);
}


//ejemplo con while
let i = 0;
while (i < animales.length){
  console.log(animales[i]);
  i ++;
}