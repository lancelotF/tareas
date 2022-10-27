const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send("Hola")
})

app.listen(port, () => {
    console.log(`Aplicacion iniciada en el puerto ${port}`)
})