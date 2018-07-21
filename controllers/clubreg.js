const express = require('express');
const router = express.Router();
const crypto = require('crypto');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bounx');

var Todo = mongoose.model('clubs');

router.get('/:data', function(req,res){
  console.log(req.params.data);
  var data = JSON.parse(req.params.data);
  const cipher = crypto.createCipher('aes192', data.password);
  let encrypted = cipher.update('lakshay', 'utf8', 'hex');
  console.log('encrypted: ' + encrypted);
  encrypted += cipher.final('hex');
  console.log('encrypted final: ' + encrypted);
  data.password=encrypted;
  x = Todo.find({'email': data.email},function(err,x){
    console.log(x);
            //console.log(x.length);
    if(x.length!=0){
      console.log('Email already registered');
      res.status(200).send(false);
    }
    else{
      Todo(data).save(function(err){
        if (err)  throw err;
        console.log('Data saved');
        res.status(200).send(true);
      });
    }

  });

});

module.exports=router;
