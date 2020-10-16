/*
    Changes
    - Add mongodb calls
    - Add mongoose calls 
*/
var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const port = 3000;
var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log('Received POST: ', req.body);
  var todo = new Todo({text: req.body.text});
  todo.save().then(
    (doc)=>{res.send(doc)},
    (err)=>{res.status(400).send(err)}
  )

});

startServer();
function startServer() {
  app.listen(port, ()=>{console.log(`Started express on TCP ${port}`)});
 
}