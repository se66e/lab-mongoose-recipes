const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const recipeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredients: Array,
  cuisine: { type: String, required: true },
  dishtype: { type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other'] },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
  duration: { type: Number, min: 0 },
  creator: String,
  created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema)

Recipe.create({
  title: 'Sancocho',
  level: 'Amateur Chef',
  ingredients: ['1 lb of Beef', '1 lb of goat', '1 lb of pork', '1 lb of chicken', '2 limes', '1 tbs of cilantro', '1/2 tbs of oregano', '2 cloves of garlic', '2 tbs of salt', '4 tbs of vegetable oil', '1 gallon of water', '1/2 lb of plantain', '1/2 lb of pumpkin', '1/2 lb of yuca', '2 ears of corn'],
  cuisine: 'Dominicano',
  dishtype: 'Dish',
  image: 'https://www.cookforyourlife.org/wp-content/uploads/2017/12/sancocho-on-a-table-1200x800.jpg',
  duration: 120,
  creator: 'Chef Julito'
})
  .then((recipe) => { console.log('The user is saved and its value is: ', recipe.title) })
  .catch((err) => { console.log('An error happened:', err) });

// const newRecipe = {
//   title: 'Sancocho',
//   level: 'Amateur Chef',
//   ingredients: ['1 lb of Beef', '1 lb of goat', '1 lb of pork', '1 lb of chicken', '2 limes', '1 tbs of cilantro', '1/2 tbs of oregano', '2 cloves of garlic', '2 tbs of salt', '4 tbs of vegetable oil', '1 gallon of water', '1/2 lb of plantain', '1/2 lb of pumpkin', '1/2 lb of yuca', '2 ears of corn'],
//   cuisine: 'Dominicano',
//   dishtype: 'Dish',
//   image: 'https://www.cookforyourlife.org/wp-content/uploads/2017/12/sancocho-on-a-table-1200x800.jpg',
//   duration: 120,
//   creator: 'Chef Julito',
// };

Recipe.insertMany(module.exports)

  .then((recipe) => { console.log('The user is saved and its value is: ', recipe.title) })
  .catch((err) => { console.log('An error happened:', err) });