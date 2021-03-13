const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const Router = require('router');
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, '0.0.0.0', function() { 

  console.log('Listening to port:  ' + port);
});

app.get('/signup.html', (req, res) => {
    res.sendFile('./signup.html', { root: __dirname });
});

app.get('/login.html', (req, res) => {
    res.sendFile('./login.html', { root: __dirname });
});

app.get('/main.html', (req, res) => {
    res.sendFile('./main.html', { root: __dirname });
});

app.get('/page2.html', (req, res) => {
  res.sendFile('./page2.html', { root: __dirname });
});

app.get('/about.html', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/password_match.js', (req, res) => {
  res.sendFile('./password_match.js', { root: __dirname });
});
app.use('/css',express.static(__dirname +'/style.css'));


let mysql = require('mysql');

let con = mysql.createConnection({
  host: '192.168.23.108',
  user: 'kaloyan',
  password: 'skam123',
  database: 'database1'
})
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'/register.html'));
});
app.post('/login.html',function(req,res){
    var reg={
        ID: 10,
        EmailAddress : req.body.email,
        PasswordSalt : req.body.password
    };

    var email=req.body.email;
    var password=req.body.password;
    con.query('SELECT * FROM users WHERE EmailAddress = ? and PasswordSalt= ?',  [email,password]
,function(err,rows){
    if(err) {
        con.end();
        return console.log(err);
    }

    if (!rows.length)
    {
        var sql = "INSERT INTO users (ID,EmailAddress, PasswordSalt,PasswordHash) VALUES ('100', '"+email+"','"+password+"','')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
       res.end();
        });
    }
    else
    {
        con.end();
        return res.sendFile("./login.html",{root:__dirname});
    }
});

});
