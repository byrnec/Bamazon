// Challenge #1: Customer View (Minimum Requirement)

// require packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

//initiate connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    askBuyer();
    console.log("hello world")
});


// in node-Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

var itemChoices = ["hey", "test"];

function askBuyer() {
    inquirer
        .prompt(
            [{
            name: "intro",
            type: "list",
            message: "Welcome to the Amazon node store, special prices reserved only for programmers!"
        },

            // The app should then prompt users with two messages.
            // The first should ask them the ID of the product they would like to buy.

            {
                name: "id",
                type: "input",
                message: "What is the ID of the product you would like to buy?",
                choices: itemChoices
            },
            // The second message should ask how many units of the product they would like to buy.

            {
                name: "quantity",
                type: "input",
                message: "How many units of the product would you like to buy?"

            }
        ])
        .then(function (res) {
            var query = "SELECT * FROM products ?";
            connection.query(query, { id: res.id }, function (err, res) {
                // Once the customer has placed the order, your application should check 
                // if your store has enough of the product to meet the customer's request.

                if (res.quantity > 0) {

                    updateInventory();
                    // getProducts();
                }

                // // If not, the app should log a phrase like Insufficient quantity!, 
                // // and then prevent the order from going through.
                // do nothing
                else {
                    console.log("Insufficient quantity!")
                }
            });
        });
    }

//      // reads the item list out   
// function getProducts() {
//                 var query = "SELECT * FROM products ?";
//                 connection.query(query, { item: res.item }, function (err, res) {
//                     for (var i = 0; i < res.length; i++) {
//                         (itemChoices).push(res.item[i])
//                         console.log("Product: " + res[i].id
//                             + " || Department: " + res[i].department
//                             + " || Price: " + res[i].price
//                             + " || Quantity: " + res[i].quantity);
//                     }
//                 });
//             }

    
// However, if your store does have enough of the product, you should fulfill the customer's order.


// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

// function updateInventory() {
//     console.log("Updating all Rocky Road quantities...\n");
//     var query = connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//             {
//                 quantity: 100
//             },
//             {
//                 id: res.id
//             }
//         ],
//         function (err, res) {
//             console.log(res.affectedRows + " products updated!\n");
//             // Call deleteProduct AFTER the UPDATE completes
//             deleteProduct();
//         }
//     );

//     // logs the actual query being run
//     console.log(query.sql);
// }
