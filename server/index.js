require('dotenv').config();
const express = require('express');

const app = express();

const port = 8008;

const db = require('../db/index.js')


app.get('/', (req, res) => {
    res.send(`Go to <a href="/animals">See Animals</a>`)
});

app.get('/animals', (req, res) => {
    db.query((animals) => {
        res.send(animals)
    })
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})