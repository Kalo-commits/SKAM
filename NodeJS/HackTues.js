
const express = require('express');
const app = express();
const port = 8080;

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
//app.listen(port, () => console.log(`listening on port ${port}!`))

let mysql = require('mysql');

let connection = mysql.createConnection({
  host: '192.168.23.104',
  user: 'kaloyan',
  password: 'skam123',
  database: 'HackTues'
})

connection.connect(function(err) {
  if (err)throw err;
  console.log("Connected!");
  
  var sql = "INSERT INTO users (ID, EmailAddress, PasswordSalt,PasswordHash) VALUES ('','','','')";
  connection.query(sql, function (err, result) {
    if (err)throw err ;
    console.log("1 record inserted");
    connection.on('error', function(err) {
      console.log("[mysql error]",err);
    });
  });
});
