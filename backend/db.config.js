const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'it3206-taskmanager'
});

dbConnection.connect(function(err) {
    console.log("Database Connected!");
});

module.exports = dbConnection;