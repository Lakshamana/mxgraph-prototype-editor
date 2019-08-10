const path = require('path')
const dotenv = require('dotenv')

const env = process.env.NODE_ENV || 'development'
const tail = env === 'development' ? '' : '.production'

const envSetup = dotenv.config({
  path: path.join(__dirname, `../.env${tail}`)
})

if (envSetup.error) {
  throw envSetup.error
}

const { VUE_APP_HOST } = process.env

module.exports = {
  VUE_APP_HOST
}
