const express = require('express');
const db = require('./db.config');
const dbConnection = require('./db.config');

const createTask = (req, res) => {
    const { title, description, stat } = req.body;

    const newTask = {
        title: title,
        description: description
    };

    if (!title || !description) {
        return res.status(400).json({ error: true, message: "Please provide both title and description" });
    }

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
    const taskId = req.params.id;
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: true, message: "Please provide both title and description" });
    }

    dbConnection.query("UPDATE tasks SET title=?, description=? WHERE id=?", [title, description, taskId], function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: true, message: "Failed to update task" });
        }
        return res.status(200).json({
            error: false,
            message: "Task updated successfully",
            status: 200
        });
    });
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

const retrieveTaskByTitle = (req, res) => {
    const taskTitle = req.params.input

    dbConnection.query("SELECT * FROM tasks WHERE title =?", [taskTitle], function (err, task) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(task);
            res.status(200).send({
                status: 200,
                data: task
            });
        }
    });
}

const retrieveTaskById = (req, res) => {
    const taskId = req.params.id;

    dbConnection.query("SELECT * FROM tasks WHERE id=?", [taskId], function (err, task) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(task);
            res.status(200).send({
                status: 200,
                data: task
            });
        }
    });
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    retrieveAllTasks,
    retrieveTaskByTitle,
    retrieveTaskById
}