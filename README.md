# Bamazon Storefront

## Created by Christie Byrne

<img src="assets/images/readmephoto.png" width="680px" height= "500px" title="screenshot">

## Purpose of the game

This is a command line app

## Getting Started
 
* Download these files
* In order to run this application, you should have the MySQL database already set up on your machine. 
    * visit the MySQL installation page to install the version you need for your operating system. 
* Create the Bamazon database and the products table with the SQL code found in Bamazon.sql

### Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

git clone git@github.com:byrnec/Bamazon.git
cd bamazon
npm install
node bamazonCustomer.js


### Manager Interface
The manager interface presents a list of four options, as below.

? Please select an option: (Use arrow keys)
❯ View Products for Sale 
  View Low Inventory 
  Add to Inventory 
  Add New Product

The View Products for Sale option allows the user to view the current inventory of store items: 
    * item IDs 
    * descriptions
    * department in which the item is located
    * price
    * quantity available in stock

The View Low Inventory option shows the user the items which currently have fewer than 100 units available.

The Add to Inventory option allows the user to select a given item ID and add additional inventory to the target item.

The Add New Product option allows the user to enter details about a new product which will be entered into the database upon completion of the form.

To run the manager interface please follow the steps below:

git clone git@github.com:byrnec/Bamazon.git
cd bamazon
npm install
node bamazonManager.js

<!-- Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).
Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 
Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading. -->




<img src="assets/images/code.png" width="680px" height= "500px" title="screenshot">

<a src= "https://byrnec.github.io/Bamazon/" target = " "> Try it out here!</a>

## Built With:

mySQL

Node-packages: 
    * CLI-table (allows you to render unicode-aided tables on the command line from your node.js scripts)
    * Inquirer

JavaScript

JSON

