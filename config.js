'use strict'

module.exports = {
  dbURL: process.env.MONGO_URI || 'mongodb://localhost:27017/chat',
  port: process.env.PORT || 3000,
}
