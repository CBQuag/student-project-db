require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DEVELOPMENT_DATABASE_USER,
    "password": process.env.DEVELOPMENT_DATABASE_PASSWORD, //probably null
    "database": process.env.DEVELOPMENT_DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "development": {
    "username": "conradquagliaroli",
    "password": null,
    "database": "agriculture_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "conradquagliaroli",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "conradquagliaroli",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
