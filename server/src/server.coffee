  nodemailer = require('nodemailer')
  credentials = require('./credentials')  
  express = require('express')
  parser = require('body-parser')


  transporter = nodemailer.createTransport
    host: credentials.host
    secure: false
    port: 25
    auth:
      user: credentials.email
      pass: credentials.pass
    tls: rejectUnauthorized: false

  app = express()

  app.use (req, res, next) ->
    res.header 'Access-Control-Allow-Origin', '*'
    res.header 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'
    res.header 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
    next()
    return

  app.use parser.urlencoded extended:true

  app.use parser.json()

  app.post '/mailer', (req, res) ->
    data = req.body.mail
    if typeof data.name is 'string' and typeof data.email is 'string' and typeof data.message is 'string'
      transporter.sendMail {
        from: data.name + ' <' + data.email + '>'
        to: credentials.email
        subject: 'Contact Form - blakenewman.co.uk'
        text: data.message
      }, (error, info) ->
        if error
          code = 200
          message = 'Email stuck in cyberspace! oops!'
        else
          code = 400
          message = 'It\'s alive! It\'s alive!'
        return
    else
      code = 200
      message = 'None shall pass'
    res.status code
    res.send message
    return

  app.listen 9812
