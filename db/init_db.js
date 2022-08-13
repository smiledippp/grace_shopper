const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

async function buildTables() {
  try {
    client.connect();
    console.log('dropping tables');

    // drop tables in correct order
    await client.query(`
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS reviews;
    `)
    // build tables in correct order
    console.log('building tables');
    //USERS 
    await client.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(225) UNIQUE NOT NULL,
        username VARCHAR(225) UNIQUE NOT NULL,
        isAdmin BOOLEAN DEFAULT false,
        password VARCHAR(225) UNIQUE NOT NULL
      );
  `);
  //PRODUCTS
    await client.query(`
      CREATE TABLE products(
        id SERIAL PRIMARY KEY,
        titile VARCHAR(225) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price INTERGER,
        inventory INTERGER
      )`)
  // ORDERS
    await client.query(`
      CREATE TABLE orders(
        id SERIAL PRIMARY KEY,
        name VARCHAR(225) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        date DATE DEFAULT CURRENT_DATE
      );
  `);
    
  console.log('finished tables!')
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
