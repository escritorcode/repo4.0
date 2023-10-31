/** 
function usuario(nombre,apellido,edad){
    let datosUsuario ={
        nombre: nombre,
        Apellido: apellido,
        edad: edad
    }
    console.log(datosUsuario)
  }
*/

// nombre y apellido son parametros
// nombreCompleto es el nombre de la función
/** 
function nombreCompleto(nombre,apellido){
    return nombre+" "+apellido
}

console.log(nombreCompleto("Angie","Ceballos")); // funcion con valores de los parametros
*/

/*function suma(numeroA,numeroB, numeroC = 1){
   return numeroA * numeroB * numeroC
}

console.log(suma(22,3));
console.log(suma(100,200,4));*/

function boletoAvion(boleto){
    if(boleto >= 100 && boleto <= 200){
        console.log("Vas a volar en clase baja");
    }
    else if(boleto >= 201 && boleto <= 500){
        console.log("Vas a volar en clase media");
    }
    else if(boleto >= 501 && boleto <= 1000){
        console.log("Vas a volar en clase alta");
    }
    else{
        console.log("Ingrese un valor correcto");
    }
}
boletoAvion(99);

function usandoSwitch(animal){
    switch(animal){
        case "perro":
        console.log("Este es un perro");
        break;
        case "gato":
        console.log("Este es un gato");
        break;
        case "conejo":
        console.log("Este es un conejo");
        break;
        case "zorra":
        console.log("Esta es una zorra");
        break;
        default:
        console.log("Animal no encontrado");
    }
}
usandoSwitch("perro");











