let user = {
  id: 1,
  name: 'pedro',
  age : 25
};

//se usa principalmente para acceder a los valores de  las propiedades de un objeto

for (let prop in user){
  console.log(prop, user[prop]);
}