//Dependencies
const morgan = require('morgan');
const express = require("express");
const app = express();
//Routers
const empleados = require('./routes/empleados');
const admin = require('./routes/admin');
//Middleware
const auth = require('./middleware/auth')
const notFound = require("./middleware/notFound");
const index = require('./middleware/index');
const cors = require('./middleware/cors');


app.use(cors);
app.use(morgan('dev'));
app.use(express.json()); //Para codificar como json
app.use(express.urlencoded({ extended: true })); //Sacar info de la URL



//respuesta a la solicitud
app.get("/", index);

app.use("/admin", admin)
app.use(auth);
app.use("/empleados", empleados);
app.use(notFound);

app.listen(process.env.PORT || 3000, () =>{//escuchar las solicitudes
    console.log("Server is runing... ");
});