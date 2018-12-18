# Bamazon Storefront

## Created by Christie Byrne

## Purpose of the game

This is a command line app that allows you to purchase one of the 
items in this store by typing in the item ID and the desired quantity based on a give list of inventory. If the selected quantity is in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is unavailable, the user is asked to modify their order. The prompt to purchase another item is then displayed.


## Getting Started


<a src= "https://byrnec.github.io/Bamazon/" target = " "> Download the materials  to run Bamazon here!</a>

* Download the files in this repository
* In order to run this application, you should have the MySQL database already downloaded (visit the MySQL installation page) and set up on your computer 
    * Create the Bamazon database and the products table with the SQL code found in Bamazon.sql
* To run the customer interface enter the code below into the terminal:

    * `git clone git@github.com:byrnec/Bamazon.git`
    * `cd bamazon`
    * `npm install`
    * run `node bamazonCustomer.js`
    * follow the prompts, as seen below

![](bamazon.gif)


## Built With:

* mySQL

* Node-packages: 
    * CLI-table (allows you to render unicode-aided tables on the command line from your node.js scripts)
    * Inquirer
    * Color

* JavaScript

* JSON

