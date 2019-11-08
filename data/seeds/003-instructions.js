
exports.seed = function(knex) {
      return knex('instructions').insert([
        {instructions: 'Half lemons and squeeze lemon juice into your pitcher. Mix sugar and lemon juice well and add water. Mix one last time chill and serve in glass over ice.'},
        {instructions: 'Boil water, add spagehtti and cook per box instructions. Once cooked place cooked spagetti back in pot pour sauce, salt and pepper heat through for 2 mins and enjoy.'},
        {instructions: 'Rinse your rice for until water is semi clear. Place rinsed rise and water in a pot with salt and boil for 25 mins or until water is absorbed.'}
      ]);
};
