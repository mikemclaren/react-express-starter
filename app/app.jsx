'use strict';

var React = require('react'),
		Router = require('react-router'),
		routes = require('./routes');

// Requires all the SCSS.
require('./sass/main.scss');

Router.run(
	routes,
	Router.HistoryLocation,
	function routerHandler(Handler, state) {
		React.render(
			<Handler routerState={state} environment="browser" />,
			document.getElementById('content')
		);
	}
);
