# Todo-sequelize

  Simple todo list for you to check if todo done or not

![enter image description here](https://raw.githubusercontent.com/yaahsin/todo-sequelize/main/views/A14%20To-do%20List%20Sequelize_index.png)

## Features

 - [ ] CRUD operations: Create, view, edit, delete todos.
 - [ ] Authentication: user need to register to acquire permission to enter the homepage (register, login, FB register and FB login)
 - [ ] Secure passwords with hash function
  
  ![enter image description here](https://raw.githubusercontent.com/yaahsin/todo-sequelize/main/views/A14%20To-do%20List%20Sequelize_home.png)

  
## Installing
1. Open terminal.
2. Cloning the repository

```shell
// HTTPS
git clone https://github.com/yaahsin/todo-sequelize.git
```
3. Move to the folder `cd todo-sequelize`
4. Type in `npm install` in terminal to install all required packages.
5. Create FB login App at https://developers.facebook.com/
6. Please see .env.example  to create your own environment variable.
7. Create SQL database
```shell
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
select * from todos;
select * from users;
```
8. Command `npm run dev` to start the server 
9. Command `npx sequelize db:seed:all` to run seeder 
10. If `server is running on port 3000`, visit http://localhost:3000.

**Built With**

- Node.js v16.14.2
- express v4.16.4
- express-handlebars v3.0.0
- handlebars-helpers v0.10.0
- express-session v1.17.1
- bcryptjs v2.4.3
- connect-flash v0.1.1
- method-override v3.0.0
- dotenv v8.2.0
- passport v0.4.1
- passport-facebook v3.0.0
- passport-local: v1.0.0
- sequelize v5.21.13",
- sequelize-cli v5.5.1
- MySQL database
- Bootstrap v5.1.3
- font-awesome
