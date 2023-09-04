import dotenv from 'dotenv'

const envFound = dotenv.config()

if (!envFound) {
  throw new Error("Couldn't find .env file")
}

export default {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 7000,
  mongodbURI: process.env.MONGODB_URI,
}
