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

app.listen(app.set('puerto', process.env.PORT||3000), ()=> console.log('corriendo en 3000'))