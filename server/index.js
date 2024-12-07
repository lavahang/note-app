import express from 'express'
import cors from 'cors'

import authRouter from './routes/auth.js'

const app = express()
const port = 3000

app.use(cors())
app.use('/api/auth', authRouter)


app.listen(port, () => {
    console.log(`Note app listening on port ${port}`)
  })