// Modules
import express from 'express'
import morgan from 'morgan'
// Database connection
import database from './src/database/database.js'
// Import routes
import Routes from "./src/routes/salao.routes.js"

// Variables
const app = express()
const port = 3000


// Middleware
app.use(morgan('dev'))

// Routes
app.use('/salao', Routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
