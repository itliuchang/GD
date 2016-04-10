var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var app = new (require('express'))()
var port = 3000
var compiler = webpack(config)
app.use(express.static(__dirname+'/public'))
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/articlelist/class",function(req,res){
  res.send({
    "list":[
      {
        "id":"1",
        "title":"class",
        "lookNum":"1000",
        "replyNum":"100",
        "createTime":"1459072370000",
        "tags":["设计","ps"]
      },
      {
        "id":"2",
        "title":"class",
        "lookNum":"1000",
        "replyNum":"100",
        "createTime":"1459072370000",
        "tags":["设计","ps"]
      },
      {
        "id":"3",
        "title":"class",
        "lookNum":"1000",
        "replyNum":"100",
        "createTime":"1459072370000",
        "tags":["设计","ps"]
      },
      {
        "id":"4",
        "title":"class",
        "lookNum":"1000",
        "replyNum":"100",
        "createTime":"1459072370000",
        "tags":["设计","ps"]
      }
    ]
  })
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
