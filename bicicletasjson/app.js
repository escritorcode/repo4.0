const listadoBiciletas = require('./datosBici');
//console.log(biciletas);
let dhBici = {
    bicicletas : listadoBiciletas,
    buscarBici : function(id){
        //console.log('Este es el id que me pasastes: '+id);
        /*
        //Dentro de un Objeto literal , debemos utilizar los métodos .map() .filter() .reduce()
        this.bicicletas.forEach(bicicleta => {
           if(bicicleta.id === id){
             return bicicleta;
           }else{
            return null;
           } 
        });
        */ 
       //Recorrer arrays - Arrays de Objetos: for - while - do while - for of - forEach
       //Otros métodos mas: .map() - .filter() - .reduce() - includes (True - false) 
       //indexOf() - Si está te trae la posiciión - Si no está: Te trae -1
       let biciBuscar =  this.bicicletas.filter(bicicleta =>{
        return bicicleta.id === id;
       })
       //console.log(biciBuscar);
       if(biciBuscar.length >0){
        return biciBuscar;
       }else{
        return null;
       }
    },
    venderBici : function(id){
        let bicicletaBuscada = this.buscarBici(id);
        //console.log('---------------------');
        //console.log(bicicletaBuscada);
        //console.log('---------------------');
        if(bicicletaBuscada != null){
            if(bicicletaBuscada[0].vendida === true){
                return 'La bicileta ya fue vendida';
            }
            bicicletaBuscada[0].vendida = true;
            return bicicletaBuscada;
        }else{
            return 'Bicicleta no encontrada'
        }
    },
    biciParaLaVenta : function(){
        let listadoNoVendidas = this.bicicletas.filter(bicicleta =>{
            return bicicleta.vendida === false;
        })
        return listadoNoVendidas;
    },
    totalDeVentas : function() {
        return this.bicicletas.reduce((total, bici) => {
          if (bici.vendida === true) {
            return total + bici.precio;
          }
          return total;
        }, 0);
    } 
}
//console.log(dhBici.buscarBici(3));
//console.log(dhBici.venderBici(2));
//console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());