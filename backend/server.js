const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')
const Router = require('koa-router')
const config = require('./config')
// const path = require('path')

const app = new koa()
const router = new Router()

const HOST = config.VUE_APP_HOST

app.use(cors({ origin: `${HOST}` }))

app.use(serve('src/static/examples/editors'))

if (process.env.NODE_ENV === 'production') {
  app.use(serve('dist'))
  router.get(/.*/, async ctx => {
    await send(ctx, 'dist/index.html')
  })
  app.use(router.routes())
}

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running on ${HOST}`)
