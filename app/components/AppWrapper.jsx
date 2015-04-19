'use strict';
var React, RouteHandler, AppWrapper;

React = require('react');
RouteHandler = require('react-router').RouteHandler;

AppWrapper = React.createClass(
	{
		render: function render() {
			return (
				<RouteHandler />
			);
		}
	}
);

module.exports = AppWrapper;
