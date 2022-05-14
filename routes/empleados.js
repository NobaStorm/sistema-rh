const express = require('express');
const empleados = express.Router();
const db = require('../config/database')




empleados.post("/", async (req, res, next) => {
    const { EMP_NAME, EMP_LASTNAME, EMP_PHONE, EMP_EMAIL, EMP_ADDRESS } = req.body;

    if (EMP_NAME && EMP_LASTNAME && EMP_PHONE && EMP_EMAIL && EMP_ADDRESS) {
        let query = "INSERT INTO empleados (EMP_NAME, EMP_LASTNAME, EMP_PHONE, EMP_EMAIL, EMP_ADDRESS)";
        query += ` VALUES('${EMP_NAME}', '${EMP_LASTNAME}', '${EMP_PHONE}', '${EMP_EMAIL}', '${EMP_ADDRESS}')`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Empleado insertado Correctamente"});
        }

        return res.status(500).json({code: 500, message: "Ocurrio un Error al Agregar al Empleado"});
    }

    return res.status(500).json({ code: 500, message: "Campos Incompletos" });
})

empleados.delete("/:id([0-9]{1,6})", async (req, res, next) => {
    const query = `DELETE FROM empleados WHERE emp_id = ${req.params.id}`;
    const rows = await db.query(query);
    if(rows.affectedRows == 1){
        return res.status(200).json({ code: 200, message:"Empleado eliminado Correctamente"});

    }
    return res.status(404).json({code: 404, message: "El empleado que quiere eliminar, no existe"});
})

empleados.put("/:id([0-9]{1,6})", async (req, res, next) =>{
    const { EMP_NAME, EMP_LASTNAME, EMP_PHONE, EMP_EMAIL, EMP_ADDRESS } = req.body;

    if (EMP_NAME && EMP_LASTNAME && EMP_PHONE && EMP_EMAIL && EMP_ADDRESS) {
        let query = `UPDATE empleados SET EMP_NAME='${EMP_NAME}'`
        query += `,EMP_LASTNAME='${EMP_LASTNAME}',EMP_PHONE='${EMP_PHONE}'`
        query += `,EMP_EMAIL='${EMP_EMAIL}',EMP_ADDRESS='${EMP_ADDRESS}' WHERE EMP_ID = ${req.params.id}`
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Información actualizada Correctamente"});
        }

        return res.status(500).json({code: 500, message: "Ocurrio un Error al actualzar al Empleado"});
    }

    return res.status(500).json({ code: 500, message: "Campos Incompletos" });
})

empleados.get("/", async (req, res, next) => {
    const emp = await db.query("SELECT * FROM empleados");
    return res.status(200).json({ code: 200, message: emp })
});


empleados.get('/:id([0-9]{1,6})', async (req, res, next) => {
    const id = req.params.id;
    const emp = await db.query("SELECT * FROM empleados WHERE emp_id = '"+id+"'")

    return res.status(200).json({ code: 200, message: emp});
    
});

empleados.get("/:name([A-Za-z]+)", async (req, res, next) => {
    // al poner los ":" name se convierte en una variable
    const name = req.params.name;
    const employee = await db.query("SELECT * FROM empleados WHERE emp_name = '" + name + "'")

    if (employee.length > 0) {

        return res.status(200).json({ code: 200, message: employee })
    }

    return res.status(404).send("Empleado no encontrado");

});

module.exports = empleados;