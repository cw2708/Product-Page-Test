import express from 'express'
import product from './routes/product'

const server = express()


server.use(express.json())
server.use('/api/v1/product', product)


export default server