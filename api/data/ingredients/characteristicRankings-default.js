// 'container', 
// filling: 'protein', 'barrier', 'inclusions'
const characteristicRankings = [
    {
        characteristic: 'lowCrustCoverage',
        ingredientType: 'container', 
        ranking: 5
    },
    {
        characteristic: 'lengthVsWidthEquality',
        ingredientType: 'container', 
        ranking: 5
    },
    {
        characteristic: 'slicedToCompletion',
        ingredientType: 'container', 
        ranking: 10
    },
    {
        characteristic: 'squareToCircle',
        ingredientType: 'container', 
        ranking: 2
    },
    {
        characteristic: 'savoury',
        ingredientType: 'container', 
        ranking: 10
    },
    {
        characteristic: 'served cold',
        ingredientType: 'filling', 
        ranking: 8
    },
    { 
        characteristic: 'savoury',
        ingredientType: 'filling', 
        ranking: 7
    },
    {
        characteristic: 'consistency',
        ingredientType: 'filling', 
        ranking: 3
    }
];

module.exports = characteristicRankings;