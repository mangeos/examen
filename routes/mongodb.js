let express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    // Connect URL
    const url = 'mongodb://127.0.0.1:27017/';
    // Connec to MongoDB
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.log(err);
            // res.send(err);
        } else {
            // Specify database you want to access
            let dbo = client.db('books');

            dbo
            .collection("books")
            .find()
            .limit(2)
            .toArray(function(error, result) {
                if (error) {
                    res.send("error:400")
                } else {
                    res.send(result);
                }
            });
        }
        });
})

router.get('/post', async (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    // Connect URL
    const url = 'mongodb://127.0.0.1:27017/';
    // Connec to MongoDB
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.log(err);
        }
        // Specify database you want to access
        let dbo = client.db('books');
        try {
            dbo
            .collection("books")
            .insertMany( [{ author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"},
            { author: "null", bookformat:"null", desc: "null", genre:"null", img:"null", isbn:"null", isbn13:"null", link:"null", pages:"null", rating:"null", reviews:"null", title:"null", totalratings:"null"}]);
            res.send("done");
        } catch (e) {
            console.log(e);
        }
    });

})

router.get('/delete', async (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("books");
        var myquery = { author: "null" };
        dbo.collection("books").deleteMany(myquery, function(err, obj) {
            if (err) throw err;
            console.log(obj);
            res.send(obj.deletedCount + " document(s) deleted")
            db.close();
        });
    });

})


module.exports = router;
