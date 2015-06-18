'use strict';
var React = require('react'), ToDoListInput;

ToDoListInput = React.createClass(
	{
		render: function render() {
			return (
				<input type="text" name="add-todo" placeholder="Add Item to To-Do" />
			);
		}
	}
);

module.exports = ToDoListInput;
