require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json())

const port = process.env.PORT;

const db = require('../db/index.js')


app.get('/', (req, res) => {
    res.send(`Go to <a href="/animals">See Animals</a>`)
});

app.get('/animals', (req, res) => {
    var filter = req.query || {};
    db.query((animals) => {
        res.send(animals)
    }, filter)
});

app.post('/animals', (req, res) => {
    const animals = req.body;
    db.add((data)=>{
        res.send(data)
    }, animals)
});

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})
