var names = ['Roger', 'Timothy', 'Katheline', 'Ruby', 'Jade', 'Jackson', 'Phillip', 'Gus', 'Sara', 'Taylor'];
var types = ['Cat', 'Dog', 'Eagle', 'Condor', 'Baboon', 'Penguin', 'Cheetah', 'Pigeon', 'Dolphin'];
var noises = ['Woof!', 'Meow!', 'Scraw!', 'More Bacon Please!', 'My logic is undeniable', 'eEeeEEeeeEeee', 'bloop bloop bloop'];

var pickRandom = (arr) => {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index]
}

var createAnimals = (numberOfAnimals) => {
    var animals = [];
    for (var count = 0; count < numberOfAnimals; count++) {
        animals.push({
            name: pickRandom(names),
            type: pickRandom(types),
            noise: pickRandom(noises),
        })
    }
    return animals
}

module.exports.createAnimals = createAnimals;