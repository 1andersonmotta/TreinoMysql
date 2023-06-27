require('dotenv').config();
const express = require('express');
const db = require('./db')


const app = express();
app.use(express.json());

app.get('/clientes', async (req, res) => {
    const results = await db.selectCustomers()
    res.json(results)
})
app.post('/clientes', async (req, res) => {
    const { username, email, password } = req.body
    const results = await db.insertCustomers(username, email, password)
    res.json(results)
})
app.patch('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const { username, email, password } = req.body
    const results = await db.updateCustomers(parseInt(id), username, email, password)
    res.json(results)
})
app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const results = await db.deleteCustomers(parseInt(id))
    res.json(results)
})
app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const results = await db.findOneCustomers(parseInt(id))
    res.json(results)
})

app.get('/', (req, res, next) => {
    res.json({ message: "Hello World" })
})

app.listen(process.env.PORT, () => {
    console.log("API is Running");
})