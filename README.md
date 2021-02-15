<h1 align="middle">WaitCash</h3>

<h2 align="middle">A Web Application for keeping track of wages during server shifts.</h3?>

---

<p align="middle">
  <img src="images\waitcash.gif" width="40%"/>
</p>

---

<p>This is the Server for WaitCash. The Client can be found <a href="https://github.com/elijahsimpsonn/Waitcash-Client">here.</a></p>

---

### About:

WaitCash is an application for anyone who works in a position that earns them tips. Users of the application can create an account and enter tips which will be saved into their account. They can then see multiple breakdowns of their earnings in different formats. The GIF above shows th application in action, and I have provided a demo account for anyone who might want to see how the app works without creating an account. 

Below you will find information about the application, including the packages used, the server routes in place, and a change-log that outlines future editions I plan on adding. If you would like to see more of my projects, feel free to browse my GitHub profile, or check out my portfolio <a href="http://www.elijahsimpson.com/">here</a>. 

---
### Included Packages:

#### For App:

* **bcrypt.js** (password-hashing functions package)
* **cors** (prevents CORS errors with simple requests)  
* **dotenv** (imports from the .env file to process.env object for access)
* **express** (web framework for node.js)
* **helmet** (protects sensitive header information)  
* **jsonwebtoken** (library for token signing/verification)
* **knex** (sql query builder package)
* **morgan** (real-time notifications of requests in the terminal)  
* **pg** (PostgreSQL client for node.js)
* **postgrator cli** (cmd line SQL database migration tool)

#### For Development:

* **chai** (assertion functions package)
* **eslint** (static code analysis tool)
* **eslint-config-prettier** (turns off all rules that are unnecessary or might conflict with prettier) 
* **mocha** (a testing structure package)   
* **nodemon** (dev server that auto-refreshes when changes are made)  
* **prettier** (opinionated code formatter)
* **supertest** (package used to test HTTP calls)

---

### Server Routes:

#### Auth Router:
* **("api/auth/login") POST** - Handles user login. Checks to make sure there is not a required field missing in the request body, then checks to make sure the username and password are in the database. If everything passes, it logs the user in.

#### User Router:
* **("api/user/") POST** - Handles user registration. It checks for missing fields, validates the password, checks to see if username is avalible, then hashes the password and inserts the user into the database.
* **("api/user/tips") GET** - Makes a get request to the database for all of the tips the user has submitted. 
* **("api/user/tips") POST** - Post a new tip to the database that is associated with the user. 
 
---

### ChangeLog / Future Updates:
Coming soon!