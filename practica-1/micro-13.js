let depositos = [100,200,300,400,500,-50,-100,-150,-80,-309]

function cuentaBanco(deposito){
   let saldoTotalDeposito = deposito[0] + deposito[1] + deposito[2] + deposito[3] + deposito[4]
   console.log(`El saldo total de depósitos es de: ${saldoTotalDeposito}`)
   let saldoActualRetiro =  deposito[5] + deposito[6] + deposito[7] + deposito[8] + deposito[9]
   console.log(`El saldo actual de retiro es de: ${saldoActualRetiro}`)
   let saldoCliente = (saldoTotalDeposito) - (-saldoActualRetiro)
   console.log(`Su saldo actual es de: ${saldoCliente}`)

}
cuentaBanco(depositos)
