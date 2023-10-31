const express = require("express")
//console.log(express);
const path = require('path')
//console.log(__dirname); ruta actual
const app = express();

app.listen(3001, function(){
  console.log("El servidor esta corriendo");
})


app.get("/",(req,res)=>{
 
  res.sendFile(path.join(__dirname, 'view/index.html'))
})



app.get('/hola',function(req,res){
   
    res.send("Hola Mundo")
})


app.get('*', function(req,res){
     res.send("Ruta no creada")
})

