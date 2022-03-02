# bookclub

# Setup

### Dependencies

* Run npm install in project directory. This will install server-related dependencies such as express.
* cd client and run npm install. This will install client dependencies (React).

### Database Prep

* Access the MySQL interface in your terminal by running mysql -u root -p
* Create a new database called bookclubapp: create database bookclubapp
* Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=bookclubapp

* Run npm run migrate in the project folder of this repository, in a new terminal window. This will create 2 tables called 'books' and 'bookclub' in your database.

* In your MySQL console, you can run use bookclubapp; and then describe candidats; to see the structure of the candidats table. Same thing for the 'books' table. This is a description of the tables:



image of tables in MySQL IMPORTANT: the foreign key on the guide it's just to know how the tables are connect, but in the project ww will be using the JOIN tables.

## FE COMPONENTS

Development

* Run npm start in project directory to start the Express server on port 5001
* In another terminal, do cd client and run npm start to start the client in development mode with hot reloading in port 3000.

# NEXT STEPS

### Front-end

* Make the app responsive.
* Improve design.
* Add filter/search on Bookclubsearch and Booksearch views.

### Bach-end

* Add API functionalities.
* Connect more backend routes.