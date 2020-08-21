
const assert = require('assert');
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

module.exports.findAnimals = findAnimals
module.exports.addAnimals = addAnimals;