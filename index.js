const morgan = require('morgan');
const express = require("express");
const app = express();

const empleados = require('./routes/empleados');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//respuesta a la solicitud
app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al Sistema de Administración")
});


app.use("/empleados", empleados);


app.listen(process.env.PORT || 3000, () =>{//escuchar las solicitudes
    console.log("Server is runing... ");
});