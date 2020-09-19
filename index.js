const bodyParser = require('body-parser')
const consola = require('consola')
const express = require('express')
const morgan = require('morgan')
const app = express()

const apiRoutes = require('./api')
async function start() {
  // Give usefull middleware to express
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('combined'))

  app.use('/api/', apiRoutes)

  // Listen the server
  app.set('port', process.env.PORT || 3000)
  const server = app.listen(app.get('port'))

  consola.ready({
    message: `🚀 Server listening on http://localhost:${server.address().port}`,
    badge: true,
  })
}
start()
