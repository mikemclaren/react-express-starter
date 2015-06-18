var React = require('react'),
		Route = require('react-router').Route,
		AppWrapper = require('./components/AppWrapper'),
		ToDoList = require('./components/ToDoList');

module.exports = (
	<Route handler={AppWrapper}>
		<Route name="/" path="/" handler={ToDoList} />
	</Route>
);
