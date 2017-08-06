//Dependecies
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8000,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

//function to connect to mysql database
connection.connect(function(error) {
    console.log(error);
});

//display products to user
function showProducts (error, response) {
    var query = connection.query (
        'SELECT * FROM products', function (error, response)    
            if (error) throw error;
            inquirer.prompt ([
                {
                    name: greeting,
                    message: 'Hello! Welcome to Bamazon, shopping made easy and Bamtastic!'
                },
                {
                    name: 'availableProducts',
                    type: 'list',
                    message: 'Which product would you like to purchase?'
                },
            ])
});