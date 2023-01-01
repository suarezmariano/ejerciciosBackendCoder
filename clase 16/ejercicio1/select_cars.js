const { options } = require('./options/mariaDB');
const knex = require('knex')(options);

knex
  .from('cars')
  .select('*')
  .then((data) => {
    for (registro of data) {
      console.log(`${registro['id']} ${registro['name']} ${registro['price']}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
