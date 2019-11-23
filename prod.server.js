var express = require('express')

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/api/test', function (req, res) {
  res.json('{test: test}')
})

app.use(apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(8905, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8905')
})
