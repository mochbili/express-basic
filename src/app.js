'use strict';

const express = require('express');
const app = express();
const port = 3000;
const posts = require('./mock/posts.json');
const postList = Object.keys(posts).map((value) => {
	return posts[value];
});

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	const path = req.path;
	// res.locals.path = path;
	res.render('index', {path: path});
});

app.get('/blog/:title?', (req, res) => {
	const title = req.params.title;

	if (title === undefined) {
		res.render('blog', {posts: postList});
	} else {
		const post = posts[title] || {};
		res.render('post', {post: post});
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});