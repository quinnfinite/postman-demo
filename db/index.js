require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const {findAnimals, addAnimals, updateAnimal, eatAnimal } = require('./queries.js')

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

const update = (cb, animal) =>{
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        updateAnimal(db, (results) => {
            cb(results);
            client.close()
        }, animal)
    })
}

const eat = (cb, id) => {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        eatAnimal(db, (results) => {
            cb(results);
            client.close();
        }, id)
    })
}

module.exports.query = query;
module.exports.add = add;
module.exports.update = update;
module.exports.eat = eat;