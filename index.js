import express from 'express'
import morgan from 'morgan'
import database from './src/database/database.js'

// Variables
const app = express()
const port = 3000


// Middleware
app.use(morgan('dev'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})