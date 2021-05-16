/*********************************************************************************************************** */
//                                  This is API Router for APP                                     //
/********************************************************************************************************* */

const validations = require('../validation/index');
const verify = require('./../middleware/verify')
const authController = require('./../controllers/auth');
const apiEndpint = "/api/v1";
const authMiddleware = require('./../middleware/authJwt');
const userController = require('./../controllers/user');
const taskController = require('./../controllers/task');

const { validate, ValidationError } = require('express-validation')



module.exports.set = (app) => {
    app.post(apiEndpint + '/register', validate(validations.signupValidation), verify.checkDuplicateEmail, authController.signup);
    app.post(apiEndpint + '/login', validate(validations.loginValidation), authController.signin);
    app.get(apiEndpint + '/users', authMiddleware.verifyToken, userController.getUsers);
    app.post(apiEndpint + '/add-task', authMiddleware.verifyToken, taskController.addTask);
    app.get(apiEndpint + '/get-all-tasks', authMiddleware.verifyToken, taskController.getTasks);
    app.post(apiEndpint + '/add-sub-task', authMiddleware.verifyToken, taskController.addSubTask);
    app.get(apiEndpint + '/get-all-sub-tasks', authMiddleware.verifyToken, taskController.getSubTasks);
    app.put(apiEndpint + '/edit-sub-task', authMiddleware.verifyToken, taskController.editSubTasks);



    app.use(function (err, req, res, next) {
        if (err instanceof ValidationError) {
            return res.status(err.statusCode).json(err)
        }
        return res.status(500).json(err)
    })
}

