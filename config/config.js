<<<<<<< HEAD:config/config.js

=======
>>>>>>> 7ebf85a81fed81872a7b8f335be86582e8f35135:config/config.js
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.mysqlPassword,
    "database": "exampledb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
