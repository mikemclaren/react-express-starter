'use strict';
var React = require('react'), ToDoListicle, ToDoListItem;

ToDoListItem = require('./ToDoListItem');

ToDoListicle = React.createClass(
  {
    render: function render() {
      var rows = [];

      this.props.list.forEach(function forEachListItem(item, index) {
        rows.push(<ToDoListItem item={item} index={index} />);
      });

      return (
        <ul>
          {rows}
        </ul>
      );
    }
  }
);

module.exports = ToDoListicle;
