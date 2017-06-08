
'use strict';

const express = require('express');
//Hey Alex
// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.get('/api', function (req, res) {
  res.send('{"api":"apidata"}');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
