'use strict';

const express = require('express');
const app = express();
const port = 3000;
const posts = require('./mock/posts.json');

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/blog/:title', (req, res) => {
  const title = req.params.title;
  const post = posts[title];
  res.send(post);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});