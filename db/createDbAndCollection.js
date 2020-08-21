require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_URL

const dbName = process.env.DB_NAME
MongoClient.connect(url, function(err, client) {
        if(err) throw err;
        const db = client.db(dbName);
        db.createCollection(dbName, function(err, res) {
            if (err) throw err;
            console.log("Collection created!")
            client.close()
        })
    }); 