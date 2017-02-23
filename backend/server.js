const express = require('express')
const app = express();


// const server = require('http').Server(app);
const server = require('http').createServer(app);
// const io = require('socket.io')(server)
const io = require('socket.io')(server)

const bodyParser = require('body-parser') , cors = require('cors');
const mongoose = require('mongoose');

// const mon = require('mongodb').MongoClient;
const route = require('./route.js');
const model = require('./model.js');



// Config
app.use(bodyParser.json())
app.use(cors());
// app.use()
 
// Models 
var dbModel = model(mongoose)

// Routing 
route(app, dbModel)

io.on('connection', function(socket){
  console.log( `a user connected ${socket.id}`);
});


let serverlisten = server.listen(process.env.PORT || 4000, () => {
    console.log(`i am start server at ${serverlisten.address().port}`)
}) 
  