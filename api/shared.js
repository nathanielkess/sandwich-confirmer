const fs = require('fs');

// use observables instead?
const getIngredientsJson = () => {
    return readSelectedFile('./data/ingredients/ingredients.json');
};

const getIngredientDetailsJson = () => {
    return readSelectedFile('./data/ingredients/ingredientDetails.json');
};

const getCharacteristicRankingsJson = () => {
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
    getIngredientsJson,
    getIngredientDetailsJson,
    getCharacteristicRankingsJson
};