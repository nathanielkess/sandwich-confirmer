const express = require('express');
const fs = require('fs');
const app = express();
const shared = require('./shared');
const imperative = require('./imperative-calculator');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ingredients', (req, res) => {
   shared.getIngredientsJson()
    .then((result) => res.send(result));
});

app.get('/ingredients/details', (req, res) => {
    shared.getIngredientDetailsJson()
     .then((result) => res.send(result));
});

app.get('/rankings', (req, res) => {
    shared.getCharacteristicRankingsJson()
     .then((result) => res.send(result));
});

app.get('/calculations', (req, res) => {
    const someItems = [{
        id: 1,
    }, {
        id: 32
    }];
    imperative.calculateRanking(someItems);
    res.send('yep');
});


app.listen(4200, () => console.log('Example app listening on port 4200!'));

