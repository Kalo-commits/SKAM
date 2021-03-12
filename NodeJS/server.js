const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('C:\HackTues'));

app.use('/public', express.static('C:\HackTues'));

app.listen(port, () => console.log(`listening on port ${port}!`));