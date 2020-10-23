const express = require('express')
const app = express()
const port = 3003
const database = require('./database')



app.get('/products', (req, res, next) =>{
    // res.send({nome: 'Notebook', preco: 1000.9})
    res.send(database.getProducts())
})

app.get('/products/:id', (req, res, next)=>{
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) =>{
    const producto = database.saveProduct({
        name: req.body.name,
        price: req.body.preco
    })
    res.send(producto)
})

app.listen(port, ()=>{
    console.log('server is running on port', port)
})