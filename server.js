const koa = require('koa')
const serve = require('koa-static')
const cors = require('@koa/cors')

const app = new koa()
app.use(cors({ origin: '*' }))
app.use(serve('src/static/examples/editors'))
app.listen(3000)
