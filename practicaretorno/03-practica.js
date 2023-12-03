const bicicletas = [
    {
      id: 1,
      marca: "Olmo",
      modelo: "Regal",
      rodado: 26,
      anio: 2019,
      color: "Celeste",
      peso: 16,
      tipo: "Montañera",
      precio: 20000,
      vendida: true
    },
    {
      id: 2,
      marca: "Olmo",
      modelo: "Regal",
      rodado: 26,
      anio: 2019,
      color: "Celeste",
      peso: 16,
      tipo: "Montañera",
      precio: 20000,
      vendida: false
    },
    {
      id: 3,
      marca: "Olmo",
      modelo: "Regal",
      rodado: 26,
      anio: 2019,
      color: "Celeste",
      peso: 16,
      tipo: "Montañera",
      precio: 20000,
      vendida: true
    },
    {
      id: 4,
      marca: "Olmo",
      modelo: "Regal",
      rodado: 26,
      anio: 2019,
      color: "Celeste",
      peso: 16,
      tipo: "Montañera",
      precio: 20000,
      vendida: false
    }
  ];
  


  //Map: Duplicar los precios de todas las bicicletas:
  //Utiliza la función map para duplicar el precio de cada bicicleta en el array de objetos bicicletas
  const DuplicarPrecioMap = bicicletas.map(dupli => (dupli.precio * 2))
let id = 2;
const BiciporId = bicicletas.find((id)=>{
    return id === id
} )

console.log(DuplicarPrecioMap);
  //Find: Encontrar una bicicleta por ID:
  //Utiliza la función find para encontrar la bicicleta con un ID específico en el array de objetos bicicletas.
const idABuscar = 3; // ID de la bicicleta que queremos encontrar

const bicicletaEncontrada = bicicletas.find(bicicleta => bicicleta.id === idABuscar);

if (bicicletaEncontrada) {
    console.log("Bicicleta encontrada:", bicicletaEncontrada);
} else {
    console.log("No se encontró ninguna bicicleta con ese ID.");
}
console.log(bicicletaEncontrada);
  //Filter: Filtrar bicicletas vendidas:
  //Utiliza la función filter para obtener un array de bicicletas que estén vendidas (vendida: true).
  const bicicletasVendidas = bicicletas.filter(bicicleta => bicicleta.vendida === true);

  console.log("Bicicletas vendidas:", bicicletasVendidas);
  //Map y Reduce: Obtener el precio promedio de las bicicletas no vendidas:
  //Utiliza filter para seleccionar las bicicletas no vendidas, luego map para obtener un array de precios y finalmente reduce para calcular el precio promedio.

  const bicicletasNoVendidas = bicicletas.filter(bicicleta => !bicicleta.vendida);
  const preciosBicicletasNoVendidas = bicicletasNoVendidas.map(bicicleta => bicicleta.precio);
  
  const totalPrecios = preciosBicicletasNoVendidas.reduce((acumulador, precio) => acumulador + precio, 0);
  const precioPromedio = totalPrecios / preciosBicicletasNoVendidas.length;
  console.log("Precio promedio de bicicletas no vendidas:", precioPromedio);