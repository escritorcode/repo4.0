// Esta es la solucion propuesta del ejercicio 1


function PagoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
    let costosPorDia = { Compacto: 1400, Mediano: 1700, Camioneta: 2800 }; // esto es un objeto la cual declare costosPorDia
    return costosPorDia[tipoVehiculo] * diasAlquiler + (sillaBebe ? 1200 * diasAlquiler : 0); // Aqui se retorna la operacion, [tipoVehiculo] = es el parametro almacena en objeto pasada por un parametro
  }

  let totalPagar = PagoAlquiler("Compacto", 5, true) // funcion expresada para llamar nuestro parametros
  console.log('Total a pagar:', totalPagar); // ejecutando la funcion expresada totalPagar que almacena la funcion Pago Alquiler