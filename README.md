<img alt="Burger Logger Logo" src="./public/assets/images/logo_sm.png"><br>
# Burger Logger

This project was the homework for week 14 of the Penn Coding Boot Camp.

## Goal
To create a full-stack application using NodeJS, ExpressJS, Handlebars and Heroku.

## Installation and Set-up
Please run *npm install* at the root directory after cloning the project.
Create a `keys.js` file and place it into the `config` folder. The file should contain the following information:
```
module.exports = {
  host: "NAME_OF_HOST",
  user: "USERNAME",
  password: "PASSWORD",
  port: PORT_NUMBER,
  database: "burger_db"
}
```
Then in the command line, run either `node server.js` or `npm start`, and direct your browser to `localhost:3000`.
You can also use the deployed version of this app at: https://gbarila-blogger.herokuapp.com/.

## Functionality
This is a single page application that allows the user to create sandwiches and add them to the menu. There is a **Devour!** button right next to each sandwich that will move it to a second column named *Enjoyed Burgers*.

## Objective
* To create a server using ExpressJS that will route html traffic by processing GET requests, update information in the database with PUT requests, and store and process data with POST requests.
* To create a full-stack application using html, CSS, Bootstrap, JavaScript/jQuery and NodeJS.

## Built using:
* Handlebars
* CSS
* Bootstrap
* vex
* git
* GitHub
* Heroku
* JavaScript
* jQuery
* NodeJS
* ExpressJS

## Authors
**Guillermo Barila** - *Author*