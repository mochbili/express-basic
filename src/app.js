'use strict';

const express = require('express')
const app = express()
const port = 3000
const posts = require('./mock/posts.json');

app.get('/', (req, response) => {
  response.send('<h1>Hello World!</h1>')
});

app.get('/blog', (req, response) => {
  response.send(posts);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});