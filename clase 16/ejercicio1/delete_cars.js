const { options } = require('./options/mariaDB');
const knex = require('knex')(options);

knex
  .from('cars')
  .del()
  .then(() => console.log('all cars deleted'))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
