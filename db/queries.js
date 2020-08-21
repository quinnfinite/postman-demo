var ObjectID = require('mongodb').ObjectID;
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
    });
}

const updateAnimal = function (db, callback, animal) {
    const collection = db.collection(process.env.DB_NAME);
    const {_id} = animal;
    delete animal._id;
    collection.updateOne({_id: ObjectID(_id)}, {$set: animal}, function(err, result) {
        if (err) {
            console.log(err)
            callback(err)
        } else {
            callback(result);
        }
    })
}

const eatAnimal = function (db, callback, id) {
    const collection = db.collection(process.env.DB_NAME);
    collection.deleteOne({_id: ObjectID(_id)}, function (err, result) {
        if (err) {
            callback(result);
        } else {
            callback(result);
        }
    })
}

module.exports.findAnimals = findAnimals
module.exports.addAnimals = addAnimals;
module.exports.updateAnimal = updateAnimal;
module.exports.updateAnimal = updateAnimal;