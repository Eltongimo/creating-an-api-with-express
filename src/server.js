const express = require('express')
const app = express()
const port = 3003


app.post('/productos', (req, res, next) =>{
    res.send({nome: 'Notebook', preco: 1000.9})
})

app.listen(port, ()=>{
    console.log('server is running on port', port)
})