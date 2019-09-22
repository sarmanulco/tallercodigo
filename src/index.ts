import express from 'express'

const app = express()

app.listen(8080, () => {
    console.log('Escuchando por el puerto 8080');
})