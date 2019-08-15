const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')
const config = require('../config')

const app = new koa()

const HOST = config.VUE_APP_HOST

app.use(cors({ origin: `${HOST}` }))

if (['production', 'ssr'].includes(process.env.NODE_ENV)) {
  const Router = require('koa-router')
  const router = new Router()
  app.use(serve('dist'))
  router.get('/', async ctx => {
    await send(ctx, 'dist/index.html')
  })
  app.use(router.routes())
} else {
  app.use(serve('src/static/examples/editors'))
}

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running on ${HOST}`)
