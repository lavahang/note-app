import express from 'express'
import cors from 'cors'
import connectToMongoDB from './db/db.js'

// import authRouter from './routes/auth.js'
import noteRouter from './routes/note.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)


app.listen(port, () => {
    connectToMongoDB();
    console.log(`Note app listening on port ${port}`)
  })
