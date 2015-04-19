'use strict';

module.exports = function htmlLoader(req, res) {
	if(req.initialData === undefined) {
		req.initialData = {};
	}

	res.write('<!DOCTYPE html>');
	res.write('<html>');
	res.write('<head>');
	res.write('<title>React Starter - Example</title>');
	res.write('<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">');
	res.write('<meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0">');
	res.write('<link rel="stylesheet" href="/public/styles.css" type="text/css" />');
	res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>');
	res.write('</head>');
	res.write('<body>');

	res.write('<div id="initial-data" style="display: none;">' + JSON.stringify(req.initialData) + '</div>');

	res.write('<div id="content"></div>');

	if(process.env.NODE_ENV === 'production') {
		res.write('<script src="/public/bundle.js" defer></script>');
	} else {
		res.write('<script src="http://127.0.0.1:8000/public/bundle.js" defer></script>');
	}

	res.write('</body></html>');
	res.end();
};
