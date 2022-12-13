# Tech Blo

## Table of Contents
  1) [Description](#description)
  2) [Technologies](#technologies-used)
  3) [Challenges](#challenges)
  4) [Future Implementations](#future-implementations)
  5) [User Story](#user-story)
  6) [Demonstration](#demonstration)
  7) [Installation](#installation)
  8) [License](#license)

## Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

My motivation was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I built this site completely from scratch and deploy it to Heroku. It follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Technologies
* [nodejs](https://nodejs.org/en/) - to run the server in the terminal
* [mysql2](https://www.npmjs.com/package/mysql2) - database management
* [dotenv](https://www.npmjs.com/package/dotenv) - to hide sensitive user data
* [sequelize](https://sequelize.org/) - data modeling/associations
* [Postman](https://www.postman.com/) - seeing routed data

## Challenges
* 
* 
* 

## Future Implementation
* 
* 

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Demonstration
[Here is a video link of the app in action]()

## Installation
* For installation onto local machine, clone provided repository.
* Use `npm init` to initalize node package manager
* Use `npm install` to install dependencies
* Use `mysql -u root -p` then enter your password to enter the MySQL shell.
* Use `SOURCE schema.sql;` inside of the MySQL shell to reset the database.
* Use `npm run seed` in the terminal to apply seeds to the database.
* Use `npm start` to initiate the server in your terminal.

## License
MIT © Krenbot