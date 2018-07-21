const express = require('express');
const router = express.Router();
const crypto = require('crypto');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bounx');

var Todo = mongoose.model('coaches');
var key;
router.get('/:data', function(req,res){
  console.log(req.params.data);
  data=JSON.parse(req.params.data);
  if('password' in data)
  {
    const cipher = crypto.createCipher('aes192', data.password);
    let encrypted = cipher.update('lakshay', 'utf8', 'hex');
    console.log('encrypted: ' + encrypted);
    encrypted += cipher.final('hex');
    console.log('encrypted final: ' + encrypted);
    data.password=encrypted;
    console.log('encrpted');
  }
  Todo.findOneAndUpdate({username: data.username}, {$set:data}, {new: true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(data);
    console.log(doc);
    x=Todo.find({username: data.username},function(err,x){
      res.status(200).send(x);
    });
  });


});
module.exports = router;
