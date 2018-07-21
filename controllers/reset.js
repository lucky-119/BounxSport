const express = require('express');
const router = express.Router();
const crypto = require('crypto');

var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/bounx');

var Coach = mongoose.model('coaches');
var key;
router.get('/:data', function(req,res){
  data=JSON.parse(req.params.data);
    const cipher = crypto.createCipher('aes192', data.password);
    let encrypted = cipher.update('lakshay', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log('encrypted final: ' + encrypted);
    data.password=encrypted;
    console.log('encrpted');
  Coach.findOneAndUpdate({username: data.username,status: "reset"}, {$set:data}, {new: true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    if(doc==null)
      res.status(200).send(false);
    else{
      x=Coach.find({username: data.username},function(err,x){
        res.status(200).send(x);

      });
    }
  });


});
module.exports = router;
