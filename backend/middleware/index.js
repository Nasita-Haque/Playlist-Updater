const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const expressMiddleware = (app) => {
	app.use(bodyparser.urlencoded({ extended: false }));
	app.use(bodyparser.json());
	app.use(express.static(path.join(__dirname, '../../frontend/public')));
}

module.exports = expressMiddleware;

