const express = require('express');
const router = express.Router();
const taskController = require('./task.controller');

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.get('/', taskController.retrieveAllTasks);
router.get('/taskTitle/:input', taskController.retrieveTaskByTitle);
router.get('/taskId/:id', taskController.retrieveTaskById);
router.put('/startTask/:id', taskController.startTask);
router.put('/finishTask/:id', taskController.finishTask)

module.exports = router