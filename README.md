# WaitCash(V2) Server

### The server for WaitCash, a web application for keeping track of wages during server shifts.

---

<p align="middle">
  <img src="images\loginpage.png" width="170" />
  <img src="images\registerpage.png" width="170" /> 
  <img src="images\dashboard.png" width="170" />
  <img src="images\shiftpage.png" width="170" />
</p>

---

<p>This is the server repo for version 2 of WaitCash. Right now it is just wireframes
and under construction.</p>

---
## Included packages:

### For App:

**Morgan** (real-time notifications of requests in the terminal)  
**Cors** (prevents CORS errors with simple requests)  
**Helmet** (protects sensitive header information)  
**Dotenv** (imports from the .env file to process.env object for access)
**Bcrypt** (password-hashing functions package)
**JSONWebToken** (library for token signing/verification)
**Knex** (sql query builder package)
**PG** (PostgreSQL client for node.js)
**Postgrator CLI** (cmd line SQL database migration tool)

### For Development:

**NodeMon** (dev server that auto-refreshes when changes are made)  
**Mocha** (a testing structure package)  
**Chai** (assertion functions package)  
**Supertest** (package used to test HTTP calls)
