'use strict';
var React = require('react'), ToDoListItem, ToDoListRemoveItem;

ToDoListRemoveItem = require('./ToDoListRemoveItem');

ToDoListItem = React.createClass(
  {
    render: function render() {
      return (
        <div>
          {this.props.item}
					<ToDoListRemoveItem index={this.props.index} />
        </div>
      );
    }
  }
);

module.exports = ToDoListItem;
