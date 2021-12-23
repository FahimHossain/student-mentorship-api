/**
 * @design by milon27
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

module.exports = router;
