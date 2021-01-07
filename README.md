# WaitCash(V2) Server

### The server for WaitCash, a web application for keeping track of wages during server shifts.

---

<p align="middle">
  <img src="images\loginpage.png" width="140" />
  <img src="images\registerpage.png" width="140" /> 
  <img src="images\dashboard.png" width="140" />
  <img src="images\shiftpage.png" width="140" />
  <img src="images\shifttips.png" width="140" />
</p>

---

<p>This is the server repo for version 2 of WaitCash. Right now it is just wireframes
and under construction.</p>

---
## Included Packages:

### For App:

* **Morgan** (real-time notifications of requests in the terminal)  
* **Cors** (prevents CORS errors with simple requests)  
* **Helmet** (protects sensitive header information)  
* **Dotenv** (imports from the .env file to process.env object for access)
* **Bcrypt** (password-hashing functions package)
* **JSONWebToken** (library for token signing/verification)
* **Knex** (sql query builder package)
* **PG** (PostgreSQL client for node.js)
* **Postgrator CLI** (cmd line SQL database migration tool)

### For Development:

* **NodeMon** (dev server that auto-refreshes when changes are made)  
* **Mocha** (a testing structure package)  
* **Chai** (assertion functions package)  
* **Supertest** (package used to test HTTP calls)

---

## User Stories / Application Features:

### Log-In / Registration Page:
* As a Returning User, I can login to my account using a username and password. 
* As a New User, I can create an account with a username, password, and email address.

### Dashbaord:
* As a Logged In User, I can:
    * See the current date at the top of the Dashboard.
    * Start a New Shift by pressing the 'Start Shift' Button.
    * Log Out of my account by pressing the 'Log Out' Button.
    * See my total earnings by All-Time, Year, Month, and Current Week without any needed input.
    * Filter my Earnings Data with the use of Charts with a drop down Select menu by the following opitions:
        * All Year Totals (Line Chart)
        * Highest Earning Months (Pie Chart)
        * Top Ten Highest Earning Days By Date (Column Chart)
        * Highest Earning Days In The Week (Pie Chart) 

### Current Shift Page:
* As a Logged In User, I can:
    * Enter a New Tip and Submit it to the current shift by pressing the 'Submit' Button.
    * See my Current Shift Earnings, Total Tips This Shift, and the Average Tip Per Meal without any needed input.
    * Edit one or multiple Tips by pressing the 'Edit Tips' Button.
    * End this Current Shift by pressing the 'End Shift' Button.

### Current Shift Tips Page:
* As a Logged In User, I can:
    * See a list, in decending order, of all of the Tips I have sumbmitted this Shift, with any needed input.
    * Delete any Tip by pressing the 'Delete' Button within the Tip list item component.
    * Edit any Tip by pressing the 'Edit' Button withing the Tip list Item component.
        * This will make the dollar amount of the tip change to an input, and will also change the 'Edit' Button to a 'Submit' Button.
        * When the 'Submit' Button is pressed after a new input, the page will render with the new information.
    * Return back to my Current Shift Page by pressing the 'Back To Current Shift' Button.  