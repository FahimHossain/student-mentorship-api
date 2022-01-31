/**
 * @design by FahimHossain
 * @sample router
 */

const express = require("express");
const TaskController = require("../../controllers/task/TaskController");
const router = express.Router();

/**
 * @description 1. get all tasks from a table
 * @param table [from we get all document]
 * @param field [order by created at]
 * @endpoint http://localhost:2727/task/add
 * @example http://localhost:2727/task/add
 */
router.post("/add", TaskController.createTask);
router.get("/get-all", TaskController.viewTasks);

//http://localhost:2727/task/:id
router.delete("/:id",TaskController.deleteTask)

module.exports = router;
