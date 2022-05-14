const express = require('express');
const jwt = require('jsonwebtoken');
const admin = express.Router();
const db = require('../config/database')


admin.post("/login", async (req, res, next) => {
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = req.body;
    const query = `SELECT * FROM admin WHERE admin_email = '${ADMIN_EMAIL}' AND admin_password = '${ADMIN_PASSWORD}';`;
    const rows = await db.query(query);

    if (ADMIN_EMAIL && ADMIN_PASSWORD) {
        if (rows.length == 1) {
            const token = jwt.sign({
                ADMIN_ID: rows[0].ADMIN_ID,
                ADMIN_EMAIL: rows[0].ADMIN_EMAIL
            }, "debugkey");

            return res.status(200).json({ code: 200, message: token });
        }
        else {
            return res.status(200).json({ code: 401, message: "User and/or password wrong" });

        }
    }

    return res.status(500).json({ code: 500, message: "campos incompletos" });


});

module.exports = admin;