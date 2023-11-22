/**Primera Practica calculando el sueldo del empleado*/

let empleado = {
    nombreEmpleado: 'Roberto',
    apellidoEmpleado: 'Rice',
    sueldoEmpleado: 30000,
    calcularNuevoSueldo: function() {
        if(this.sueldoEmpleado <= 25000){
            return this.sueldoEmpleado * 0.40;
        } else {
            return (this.sueldoEmpleado * 0.15) + this.sueldoEmpleado
        }
    }
}

console.log('Nombre del Empleado:', empleado.nombreEmpleado);
console.log('Apellido del Empleado:', empleado.apellidoEmpleado);
console.log('Sueldo del Empleado:', empleado.sueldoEmpleado);
console.log('Nuevo Sueldo:', empleado.calcularNuevoSueldo());
