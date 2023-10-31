let rAmburguesa = (tipoAmbur,jamon,queso,salsaT,mayonesa,mostaza,tomate,lechuga,cebolla) =>{
    
    if(tipoAmbur == "Carne"){
       return 1800 + (jamon == true ? 30 : 0) + (queso == true ? 25 : 0) + (salsaT == true ? 5:0) + (mayonesa == true ? 5 : 0) + (mostaza == true ? 5 : 0) + (tomate == true ? 15 :0 ) + (lechuga == true ? 10 : 0) + (cebolla == true ? 10 : 0)
    }else if(tipoAmbur =="Pollo"){
        return 1500  + (jamon == true ? 30 : 0) + (queso == true ? 25 : 0) + (salsaT == true ? 5:0) + (mayonesa == true ? 5 : 0) + (mostaza == true ? 5 : 0) + (tomate == true ? 15 :0 ) + (lechuga == true ? 10 : 0) + (cebolla == true ? 10 : 0)
    }else if(tipoAmbur == "Vegetariana"){
        return 1200 +  (jamon == true ? 30 : 0) + (queso == true ? 25 : 0) + (salsaT == true ? 5:0) + (mayonesa == true ? 5 : 0) + (mostaza == true ? 5 : 0) + (tomate == true ? 15 :0 ) + (lechuga == true ? 10 : 0) + (cebolla == true ? 10 : 0)
    }
}


console.log(rAmburguesa("Carne", true, true,true, true,true,true,true,true))