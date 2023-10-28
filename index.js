const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello Fruity")
})

app.get('/fruits', (req, res) => {
    res.send('Return all the fruits');
 })
 
 app.get('/fruits/:name', (req, res) => {
    res.send(`Return a fruit with id ${req.params.name}`);
 })
 
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
 })