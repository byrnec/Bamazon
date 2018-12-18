// Challenge #1: Customer View (Minimum Requirement)

// require packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

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
    // call main function
    console.log('_.~"~._.~"~._.~Welcome to BAMazon~._.~"~._.~"~._');
    console.log('----------------------------------------------------------------------------------------------------');
    console.log("You are now connected to the Bamazon Store database as id " + connection.threadId);
    askBuyer();
});


// in node-Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

// Receive Customers Input


// Begin Display Inventory in order to ask buyer for choice
function askBuyer() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        // Cli-Table display code 
        var table = new Table(
            {
                head: ["Product ID", "Product Name", "Department Name", "Price", "Quantity"],
                colWidths: [12, 75, 20, 12, 12],
            });

        // Loop through the entire inventory
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id, res[i].name, res[i].department, parseFloat(res[i].price).toFixed(2), res[i].quantity]
            );
        }

        console.log(table.toString());

        // The app should then prompt users with two messages.
        // The first should ask them the ID of the product they would like to buy.
        inquirer
            .prompt([

                {
                    type: "input",
                    name: "id",
                    message: "What is the ID of the product you would like to buy?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many units of the product would you like to buy?"

                },
            ])

            // Order function begins 
            .then(function (res) {

                var item = res.id;
                var quantity = res.quantity;

                connection.query("SELECT * FROM products WHERE id =" + item, function (err, selectedItem) {
                    if (err) throw err;
                    // Query db to confirm that the given item ID exists in the desired quantity
                    if (selectedItem[0].quantity - quantity >= 0) {

                        console.log("Checking Inventory.....loading... Quantity in Stock: " + selectedItem[0].quantity + " Customer Order Quantity: " + quantity);

                        console.log("GREAT NEWS! Bamazon has sufficient inventory of " + selectedItem[0].name + ".  We will fill your order now!");



                        // Calculate total sale
                        // set sale to two decimals
                        console.log("Thank you for shopping the Node Bamazon Store. Your order total will be " + (res.quantity * selectedItem[0].price).toFixed(2) + " dollars.", "\nFeel free to continue shopping!");

                        // Decrement the inventory of the purchased item, so it is reflected for the future                    
                        connection.query('UPDATE products SET quantity=? WHERE id=?', [selectedItem[0].quantity - quantity, item],

                            function (err, inventory) {
                                if (err) throw err;
                                // run customer input prompt again
                                askBuyer();


                            });

                    }
                    // can't fullfill order
                    else {
                        console.log("Bad News--INSUFFICIENT INVENTORY: \n Unfortunately, Bamazon only has " + selectedItem[0].quantity + " " + selectedItem[0].name + " in stock. \nPlease make another selection or reduce your quantity.", "\nWe appreciate your business with Bamazon!");
                        // run customer input prompt again
                        askBuyer();
                    }
                });
            });
    });
} 
