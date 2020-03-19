const express = require('express')
const app = express()
const port = 3000

//GET: / -> show homepage /w pug
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//GET: /api/v1/messages -> show messages from mongoDB
app.get('/api/v1/messages', (req, res) => {
    res.send("get messages");
})

//GET: /api/v1/messages/:id -> show specific message from mongoDB
app.get('/api/v1/messages/:id', (req, res) => {
    res.send("get message " + req.params.id);
})

//POST: /api/v1/messages -> save message to mongoDB
app.post('/api/v1/messages', (req, res) => {
    res.send("Post messages");
})

//PUT: /api/v1/messages/:id -> update a message from mongoDB
app.put("/api/v1/messages/:id", (req, res) => {
    res.send("Update message " + res.params.id);
})

//DELETE: /api/v1/messages/:id ->delete message from mongoDB
app.delete("/api/v1/messages/:id", (req, res) => {
    res.send("Delete message " + req.params.id);
})

//GET: /api/v1/messages?user=username -> show al messages from specific user from monogDB
app.get("/api/v1/messages?user=:username", (req, res) => {
    res.send("get message of " + req.params.username);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))