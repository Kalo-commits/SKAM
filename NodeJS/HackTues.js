const dt = require('./mymodule');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, '0.0.0.0', function() { 

  console.log('Listening to port:  ' + port);
});

app.get('/signup.html', (req, res) => {
    res.sendFile('./signup.html', { root: __dirname });
});

app.get('/servo.txt', function(req,res){
   	 res.send('The request has been prossessed and the watering system has been opened for 2 seconds.');
	dt.Turn();
});

app.get('/login.html', (req, res) => {
    res.sendFile('./login.html', { root: __dirname });
});

app.get('/main.html', (req, res) => {
    res.sendFile('./main.html', { root: __dirname });
});


app.get('/about.html', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/password_match.js', (req, res) => {
  res.sendFile('./password_match.js', { root: __dirname });
});
app.use('/style.css',express.static(__dirname +'/style.css'));
app.use('/icon.ico',express.static(__dirname +'/icon.ico'));
app.use('/bg.jpg',express.static(__dirname +'/bg.jpg'));

let mysql = require('mysql');

let connection = mysql.createConnection({
  host: '192.168.23.108',
  user: 'kaloyan',
  password: 'skam123',
  database: 'database1'
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/signup.html'));
  });
app.post('/login.html',function(req,res){

    var email=req.body.email;
    var password=req.body.password;
    res.sendFile('/login.html',{root:__dirname});
    var i =Number(5666);  
    connection.connect(function(err) {
    if (err) throw err;
    connection.query('SELECT * FROM users WHERE EmailAddress = ? and PasswordSalt= ?',  [email,password]
    ,function(err,rows){
    if(err) {
        connection.end();
        return console.log(err);
    }

    if (!rows.length)
    {
        var sql = "INSERT INTO users (EmailAddress, PasswordSalt,PasswordHash) VALUES ('"+email+"','"+password+"','')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
       res.end();
        });
    }
    else
    {
        connection.end();
        return res.sendFile("./login.html",{root:__dirname});
    }
    });
    });
  });
