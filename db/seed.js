require('dotenv').config();
const { createAnimals } = require('./dataGenerator.js');

const {add} = require('./index.js')

var animals = createAnimals(process.env.NUMBER_OF_ANIMALS);

add((data) => {
    console.log(data)
}, animals)