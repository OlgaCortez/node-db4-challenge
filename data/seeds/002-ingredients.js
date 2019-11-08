
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredients: 'lemons, water, sugar', measurments: '5, 2 liters, 2 cups' },
        {ingredients: 'pasta, water, tomato sauce, salt, pepper', measurments: '1 box, 2 quarts, 1 20oz tin, 1/2 teaspoon, 1/2 teaspoon'},
        {ingredients: 'rice, water, salt', measurments: '2 cups, 4 cups, 1/2 tsp salt' }
      ]);
};
