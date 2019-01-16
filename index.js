const router = require('koa-route')
const Koa = require('koa')

const app = new Koa()

app.use(router.get('/crash', () => process.exit(1)))
app.use(router.get('/:any', ctx => (ctx.body = 'hello world')))

const port = process.env.PORT || 3000
app.listen(port)
console.log(`listening on port ${port}`)
