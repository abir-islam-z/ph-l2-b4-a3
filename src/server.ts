import config from '@config/index'
import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import logger from './app/utils/logger'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.db_url as string)

    server = app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`)
    })
  } catch (error) {
    console.error('Error connecting to database', error)
  }
}

main()
