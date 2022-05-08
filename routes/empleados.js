const express = require('express');
const empleados = express.Router();
const db = require('../config/database')




empleados.post("/", (req, res, next) => {
    return res.status(200).send("Estas en empleados Post");
})

empleados.get("/", async (req, res, next) => {
    const emp = await db.query("SELECT * FROM empleados");
    return res.status(200).json({code: 200, message: emp})
});

empleados.get("/:name([A-Za-z]+)", async (req, res, next) => {
    // al poner los ":" name se convierte en una variable
    const name = req.params.name;
    const  employee = await db.query("SELECT * FROM empleados WHERE emp_name = '"+name+"'")

    if(employee.length > 0) {

        return res.status(200).json({code: 200, message: employee})
    }

    return res.status(404).send("Empleado no encontrado");

});

module.exports = empleados;