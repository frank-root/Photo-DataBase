require('dotenv').config();

const dbconfig = {
   host: process.env.MYSQLHOST || process.env.DB_HOST,
    user: process.env.MYSQLUSER || process.env.DB_USER,
    password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
    port: parseInt(process.env.MYSQLPORT || process.env.DB_PORT,
10),
    database: process.env.MYSQLDATABASE || process.env.DB_NAME,
    timezone: '-7:00',
}

module.exports = dbconfig;