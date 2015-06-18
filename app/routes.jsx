var React = require('react'),
		Route = require('react-router').Route,
		AppWrapper = require('./components/AppWrapper'),
		ToDoList = require('./components/ToDoList');

module.exports = (
	<Route handler={AppWrapper}>
		<Route path="/" component={ToDoList} />
	</Route>
);
