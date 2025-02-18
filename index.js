import express from 'express'
import morgan from 'morgan'

// Variables
const app = express()
const port = 3000


// Middleware
app.use(morgan('dev'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})