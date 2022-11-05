const mysql = require('mysql2');

const pool = mysql.createPool({ 
    host: process.env.DBHOST, //'pinchegrupofeo.cvfjwt85hroj.us-east-1.rds.amazonaws.com',
    user: process.env.DBUSER, //'admin',
    password: process.env.DBPASSWORD, //'Axelcor08_',
    database: process.env.DATABSE //'baseplanta'
});

const connection = pool.getConnection ((error, connection) => {
    if(error) {
        console.log(error);
        throw error;
    }
    connection.release();
});

module.exports = pool;