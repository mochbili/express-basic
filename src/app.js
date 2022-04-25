'use strict';

const express = require('express');
const app = express();
const port = 3000;
const posts = require('./mock/posts.json');

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/blog/:title?', (req, res) => {
  const title = req.params.title;

  if (title === undefined) {
    res.status(503);
    res.send('this page is under construction');
  } else {
    // if (title === posts[title]) {
      const post = posts[title] || {};
      res.render('post', {post: post});
    // } else {
    //   res.render('post', {error: 'error blog not found'});
    // }
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});