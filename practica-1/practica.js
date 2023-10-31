// Arrays

let miFamlia = ["Papa","Mama","Abuela","Abuelo",3,true]
console.log(miFamlia.length)

let nombreDeMiHija = miFamlia[1];
console.log("El nombre de mi hija es mayor"+nombreDeMiHija)

console.log(miFamlia.indexOf("Papa"))

if(miFamlia.indexOf("Papa")){
    console.log("El elemento fue encontrado");
}

if(miFamlia.indexOf("Perro") !=-1){
    console.log("El elemento fue encontrado");
}else(
    console.log("Mi perro no esta en el array")
)

let mensaje = "Hola como vamos, espero todo bien";
console.log(mensaje.length)

let arrayString = mensaje.split(",");
console.log(arrayString)