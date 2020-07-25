/*
    Changes
    - Add mongodb calls 
*/
const http = require('http');
const port = 3000;
var db;

const mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost:27017/todo', (err, client)=>{
    if (err) {return console.log(`Unable to connect to db on err: ${err}`)}
    else {
        console.log ('db connection established');
        db = client.db('tododb');
/*
        db.collection('todos').insertOne(
          {
            text: 'my third task',
            completed: true
          },
          (err, result)=>{
            if (err) {return console.log(`Unable to insert item: ${err}`);}
            console.log(JSON.stringify(result.ops, undefined, 2));
          }
        )
        
        db.collection('users').insertOne(
          {
            name: 'user2',
            password: 'password2'
          },
          (err, result)=>{
            if (err) {return console.log(`Unable to insert item: ${err}`);}
            console.log(JSON.stringify(result.ops, undefined, 2));
          }
        )

        db.collection('todos').deleteMany({completed: false}).then(
          (result)=>{console.log(`Result: ${result.result.ok?"OK":"Failed"}, Count: ${result.result.n}`)},
          (err)=>{console.log(`error deleting docs: ${err}`)}
        )

        db.collection('todos').deleteOne({text: "Eat breakfast"}).then(
          (result)=>{console.log(`Result: ${result.result.ok?"OK":"Failed"}, Count: ${result.result.n}`)},
          (err)=>{console.log(`error deleting docs: ${err}`)}
        )
        */

        db.collection('todos').findOneAndDelete({text: "Eat breakfast"}).then(
          (result)=>{
            console.log(`Value: ${JSON.stringify(result.value)}`);
            console.log(`Result: ${result.ok?"OK":"Failed"}, Count: ${result.lastErrorObject.n}`)
          },
          (err)=>{console.log(`error deleting docs: ${err}`)}
        )

        db.collection('todos').find().toArray().then(
          (docs)=>{ console.log(docs);},
          (err)=>{console.log(`error finding docs: ${err}`)}
        );

        startServer();
        client.close();  //temporary
    }
  });

function startServer() {
  http.createServer((request, response) => {
    console.log(request.headers)
    console.log(request.method)
    console.log(request.statusCode)
    console.log(request.url)
    if (request.method == 'POST') {
      let buff = ''
      request.on('data', function (chunk) {
        buff += chunk  
      })
      request.on('end', function () {
        console.log(`Body: ${buff}`)
        response.end('\nAccepted body\n\n')
      })
    } else {
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.end('GET request received\n')
    } 
  }).listen(port)
}