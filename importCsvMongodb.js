const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");
// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb://localhost:27017/";
csvtojson()
  .fromFile("./csv/books/GoodReads_100k_books.csv")
  .then(csvData => {
    // console.log(csvData);
    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;
        client
          .db("books")
          .collection("books")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;
            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });
