var mysql = require('mysql');

module.exports = {
    connectToServer:
        //let config = require('./config.js');
         mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'pass',
            database: 'examen',
        })

    };
