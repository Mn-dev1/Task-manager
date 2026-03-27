import express from 'express'
import {db} from './config.js'
import mongoose from 'mongoose'
import taskRouter from './routes/taskRoutes.js'

const app = express()
app.use(express.json())
app.use('/tasks', taskRouter)

mongoose.connect(db).then(() => [
    app.listen(8080, () => {
        console.log('App running att http://localhost:8080')
    })
]).catch(error => console.log(error))

