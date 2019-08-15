const path = require('path')
const dotenv = require('dotenv')

const env = process.env.NODE_ENV || 'development'
const tail = env === 'development' ? '' : `${process.env.NODE_ENV}`

const pth = path.join(__dirname, `./.env.${tail}`)
const envSetup = dotenv.config({
  path: pth
})

if (envSetup.error) {
  throw envSetup.error
}

const {
  VUE_APP_HOST,
  VUE_APP_IMG_PATH,
  VUE_APP_CNF_PATH
} = process.env

module.exports = {
  VUE_APP_HOST,
  VUE_APP_IMG_PATH,
  VUE_APP_CNF_PATH
}
