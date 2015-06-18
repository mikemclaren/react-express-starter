'use strict';
var React = require('react'), ToDoListForm, ToDoListInput, ToDoListAddButton;

ToDoListInput = require('./ToDoListInput');
ToDoListAddButton = require('./ToDoListAddButton');

ToDoListForm = React.createClass(
  {
    // This function will trigger the add-item event, which will hopefully be
    // caught by our ToDoList component.
    addItem: function addItem(d) {
      d.preventDefault();

      var e = new CustomEvent('add_event', {
        detail: this.refs['add-todo'].getDOMNode().value.trim()
      });

      window.dispatchEvent(e);

      this.refs['add-todo'].getDOMNode().value = '';
    },

    render: function render() {
      return (
        <form>
          <ToDoListInput ref="add-todo" />
          <ToDoListAddButton onClick={this.addItem}/>
        </form>
      );
    }
  }
);

module.exports = ToDoListForm;
