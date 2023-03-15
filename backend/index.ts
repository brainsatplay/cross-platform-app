import express from 'express'
import { backendPort } from '../common'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello world from the server')
})

app.listen(backendPort, () => {
  console.log(`App listening on port ${backendPort}`)
})