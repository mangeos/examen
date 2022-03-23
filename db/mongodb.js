const MongoClient = require('mongodb').MongoClient;
// Connect URL
const url = 'mongodb://127.0.0.1:27017';

module.exports = {
    connectToServer:

        // Connec to MongoDB
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
};
