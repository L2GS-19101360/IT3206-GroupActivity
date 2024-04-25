const express = require('express');
const db = require('./db.config');
const dbConnection = require('./db.config');

const createTask = (req, res) => {
    const { title, description, stat } = req.body;

    const newTask = {
        title: title,
        description: description
    };

    dbConnection.query("INSERT INTO tasks SET ?", newTask, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            return res.status(200).json({
                status: 200,
                success: true,
                taskData: newTask,
                message: "Task Created!"
            });
        }
    });
};

const updateTask = (req, res) => {

}

const deleteTask = (req, res) => {
    const taskId = req.params.id;

    dbConnection.query("DELETE FROM tasks WHERE id = ?", taskId, function (err, task) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send({
                error: false,
                message: "Task Deleted!",
                status: 200
            });
        }
    });
}

const retrieveAllTasks = (req, res) => {
    dbConnection.query("SELECT * FROM tasks", function (err, rows) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(rows);
            res.status(200).send({
                status: 200,
                data: rows
            });
        }
    });
};

const retrieveTaskByParams = (req, res) => {

}

const retrieveTaskById = (req, res) => {

}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    retrieveAllTasks,
    retrieveTaskByParams,
    retrieveTaskById
}