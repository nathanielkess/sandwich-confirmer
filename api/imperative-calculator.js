const shared = require('./shared');
const data = require('./data/ingredients/index');

const getIngredients = () => {
    return new Promise((resolve, reject) => { resolve(data.ingredients)});
}

const getIngredientDetails = () => {
    return new Promise((resolve, reject) => { resolve(data.ingredientDetails)});
}

const getCharacteristicRankings = () => {
    return new Promise((resolve, reject) => { resolve(data.characteristicRankings)});
}

const calculateRanking = (generatorContents) => {
    // let ingredients;
    // let ingredientDetails;
    // let rankings;
    // 
    // SO HARD TO WRITE GROSS CODE
    //
    // getIngredients()
    // .then((results) => {
    //     ingredients = results;
    //     getIngredientDetails()
    //      .then((results) => {
    //         ingredientDetails = results;
    //         getCharacteristicRankings()
    //           .then((results) => {
    //             rankings = results;
    //         })
    //      })
    // })

    Promise.all([getIngredients(), getIngredientDetails(), getCharacteristicRankings()])
    .then(([ingredients, ingredientDetails, rankings]) => {
        
        let ingredientsWithDetails = [];
        for(let i=0; i<ingredients.length; i++) {
            for(let j=0; j<ingredientDetails.length; j++) {
                console.log('ping');
                if (ingredients[i].id === ingredientDetails[j].id){
                    ingredientsWithDetails.push(
                        Object.assign({}, ingredients[i], ingredientDetails[i])); // figure out why spread isnt supported
                }
            }
        }
        console.log('ingredientsWithDetails', ingredientsWithDetails);

        console.log('generatorContents', generatorContents);

        let total=0;
        for (let i=0; i<generatorContents.length; i++) {
            for (let j=0; j<ingredientsWithDetails.length; j++) {
                if (generatorContents[i].id === ingredientsWithDetails[j].id) {
                    for (let k=0; k<rankings.length; k++) {
                        // find the ranking for each of the characteristics of this ingredient
                        // multiply them together and add total
                        if (ingredientsWithDetails[j].hasOwnProperty(rankings[k].characteristic)){
                            total+=rankings[k].ranking * ingredientsWithDetails[j][rankings[k].characteristic];
                        }
                    }
                }
            }
        }
        console.log('total', total);
        // merge ingredient info
        // take in specified ingredients list (whatever they put into the sandwhich generateor - sent with request)
        // read in the ranking averages
        // for every item past into the generator, check against the averages, and add to a running score.
        // return the score at the end

        return ingredientsWithDetails;
    });



    
};

module.exports = {
    calculateRanking
}