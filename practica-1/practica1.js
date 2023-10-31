// Trabajando con los Bucles
// Ciclo for
for(let i=0; i <=10; i++){
let suma2 = 2
    console.log(`${suma2} + ${i} = ${suma2+i}`)
}

let valores = [20,10,4,50,100,600];
let cantidad = 0;

for(let i=0; i < valores.length; i++){
    cantidad = valores[i] + cantidad;
}
console.log(`La sumatoria de los valoes es: ${cantidad}`)

// Conteo del ciclo for

for(let i=10; i>=0; i--){
    console.log(i)
    if(i === 5){
        break;
    }
}

// while

console.log("Trabajando con el ciclo mientras")
let contador = 1
while(contador <= 10){
    console.log(contador)
    contador++
}


// do while

console.log("Trabajando con el ciclo While")
let contador1 = 10
do{
    console.log(contador1)
 
}while(contador1 <= 10)