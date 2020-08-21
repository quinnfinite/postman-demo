
const assert = require('assert');
const findAnimals = function (db, callback, options) {
    const collection = db.collection(process.env.DB_NAME);
    collection.find(options).toArray(function(err,docs) {
        assert.equal(err, null);
        callback(docs)
    })
}

const addAnimals = function(db, callback, animals) {
    const collection = db.collection(process.env.DB_NAME);
    collection.insertMany(animals, function(err, result) {
        //assert.equal(err, null);
        if (err) {
            callback('ERROR, could not add animal(s). Make sure you are sending an Array objects')
        } else {
            callback(result)
        }
    })
}

module.exports.findAnimals = findAnimals
module.exports.addAnimals = addAnimals;