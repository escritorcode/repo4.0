let pagoMes = 100;
let consumoKWH = 340;
let aumentoConsumo =  (pagoMes * 20) / 100
let pagoMesTotal


consumoKWH > 300  ? pagoMesTotal = pagoMes + aumentoConsumo : pagoMesTotal = pagoMes

console.log(`“Debido a que su hogar tuvo un consumo ${consumoKWH} en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),  
cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoMesTotal}`) 
    
