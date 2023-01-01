const { options } = require('./options/mariaDB');
const knex = require('knex')(options);

const cars = [
  { name: 'Audi', price: 10000 },
  { name: 'Nissan', price: 80000 },
  { name: 'Honda', price: 50000 },
  { name: 'Volvo', price: 90000 },
  { name: 'Hummer', price: 50000 },
  { name: 'Ford', price: 30000 },
];

knex('cars')
  .insert(cars)
  .then(() => console.log('values inserted'))
  .catch(() => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
