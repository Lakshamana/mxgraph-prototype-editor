const koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')

const app = new koa()
app.use(cors())

app.use(serve('src/static/examples/editors/config'))
app.use(serve('src/static/examples/editors/images'))
app.use(serve('dist'))

// if (process.env.NODE_ENV === 'production') {

// }
app.use(async ctx => {
  await send(ctx, '/dist/index.html')
})

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running on http://localhost:${port}`)
