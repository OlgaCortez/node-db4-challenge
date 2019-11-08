const db = require('./db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db.select('ingredients', 'measurments')
    .from('ingredients')
    .join('ingredients', 'recipe_name.ingredient_id', 'ingredients.id')
    .where('recipe_id', id)
}

function getInstructions(id) {
    return db.select('instructions')
    .from('instructions')
    .join('ingredients', 'ingredients.ingredient_id', 'ingredients.id')
    .where('recipe', id)
}
