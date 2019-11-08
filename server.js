const express = require('express');
const helmet = require('helmet');
const Recipe = require('./data/db-helper');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
    Recipe.getRecipes().then(recipes => {
        res.json(recipes);
    }).catch(err => {
        res.status(500).json({err: 'failed to get recipes'});
    })
});

server.get('/api/recipes/:id', (req, res) => {
    const {id} = req.params;

    Recipe.getShoppingList().then(recipe => {
        if (recipe) {
        res.json(recipe);
        } else {
            res.status(404).json({err: "invalid recipe id"})
        }
    })
    .catch(err => {
        res.status(500).json({err: 'failed to get recipes'});
    })
});

module.exports = server;