const express = require('express');
const router = express.Router();
const taskController = require('./task.controller');

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.get('/', taskController.retrieveAllTasks);
router.get('/:input', taskController.retrieveTaskByParams);
router.get('/:id', taskController.retrieveTaskById);

module.exports = router