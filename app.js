const express = require('express');
const path = require('path');
const ejs = require('ejs');
var ejsLayout = require('express-ejs-layouts');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/theme', express.static(path.join(__dirname, 'theme')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(ejsLayout);

app.set('view engine', 'ejs');
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

app.get('/', (req, res) => {
	let params = {
		title: 'Trang chủ',
		hot: global.hot,
		top: global.top,
		news: global.news,
		cats: global.cats,
	};

	res.render('home', params);
});

app.listen(8081);

module.exports = app;