const express = require("express")
const mongoose = require("mongoose")
const nodemon = require("nodemon")
require('dotenv').config();


const app = express()
app.use(express.json())

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => console.log("Conectado ao Banco!"))
  .catch((erro) => console.log("Erro"));


const usuarioRotas = require("./rotas/usuarioRotas");
app.use("/usuarios", usuarioRotas);
  




app.get("/", (req, res) =>{

})

app.post("/", (req, res) =>{
    
})


app.put("/", (req, res) =>{
    
})


app.delete("/", (req, res) =>{
    
})






app.listen(3000, (req, res) =>{
    console.log("Servidor rodando!")

})