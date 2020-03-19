const express = require('express')
const router = express.Router()

//GET: /api/v1/messages -> show messages from mongoDB
router.get('/', (req, res) => {
    res.send("get messages");
})

//GET: /api/v1/messages/:id -> show specific message from mongoDB
router.get('/:id', (req, res) => {
    res.send("get message " + req.params.id);
})

//POST: /api/v1/messages -> save message to mongoDB
router.post('/', (req, res) => {
    res.send("Post messages");
})

//PUT: /api/v1/messages/:id -> update a message from mongoDB
router.put("/:id", (req, res) => {
    res.send("Delete message " + req.params.id);
})

//DELETE: /api/v1/messages/:id ->delete message from mongoDB
router.delete("/:id", (req, res) => {
    res.send("Delete message " + req.params.id);
})

//GET: /api/v1/messages?user=username -> show al messages from specific user from monogDB
/*router.get("?user=:username", (req, res) => {
    res.send("get message of " + req.params.username);
})*/

module.exports = router;