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

// merge ingredient info
// take in specified ingredients list (whatever they put into the sandwhich generateor - sent with request)
// read in the ranking averages
// for every item passed into the generator, check against the averages, and add to a running score.
// return the score at the end
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

    return new Promise((resolve, reject) => {

        Promise.all([getIngredients(), getIngredientDetails(), getCharacteristicRankings()])
        .then(([ingredients, ingredientDetails, rankings]) => {
            
            // merge ingredients with their associated details, just because.
            let ingredientsWithDetails = [];
            for(let i=0; i<ingredients.length; i++) {
                for(let j=0; j<ingredientDetails.length; j++) {
                    if (ingredients[i].id === ingredientDetails[j].id){
                        ingredientsWithDetails.push(
                            Object.assign({}, ingredients[i], ingredientDetails[i])); // figure out why spread isnt supported
                    }
                }
            }

            // now for each item fed to the generator, find it in the ingredientsWithDetails list.
            // once you have the ingredient details, mulitply each category value by the ranking value and add to the total
            let total=0;
            for (let i=0; i<generatorContents.length; i++) {
                for (let j=0; j<ingredientsWithDetails.length; j++) {
                    if (generatorContents[i] === ingredientsWithDetails[j].id) {
                        console.log(ingredientsWithDetails[j].name);
                        for (let k=0; k<rankings.length; k++) {
                            if (ingredientsWithDetails[j].hasOwnProperty(rankings[k].characteristic)){
                                total+=rankings[k].ranking * ingredientsWithDetails[j][rankings[k].characteristic];
                            }
                        }
                    }
                }
            }

            // I think we should check the ingredient type and include some logic into our calculation. 
            // For example, what if they don't include any containers?

            console.log('total', total);
            const isSandwich = total > 800 ? true : false;
            console.log(isSandwich? '~~A SANDWICH~~' : '~~NOT A SANDWICH~~');
            resolve(isSandwich);
        });
    })

};

module.exports = {
    calculateRanking
}