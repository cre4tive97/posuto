const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()

MongoClient.connect('mongodb+srv://test:1234@cluster0.gbaka.mongodb.net/posuto?retryWrites=true&w=majority', function(error, client){
    if (error) return console.log(error);
    app.listen('3000', function(){
      console.log('listening on 3000')
    });
  })


  