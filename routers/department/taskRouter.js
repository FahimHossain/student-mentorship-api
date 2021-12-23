/**
 * @design by milon27
 */
 const express = require('express')
const TaskController = require('../../controllers/department/taskController')
 const router = express.Router()


 router.get('/',TaskController.getAll)

 module.exports = router