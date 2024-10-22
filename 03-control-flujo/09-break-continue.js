let i = 0;
while (i<6){
  i++;
  if (i === 2){
    continue; //en este ejemplo cuando i es igual a 2 se salta el console siguiente y entra a el ciclo
  }
  if (i === 4){ //en este ejemplo si i es igual a 4  se detiene ya el ciclo
    break;
  }
  console.log(i);

}