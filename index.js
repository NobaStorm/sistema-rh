const express = require("express");
const app = express();

//respuesta a la solicitud
app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido")
});


app.listen(3000, () =>{//escuchar las solicitudes
    console.log("Server is runing... ");
});