const { options } = require('./options/mariaDB');
const knex = require('knex')(options);

knex
  .from('cars')
  .where('price', '90000')
  .update({ price: 95000 })
  .then(() => console.log('car updated'))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
