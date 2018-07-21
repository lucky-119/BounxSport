const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const axios = require('axios');


var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//Connect to database
mongoose.connect('mongodb://localhost/bounx');

//Create a schema
var coachSchema = new mongoose.Schema({
  username: String,
  password: String,
  fname: String,
  lname: String,
  gender: String,
  dob: Date,
  contact: Number,
  address1: String,
  address2: String,
  city: String,
  state: String,
  postcode: Number,
  country: String,
  bio: String,
  atheletich: String,
  remarks: String,
  minage: Number,
  maxage: Number,
  maxclass: String,
  minnoofplayers: Number,
  maxnoofplayers: Number,
  rating: Number,
  ntrp: Number,
  atp: Number,
  itf: Number,
  vfcode: String,
  status: String
});

var clubSchema = new mongoose.Schema({
  managername: String,
  phone: Number,
  email: String,
  password: String,
  clubname: String,
  description: String,
  website: String,
  add1: String,
  add2: String,
  city: String,
  state: String,
  postcode: Number,
  country: String,
  timezone: String,
  facebook: String,
  twitter: String,
  google: String
});

var Coach = mongoose.model('coaches', coachSchema);
var Club = mongoose.model('clubs', clubSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/:logindata', function(req,res){
  var logindata = JSON.parse(req.params.logindata);
  const cipher = crypto.createCipher('aes192', logindata.password);
  let encrypted = cipher.update('lakshay', 'utf8', 'hex');
  console.log('encrypted: ' + encrypted);
  encrypted += cipher.final('hex');
  console.log('encrypted final: ' + encrypted);
  logindata.password=encrypted;
  data=Coach.find({'username': logindata.username},function(err,data){
    console.log(data[0].status);
    if(err) throw err;
    if(data.length == 0)
    {
      console.log('Username not registered');
      res.status(200).send(false);
    }
    else if(data[0].status=='inactive')
    {
      res.status(200).send([JSON.parse('{"status":"inactive"}')]);
    }
    else if(data[0].password==logindata.password){
      console.log('matched');
      res.status(200).send(data);
    }
    else
    {
      console.log('not matched');
      res.status(200).send(false);
    }
  });

});

// Forget Password

var nodemailer = require('nodemailer');
var randomstring = require('randomstring');

router.get('/fw/:fdata', function(req,res){
  var fdata = JSON.parse(req.params.fdata);
  data = Coach.find({'username': fdata.username}, function(err,data){
    if(data.length == 0)
    {
      console.log('Username not registered');
      res.status(200).send(false);
    }
    else
    {
      console.log('Username found');
          fdata.vfcode=randomstring.generate(8);
          Coach.findOneAndUpdate({username: fdata.username}, {$set:fdata}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }
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
                to: fdata.username,
                subject: 'Reset your password',
                text: 'Type the following code to reset your password \n Verification Code: '+fdata.vfcode +'\n\n This code will be active only for 15 minutes.'
            };

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
              function check(){
                console.log('Session Expired');
                Coach.findOneAndUpdate({username: fdata.username}, {$set:JSON.parse('{"status":"active"}')}, {new: true}, function(err, doc){
                  if(err){
                      console.log("Something wrong when updating data!");
                  }
                });
              }
              setTimeout(check, 900000);
            });

        });
  }
});
});


//Reset password

router.get('/reset/:resetdata', function(req,res){
  var usercode=JSON.parse(req.params.resetdata).vfcode;
  console.log(usercode);
  var flag=0;
  data = Coach.find({'status': 'reset'}, function(err,data){
    for(var x in data){
      console.log(data[x].vfcode);
      if(data[x].vfcode==usercode){
        flag=1;
        console.log('Correct Verification Code');
        res.status(200).send(JSON.parse('{"username":"'+data[x].username+'"}'));
      }
    }
    if(flag==0){
      console.log('Wrong Verification Code')
      res.status(200).send(false);
    }
});
});


//Verify

router.get('/verify/:data', function(req,res){
  console.log('Email Verified');
  var usercode = req.params.data;
  data = Coach.find({'status': 'inactive'}, function(err,data){
    var flag=0;
    for(var x in data){
      console.log(data[x].vfcode);
      if(data[x].vfcode==usercode){
        flag=1;
        console.log('Correct Verification Code');
        Coach.findOneAndUpdate({username: data[x].username}, {$set:JSON.parse('{"status":"active"}')}, {new: true}, function(err, doc){
          if(err){
              console.log("Something wrong when updating data!");
          }
        });
        res.status(200).redirect('/verify');
      }
    }
    if(flag==0){
      console.log('Wrong Verification Code')
      res.status(200).redirect('/');
    }
  });
});
module.exports = router;
