# bank-api

## PRE requisites
  * MYSQL
  * Node.js
  * express.js
  * rest

## Steps to setup this project and run.
  1. Clone this repo.
  2. Run command ``npm init``.
  3. Configure Database using MySql workBench.To configure create databse using create command (``create databse {databsename}``) the import bank and branch details from the bank-details.
  4. Edit the db.js file as per your MySql setting change user and password and database if it's different.
  5. Run command ``node index.js``.
  6. Open postman or curl to test the apis.

##API calls:
1. To get all the bank names and ids:
   GET http://localhost:3000/banks
   
2. To get all the branches
   GET http://localhost:3000/branches

3. To get all the branch name for a perticular citie
   GET http://localhost:3000/branches?bank_name=BankName&city=CityName
   
4. To get all the branch details using ifsc code 
   GET http://localhost:3000/branches?ifsc=IfscCode

