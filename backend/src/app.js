import express from 'express'
import cors from 'cors'
import { postsRoutes } from './routes/posts.js'

const app = express()

app.use(cors({ origin: true }))
postsRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
