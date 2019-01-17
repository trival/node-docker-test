const router = require('koa-route')
const Koa = require('koa')

const app = new Koa()

app.use(router.get('/crash', () => process.exit(1)))
app.use(router.get('/halt', () => process.exit(0)))
app.use(router.get('/error', () => {throw new Error("Eat this!!")}))
app.use(router.get('/:name', (ctx, name) => ctx.body = `hello ${name}!`))
app.use(router.get('', ctx => (ctx.body = 'hello world!')))

const port = process.env.PORT || 3333
app.listen(port)
console.log(`listening on port ${port}`)
