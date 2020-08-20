require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const url = process.env.DB_URL

const dbName = process.env.DB_NAME

const query = (cb, filter) => {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server")
        const db = client.db(dbName)
        
        findAnimals(db, (results) =>{
            cb(results)
            client.close();
        }, filter)
    });
}


const findAnimals = function (db, callback, options) {
    const collection = db.collection('animals');
    collection.find(options).toArray(function(err,docs) {
        assert.equal(err, null);
        callback(docs)
    })
}

module.exports.query = query;