const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, '0.0.0.0', function() { 

  console.log('Listening to port:  ' + port);
});

app.get('/register.html', (req, res) => {
    res.sendFile('./register.html', { root: __dirname });
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

let connection = mysql.createConnection({
  host: '192.168.23.108',
  user: 'kaloyan',
  password: 'skam123',
  database: 'HackTues'
})

/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/register.html'));
  });
app.post('/login.html',function(req,res){

    var email=req.body.email;
    var password=req.body.password;
    res.sendFile('/login.html',{root:__dirname});
    var i =Number(14);  
    connection.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO users (ID,EmailAddress, PasswordSalt,PasswordHash) VALUES ('"+i+"', '"+email+"','"+password+"','')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
       res.end();
       i++;
    });
    });
  })*/
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/register.html'));
  
  connection.query('select * from users where EmailAddress= "'+req.body.email+'" ',function(err,row){
    if(err){
      connnection.query('insert into users(ID,EmailAddress, PasswordSalt,PasswordHash) VALUES("","' + password + '","' + email + '","")',
      function(err,rows,fields){   
        console.log(rows);
        res.send("inserted");
    });
  }
  else{
    res.send("user already registered");
    return;
  }
  });

  connection.end();
});
