const app = require('express')()
const engines = require('consolidate')
const cors = require('cors')

const api = require('./app/api')

const port = process.env.PORT || 3000

app.engine('njk', engines.nunjucks)
app.set('views', __dirname + '/views')
app.set('view engine', 'njk')
app.use(cors())

api(app)

const server = app.listen(port, () => {
  const {port, address} = server.address()
  console.log(`Server started on ${address}:${port}`)
})