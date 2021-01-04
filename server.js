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
const { ObjectID } = require('mongodb');
const { todo } = require('tap');

const port =process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  Todo.find().then(
  (todos) => { res.send({todos}) },
  (err) => { res.status(400).send(err); })
})

app.post('/todos', (req, res) => {
  console.log('Received POST: ', req.body);
  var todo = new Todo({text: req.body.text});
  todo.save().then(
    (doc)=>{res.send(doc)},
    (err)=>{res.status(400).send(err)}
  )
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)){ res.status(404).send(`Invalid ID: ${id}`);}
  Todo.findById(id).then(
    (todo)=>{res.send(todo)},
    (err)=>{res.status(400).send(err)}
  )
})

app.get('/users', (req, res) => {
  User.find().then(
  (users) => { res.send({users}) },
  (err) => { res.status(400).send(err); })
})

app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)){ res.status(404).send(`Invalid ID: ${id}`);}
  User.findById(id).then(
    (user)=>{
      if (!user) {res.status(404).send(`User not found: ${id}`);}
      else {res.send(user);}
    },
    (err)=>{res.status(400).send(err)}
  )
})

module.exports = {app};

startServer();
function startServer() {
  app.listen(port, ()=>{console.log(`Started express on TCP ${port}`)});
 
}
// https://damp-dusk-24705.herokuapp.com/ | https://git.heroku.com/damp-dusk-24705.git
// mongodb+srv://todoadmin:****@advnodejs1.zjou4.mongodb.net/<dbname>?retryWrites=true&w=majority