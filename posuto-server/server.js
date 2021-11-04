const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()

let db;
MongoClient.connect('mongodb+srv://test:1234@cluster0.gbaka.mongodb.net/posuto?retryWrites=true&w=majority', function(error, client){
    if (error) console.log(error);

    db = client.db('posuto');

    db.collection('user').insertOne({ username : 'harry' }, (error, result) => {
        console.log('저장완료')
    })

    app.listen('3000', function(){
      console.log('listening on 3000');
    });
  })


