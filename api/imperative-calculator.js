const shared = require('./shared');


const getIngredients = () => {
    return shared.getIngredients();
}

const getIngredientDetails = () => {
    return shared.getIngredientDetails();
}

const getCharacteristicRankings = () => {
    return shared.getCharacteristicRankings();
}

const calculateRanking = (id) => {
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
    .then(([ing, ingDetails, rankings]) => {
        let ingredientsWithDetails = [];
        let ingredients = JSON.parse(ing);
        let ingredientDetails = JSON.parse(ingDetails);

        for(let i=0; i<ingredients.length; i++) {
            for(let j=0; j<ingredientDetails.length; j++) {
                if (ingredients[i].id === ingredientDetails[j].id){
                    ingredientsWithDetails.push(
                        Object.assign({}, ingredients[i], ingredientDetails[i])); // figure out why spread isnt supported
                }
            }
        }
        console.log('ingredientsWithDetails', ingredientsWithDetails);
        return ingredientsWithDetails;
    });



    
};

module.exports = {
    calculateRanking
    // getIngredients,
    // getIngredientDetails,
    // getCharacteristicRankings
}