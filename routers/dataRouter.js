/**
 * @design by milon27
 * @sample router
 */

const express = require('express')
const router = express.Router()
const DataController = require('../controllers/DataController')

/**
 * @description 1. get a all row/document from a table
 * @param table [from we get all row/document]
 * @param field [order by this field]
 * @endpoint http://localhost:2727/data/get-all/:table/:field
 * @example http://localhost:2727/data/get-all/todo_table/id
 */
router.get('/get-all/:table/:field', DataController.getAll)


/**
 * 2. get a all row/document from a table using pagination
 * @param table [from we get all row/document]
 * @param field [order by this field]
 * @param page [the page number]
 * @endpoint http://localhost:2727/data/get-all/:table/:field/:page
 * @example http://localhost:2727/data/get-all/todo_table/id/2
 */
//http://localhost:2727/v1/get-all/:table/:field/:page (user_table)(id)(page no.=2)
router.get('/get-all/:table/:field/:page', DataController.getPaginateList)

module.exports = router