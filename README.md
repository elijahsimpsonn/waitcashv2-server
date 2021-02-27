<h1 align="middle">WaitCash</h3>

<h2 align="middle">A Web Application for keeping track of wages during server shifts.</h2>

---

<p align="middle">
  <img src="images\waitcash.gif" width="40%"/>
</p>

---

<h2 align="middle">This is the Server for WaitCash. The Client can be found <a href="https://github.com/elijahsimpsonn/Waitcash-Client">here.</a></h2>
<p align="middle">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
</p>

---

### About:

WaitCash is an application for anyone who works in a position that earns them tips. Users of the application can create an account and enter tips which will be saved into their account. They can then see multiple breakdowns of their earnings in different formats. The GIF above shows the application in action, and I have provided a demo account for anyone who might want to see how the app works without creating an account. 

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

---

### Setup Documentation:
* Create the Database and Test Database you use with the application in PostgreSQL. You can find documentaion <a href="https://www.postgresql.org/docs/9.0/sql-createdatabase.html">here</a> or use a GUI program like <a href="https://dbeaver.io/">DBBeaver</a>.
* Clone this repo.
* Run `npm install` to install all of the dependencies.
* Create a `.env` file inside of the root folder with the following information:
    ```
    NODE_ENV='development'
    PORT=8000
    DATABASE_URL="yourusername://postgres@localhost/yourdbname"
    TEST_DATABASE_URL="yourusername://postgres@localhost/yourtestdbname"
    JWT_SECRET=secret
    ```
* Remove `CLIENT_ORIGIN` from the `config.js` file in the `src` folder.
* Inside the `app.js` file in the `src` folder, replace:
    ```
    app.use(
        cors({
            origin: CLIENT_ORIGIN,
        })
    )
    ```
    with:
    `app.use(cors())`.
* Run the script file to populate the Database with the seed data by typing `./migrateAndSeed.sh` into your terminal.
* Run `npm start` in your terminal, which should show that the server is now running on port `8000`.
* Now head over to the <a href="https://github.com/elijahsimpsonn/Waitcash-Client">client repo</a> and follow the information there.