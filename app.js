const express = require("express")
const app = express()
const path = require("path")
app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/registrarse", function(req, res){
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.set('puerto', process.env.PORT || 3001);

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));




let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
       let carritoController = {
          
         checkout: function (req,res){ items = productos,
             res.render(checkout,{items:items});
         }
     }
