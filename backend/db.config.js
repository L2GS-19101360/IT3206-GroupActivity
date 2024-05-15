const mysql = require('mysql');

dbConfig = [
    {
        host: 'buog086fvhufqbklpctk-mysql.services.clever-cloud.com',
        user: 'uve4tnjyijkj2gdq',
        password: 'gAJ9dOnGrE6uUD6Cj0Ll',
        database: 'buog086fvhufqbklpctk'
    },
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'it3206-taskmanager'
    }
]

const dbConnection = mysql.createConnection(dbConfig[0]);

dbConnection.connect(function(err) {
    console.log("Database Connected!");
});

module.exports = dbConnection;