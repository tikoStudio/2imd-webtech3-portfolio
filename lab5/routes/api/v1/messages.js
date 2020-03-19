const express = require('express')
const router = express.Router()
const messagesController = require('../../../controllers/api/v1/messages')

//GET: /api/v1/messages -> show messages from mongoDB
router.get('/', messagesController.getAll)

//GET: /api/v1/messages/:id -> show specific message from mongoDB
router.get('/:id', messagesController.getOne)

//POST: /api/v1/messages -> save message to mongoDB
router.post('/',messagesController.postAll)

//PUT: /api/v1/messages/:id -> update a message from mongoDB
router.put("/:id", messagesController.update)

//DELETE: /api/v1/messages/:id ->delete message from mongoDB
router.delete("/:id", messagesController.remove)

//GET: /api/v1/messages?user=username -> show al messages from specific user from monogDB
/*router.get("?user=:username", messagesController.getAllUser)*/

module.exports = router;