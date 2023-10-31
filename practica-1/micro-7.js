let input ="sumar"
let valor1,valor2,resultado;
valor1 = 22;
valor2 = 16;


switch (input) {
    case "sumar":
        resultado = valor1 + valor2;
        console.log(`El resultado de sumar es: ${resultado}`);
        break;
    case "restar":
         resultado = valor1 - valor2
        console.log(`El resultado de restar es: ${resultado}`);
        break;
    case "multiplicar" :
         resultado = valor1 *  valor2
        console.log(`El resultado de multiplicar es: ${resultado}`);
        break;
    case "dividir" :
        resultado = valor1 / valor2
       console.log(`El resultado de dividir es: ${resultado}`);
       break;
    default:
         console.log("Opcion no Valida, Ingrese una Opción Valida");
        break;
}