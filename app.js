//Dependecies
var inquirer = require("inquirer");
var mysql = require("mysql");
//connect to msql database for bamazon
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});
//function to connect to mysql database
connection.connect(function(error) {
    console.log(error);
    showProducts();
});
//display products to user
function showProducts(error, result) {
    connection.query('SELECT * FROM products', function(error, result) {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'greeting',
                type: 'text',
                message: "Welcome to Bamazon! Shopping made easy and Bamtastic! Preess enter to get started!"
            },
            {
                name: 'productList',
                type: 'list',
                choices: function() {
                    var optionArray = [];
                    for (var i = 0; i < result.length; i++) {
                    optionArray.push("Product ID: " + result[i].id + " | " + result[i].product_name);
                    }
                    return optionArray;
            },
                message: "What item would you like to purchase today?"
            },
            {
                name: 'ID',
                type: 'input',
                message: "Please enter the ID of the product you would like to add to your collection."
            },
            {
                name: 'quantity',
                type: 'input',
                message: "Please enter the amount you would like."
            }
         ]);
    });
}

            // check inventory
            //update inventory
            //cart function for total purchase
            //update inventory 


//                   ]).then(function(cart) {
//                 var item= cart.id;
//                 var quantity = cart.stockqty;             
//             } 
//         )
//     }
// });
