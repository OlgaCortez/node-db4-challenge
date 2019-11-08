
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name:'Lemonade' }, //1
        {recipe_name: 'Spaghetti'}, //2
        {recipe_name: 'White Rice'} //3
      ]);
  };
