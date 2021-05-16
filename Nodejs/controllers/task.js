const db = require("../models");
const subtask = require("../models/subtask");
const Task = db.task;
const Subtask = db.subtask;
const Op = db.Sequelize.Op;

/**
 * Add Task
 * @param {*} req 
 * @param {*} res 
 */
exports.addTask = (req, res) => {
    console.log("req ==>", req.body)
    Task.create(req.body)
        .then(task => {
            res.status(200).send({
                status: true,
                message: "Task Added successfully!",
                data: task
            });
        })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};

/**
 * get Tasks
 * @param {*} req 
 * @param {*} res 
 */
exports.getTasks = (req, res) => {
    Task.findAll({
        order: [
            ['createdAt', 'DESC'],
        ],
    })
        .then(tasks => {
            res.status(200).send({
                status: true,
                data: tasks
            });
        })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};


/**
 * add Sub Task
 * @param {*} req 
 * @param {*} res 
 */
exports.addSubTask = (req, res) => {
    Subtask.create(req.body)
        .then(subtask => {
            res.status(200).send({
                status: true,
                message: "Subtask Added successfully!",
                data: subtask
            });
        })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};

/**
 * get Sub Tasks
 * @param {*} req
 * @param {*} res
 */
exports.getSubTasks = (req, res) => {
    Subtask.findAll({
        order: [
            ['createdAt', 'ASC'],
        ],
    })
        .then(subtasks => {
            res.status(200).send({
                status: true,
                data: subtasks
            });
        })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};


/**
 * get Sub Tasks
 * @param {*} req
 * @param {*} res
 */
exports.editSubTasks = (req, res) => {
    console.log("edit ")
    let data = req.body

    let query = {
        where: { id: req.body.id },
        returning: true,
    }

    Subtask.update(data, query).then(updatedTask => {
        res.status(200).send({
            status: true,
            data: updatedTask,
            message: "Subtask updated successfully!",
        });
    })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};