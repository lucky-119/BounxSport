const express = require('express');
const path = require('path');
const app = express();

const login = require('./controllers/login');
const coachreg = require('./controllers/coachreg');
const clubreg = require('./controllers/clubreg');
const dashboard = require('./controllers/dashboard');
const reset = require('./controllers/reset');

app.use(express.static(path.join(__dirname, 'dist/bounx')));

app.use('/login',login);
app.use('/register/coachreg',coachreg);
app.use('/register/clubreg',clubreg);
app.use('/dashboard',dashboard);
app.use('/reset',reset)

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'dist/bounx/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
