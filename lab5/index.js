const express = require('express')
const app = express()
const port = 3000
const apiv1Messages = require('./routers/api/v1/messages');



//GET: / -> show homepage /w pug
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/v1/messages', apiv1Messages)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))