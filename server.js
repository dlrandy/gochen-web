const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const app = express()
const port = process.env.PORT||3000
const distPath = path.join(__dirname, './dist')
const indexFileName = 'index.html'
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// Enable various security helpers.
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(distPath))
app.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)))

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})