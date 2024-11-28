const express = require("express");
const app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`o express ta rodando na porta ${PORT}`);
});

//DB Connection
db 
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco de dados com sucesso");
    })
    .catch(err => {
        console.log("Não conectado, ocorreu um erro ao tentar conectar", err)
    });



//Router
app.get("/", (req, res) => {
    res.send("Esta funcionando")
})



