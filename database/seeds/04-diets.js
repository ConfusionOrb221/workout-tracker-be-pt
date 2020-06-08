// tbl.date('meal_date').notNullable();
// tbl.time('meal_time', { precision: 4 }).notNullable();
// tbl.string('meal_category').notNullable();
// tbl.string('food_name').notNullable();
// tbl.string('food_measure').notNullable();
// tbl.decimal('food_quantity', null).notNullable();
// tbl.decimal('food_calories', null).notNullable();
// tbl.decimal('food_fat', null).notNullable();
// tbl.decimal('food_protein', null).notNullable();
// tbl.decimal('food_carbs', null).notNullable();
// tbl.decimal('food_fiber', null).notNullable();
// tbl.text('meal_notes');

exports.seed = function (knex) {
  return knex('diets')
    .del()
    .then(() => {
      return knex('diets').insert([
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '2:15 pm',
          meal_category: 'Lunch',
          food_name: 'Ribeye Steak, grilled',
          food_quantity: 6,
          food_measure: 'ounces',
          food_calories: 370,
          food_fat: 33,
          food_protein: 18,
          food_carbs: 0,
          food_fiber: 0          
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '2:15 pm',
          meal_category: 'Lunch',
          food_name: 'Baby Carrots, raw',
          food_quantity: 12,
          food_calories: 25,
          food_fat: 0,
          food_protein: 0.5,
          food_carbs: 6,
          food_fiber: 1.5 
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '2:15 pm',
          meal_category: 'Lunch',
          food_name: 'Broccoli florets, raw',
          food_quantity: 6,
          food_measure: 'ounces',
          food_calories: 31,
          food_fat: 0,
          food_protein: 3,
          food_carbs: 6,
          food_fiber: 2
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '8:15 am',
          meal_category: 'Breakfast',
          food_name: 'Plain Yogurt',
          food_quantity: 1,
          food_measure: 'cup',
          food_calories: 149,
          food_fat: 8,
          food_protein: 9,
          food_carbs: 11,
          food_fiber: 0
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '8:15 am',
          meal_category: 'Breakfast',
          food_name: 'Granola',
          food_quantity: 0.5,
          food_measure: 'cups',
          food_calories: 195,
          food_fat: 3,
          food_protein: 4,
          food_carbs: 41,
          food_fiber: 4
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '6:30 pm',
          meal_category: 'Dinner',
          food_name: 'Lettuce, mix salad',
          food_quantity: 3,
          food_measure: 'cups',
          food_calories: 27,
          food_fat: 0,
          food_protein: 2,
          food_carbs: 5,
          food_fiber: 2
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '6:30 pm',
          meal_category: 'Dinner',
          food_name: 'Baby Carrots',
          food_quantity: 12,
          food_calories: 25,
          food_fat: 0,
          food_protein: 1,
          food_carbs: 6,
          food_fiber: 2
        },
        {
          user_id: 1,
          meal_date: '2020-06-08',
          meal_time: '6:30 pm',
          meal_category: 'Dinner',
          food_name: 'Ranch Dressing',
          food_quantity: 2,
          food_measure: 'tbsp',
          food_calories: 129,
          food_fat: 13,
          food_protein: 0,
          food_carbs: 2,
          food_fiber: 0,
          meal_notes: "Trying out a new ranch salad dressing"
        },
      ]);
    });
};
