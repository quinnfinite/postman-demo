require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const {findAnimals, addAnimals} = require('./queries.js')

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

module.exports.query = query;
module.exports.add = add;