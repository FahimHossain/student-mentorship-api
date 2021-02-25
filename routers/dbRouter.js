const express = require('express')
const DbController = require('../controllers/DbController')
const router = express.Router()

/**
 * @description 1. create the database
 * @endpoint http://localhost:2727/db/create-db
 * @example http://localhost:2727/db/create-db
 */
router.get('/create-db', DbController.createDb)
/**
 * @description 1. create the ticket table
 * @endpoint http://localhost:2727/db/create-table/ticket
 * @example http://localhost:2727/db/create-table/ticket
 */
router.get('/create-table/ticket', DbController.createTicketTable)
/**
 * @description 1. create the ticket_chat table
 * @endpoint http://localhost:2727/db/create-table/ticket_chat
 * @example http://localhost:2727/db/create-table/ticket_chat
 */
router.get('/create-table/ticket_chat', DbController.createTicketChatTable)

/**
 * @description 1. create the ticket_chat table
 * @endpoint http://localhost:2727/db/create-table/users
 * @example http://localhost:2727/db/create-table/users
 */
router.get('/create-table/users', DbController.createUserTable)

module.exports = router