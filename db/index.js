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

const add = (cb, animals) => {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server")
        const db = client.db(dbName)
        addAnimals(db, (results) =>{
            cb(results)
            client.close();
        }, animals)
    });
}



const findAnimals = function (db, callback, options) {
    const collection = db.collection('animals');
    collection.find(options).toArray(function(err,docs) {
        assert.equal(err, null);
        callback(docs)
    })
}

const addAnimals = function(db, callback, animals) {
    const collection = db.collection('animals');
    collection.insertMany(animals, function(err, result) {
        assert.equal(err, null);
        callback(result)
    })
}

module.exports.query = query;
module.exports.add = add;