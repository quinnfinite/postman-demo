const express = require('express');

const app = express();

const port = 8008;

app.get('/', (req, res) => {
    res.send("Howdy Partner")
});

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})
