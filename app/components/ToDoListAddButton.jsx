'use strict';
var React = require('react'), ToDoListAddButton;

ToDoListAddButton = React.createClass(
	{
		render: function render() {
			return (
				<button onClick={this.props.onClick}>+</button>
			);
		}
	}
);

module.exports = ToDoListAddButton;
