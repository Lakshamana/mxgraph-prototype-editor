const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')
const config = require('./config')
const path = require('path')

const app = new koa()

const HOST = config.VUE_APP_HOST

app.use(cors({ origin: `${HOST}` }))

app.use(serve(path.resolve(__dirname, '../src/static/examples/editors')))

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.resolve(__dirname, '../dist')))
  app.use(async ctx => {
    await send(ctx, path.resolve(__dirname, '../dist/index.html'))
  })
}

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running on ${HOST}`)
