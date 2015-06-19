'use strict';
var React = require('react'), ToDoListItem, ToDoListRemoveItem;

ToDoListRemoveItem = require('./ToDoListRemoveItem');

ToDoListItem = React.createClass(
  {
    render: function render() {
      return (
        <li>
          {this.props.item}
					<ToDoListRemoveItem index={this.props.index} />
        </li>
      );
    }
  }
);

module.exports = ToDoListItem;
