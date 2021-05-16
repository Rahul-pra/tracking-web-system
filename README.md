# node-react-demo-web-tracking-system
Nodejs and Reactjs web tracking system

### Functionality :

- Create a Task tracking web page, which will have a form where users can insert the data and click on the "Submit" button.
- Form Fields: Name, Date & Time, Task Name (Name, Date & Time, Task Name fields should have appropriate Data Validations)
- All 3 fields are mandatory and Form should have appropriate validation.
- When User submits the data, Data should be displayed in a Table below the Form.
- Tasks which have sub-tasks & Start / Stop Time functionality
- Every task should have "Clone" functionality in which it will create the clone of task with sub tasks.
- Validate a sub task that the user can't remove it's Primary Task.
- The Table will have the same columns as the form (Name, Date & Time, Task Name, Action)
- Rightmost Column of Table will be Action which will have "Complete" "Edit" and "Deleted" buttons on each row.
- Users should be able to Complete/Edit/Deleted each entry using these buttons.
- Completed tasks should change to Green. Deleted Task Should turn into Red.

### Backend Technology: Node Js
### Frontend Technology: React Js
### Database: MySQL


### Getting Started 

- Open two terminal 
- one for Reactjs
- Second for Nodejs
- Please follow below steps

    ## For Nodejs: 

        `npm install`

    ### Change your database config and port 

        `Config.js` and `config/config.json` 

    ### run migration 

        `npm run migration`

    ### install nodemon globally

        `npm install -g nodemon`

    ### start project 

        `npm start`

        `http://localhost:5050/api/v1/` Api endpoint

    ## For Reactjs: 

        `npm install`
        `npm start`
        `http://localhost:3000/` open in browser

- signUp with `fullname email and Password`
- Signin with `email password`
- now Enjoy 

