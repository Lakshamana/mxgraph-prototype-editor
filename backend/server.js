const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')
const config = require('./config')

const app = new koa()

const HOST = config.VUE_APP_HOST

app.use(cors({ origin: `${HOST}` }))

app.use(serve('src/static/examples/editors'))

let port = 3000
if (process.env.NODE_ENV === 'production') {
  app.use(serve('dist'))
  app.use(async ctx => {
    await send(ctx, '/dist/index.html')
  })
  port = 80
}

app.listen(port)
console.log(`Server running on ${HOST}`)
