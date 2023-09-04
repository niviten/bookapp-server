import 'reflect-metadata'
import config from './config'
import express, {
  Express, Request, Response, NextFunction
} from 'express'
import mongoose from 'mongoose'


const PORT: number = config.port

const app: Express = express()

app.use(express.json())

async function connectToDB() {
  try {
    await mongoose.connect(config.mongodbURI)
    console.log('Connected to DB')
  } catch (error) {
    console.log('Error connecting to DB')
    console.log(error)
  }
}

app.all('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send('hello there')
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  connectToDB()
})
