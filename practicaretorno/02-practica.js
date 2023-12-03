/**let calificaciones = [4, 6, 2, 8, 10, 7, 6, 3];
let buscarCali = calificaciones.find(cali => cali === 2)
console.log(buscarCali);
*/

  
const alumnos = [
    { nombre: 'Juan', mail: 'juan@example.com', calificacion: 8 },
    { nombre: 'María', mail: 'maria@example.com', calificacion: 9 },
    { nombre: 'Carlos', mail: 'carlos@example.com', calificacion: 7 },
    { nombre: 'Ana', mail: 'ana@example.com', calificacion: 10 },
    { nombre: 'Luis', mail: 'luis@example.com', calificacion: 6 }
];

const nombreBuscado = 'juan';
const calificacionBuscada = 8; 

const alumnoEncontrado = alumnos.find(alumno => 
    alumno.nombre.toLowerCase() === nombreBuscado.toLowerCase() 
    && alumno.calificacion === calificacionBuscada);

console.log("Buscando Alumno...");
setTimeout(() => {
    console.log("alumno encontrado...");
    if (alumnoEncontrado) {
        console.log(`Se encontró al alumno ${nombreBuscado} con la calificación ${calificacionBuscada}`);
    } else {
        console.log(`No se encontró al alumno ${nombreBuscado} con la calificación ${calificacionBuscada}`);
    }
    
}, 5000);



