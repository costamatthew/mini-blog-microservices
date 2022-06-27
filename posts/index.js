const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {
    "70e494b1": {
        id: "70e494b1",
        title: "Firts Post"
    },
    "054f2d11": {
        id: "054f2d11",
        title: "Firts Post"
    }
}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
})

app.listen(4000, () => {
    console.log('listening on http://localhost:4000')
})
