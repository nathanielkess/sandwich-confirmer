const fs = require('fs');

// use observables instead?
const getIngredients = () => {
    return readSelectedFile('./data/ingredients/ingredients.json');
};

const getIngredientDetails = () => {
    return readSelectedFile('./data/ingredients/ingredientDetails.json');
};

const getCharacteristicRankings = () => {
    return readSelectedFile('./data/ingredients/characteristicRankings-default.json');
}

function readSelectedFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, result) => {
            resolve(result);
        })
    });
};

module.exports = {
    getIngredients,
    getIngredientDetails,
    getCharacteristicRankings
};