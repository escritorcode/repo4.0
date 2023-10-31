// Integración, clase con el profesor Franco
let nombre = "Vladimir"
const apellido = "Martinez"
let edad = 18

if (edad <= 18 && nombre == "Vladimir") {
    console.log("Es menor o igual a 18");
} else {
    console.log("Es mayor a 18");
}

// TERNARIO 
let operacion = 3 < 2 ? "si es correcto" : "es menor"
console.log(operacion);

// Que es una funcion

function esMayor(edad,nombre){
  if(edad >= 18){
    console.log(nombre,"es mayor porque tiene", edad, "años");
    return true
  }
  console.log(nombre, "es menor porque tiene",edad, "años");
}

esMayor(25,"Vladimir")

const nombres = ["Angelica","Manuel","Keyla",[1,2,3]]
console.log(nombres[3][1])

// METODOS
const frase = "divide y venceras"
console.log(frase.replace("venceras","ganaras"));
const nuevaFrase = frase.toUpperCase();
console.log(nuevaFrase);