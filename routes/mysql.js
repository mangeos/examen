let express = require('express');
let router = express.Router();

let mysqlConnection = require("./../db/mysql");

router.get('/', (req, res) => {

    let connection = mysqlConnection.connectToServer;

    let sql = `
        SELECT *
        FROM books
        LIMIT 2 `;

    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.send(error);
            //return console.error(error.message);
        } else{

            res.send(results);
        }
        //console.log(results);
    });

    // connection.end();

})

router.get('/post', (req, res) => {
    let connection = mysqlConnection.connectToServer;

    let sql = `
    INSERT INTO books
    VALUES ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null"),
    ("null","null","null","null","null","null","null","null","null","null","null","null","null") `;

    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.send(error);
            //return console.error(error.message);
        }
        //console.log(results);
        res.send(results);
    });


    // connection.end();
})

router.get('/delete', (req, res) => {
    let connection = mysqlConnection.connectToServer;


    connection.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM books WHERE author = 'null'";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        // console.log("Table deleted");
        res.send(result||err);
      });
    });
})


module.exports = router;
