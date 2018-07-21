const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const axios = require('axios');


var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var nodemailer = require('nodemailer');
var randomstring = require('randomstring');

//Connect to database
mongoose.connect('mongodb://localhost/bounx');

var Todo = mongoose.model('coaches');

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/:data', function(req,res){
  var data = JSON.parse(req.params.data);
  const cipher = crypto.createCipher('aes192', data.password);
  let encrypted = cipher.update('lakshay', 'utf8', 'hex');
  console.log('encrypted: ' + encrypted);
  encrypted += cipher.final('hex');
  console.log('encrypted final: ' + encrypted);
  data.password=encrypted;
  x = Todo.find({'username': data.username},function(err,x){
    console.log(x);
            //console.log(x.length);
    if(x.length!=0){
      console.log('Email already registered');
      res.status(200).send(false);
    }
    else{
      data.vfcode=randomstring.generate(15);
      Todo(data).save(function(err){
        if (err)  throw err;
        console.log('Data saved');
        res.status(200).send(true);

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: '',
            pass: ''
          }
        });

        var mailOptions = {
            from: '',
            to: data.username,
            subject: 'Verify Email',
            text: 'You have successfully registered your account. Go to the following link to verify your email\n'+req.protocol + '://' + req.get('host') + '/login/verify/'+ data.vfcode
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }

      });


  });
}

});
});

module.exports = router;
