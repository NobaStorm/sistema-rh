const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'sistemarhdb.mysql.database.azure.com',
    user: 'kemonito@sistemarhdb',
    password: 'Admin-rh',
    database: 'sistemarh'
});

pool.query = util.promisify(pool.query);
module.exports = pool;