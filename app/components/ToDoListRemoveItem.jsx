'use strict';
var React = require('react'), ToDoListRemoveItem;

ToDoListRemoveItem = React.createClass({
	displayName: 'ToDoListRemoveItem',

	removeItem: function removeItem(d) {
		d.preventDefault();
		var e = new CustomEvent('remove_item', {
			detail: this.props.index
		});

		window.dispatchEvent(e);
	},

	render: function render() {
		return (
			<button onClick={this.removeItem}>Finish</button>
		);
	}
});

module.exports = ToDoListRemoveItem;
