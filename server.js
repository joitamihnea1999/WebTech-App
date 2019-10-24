const express = require('express')
const fs = require('fs')
const app = express()

//middleware
app.use('/', express.static('frontend'))
 
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

//GET /contact
app.get('/contact', function(request, response){
    var content = fs.readFileSync('contact.html')
    response.type('text/html').send(content)
})



app.listen(3000)