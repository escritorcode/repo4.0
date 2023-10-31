//Aquí estoy requieriendo un módulo nativo
const fs = require('fs');
//console.log(fs);

//Aquí estoy leyendo el archivo JSON creado y lo estpy guardando en una variable
let bicicletasJSON = fs.readFileSync('./bicicletas.json','utf-8');
//console.log(bicicletasJSON);

//Convertir el archivo JSON a un Objeto literal
let bicicletasArray = JSON.parse(bicicletasJSON);
//console.log(bicicletasArray);

//Aquí estoy exportando el Objeto literal
module.exports = bicicletasArray;
