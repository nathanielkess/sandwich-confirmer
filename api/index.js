const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

const shared = require('./shared');
const imperative = require('./imperative-calculator');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

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

app.post('/sandwichgenerator', (req, res) => {
    const contents = req.body;
    imperative.calculateRanking(contents)
     .then((result) => {
        res.json(result);
     })
});


app.listen(4200, () => console.log('Example app listening on port 4200!'));

