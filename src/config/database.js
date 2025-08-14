const { MongoClient } = require('mongodb');
let database;

async function connectDB() {
  try {
    if (database) return database; 

    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    database = client.db(process.env.MONGO_DB_NAME);
    return database;

  } catch (err) {
    console.error(err);
  }
}

function getDB() {
  if (!database) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return database;
}

module.exports = { connectDB, getDB };