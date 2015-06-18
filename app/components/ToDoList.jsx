'use strict';
var React = require('react'), ToDoList, ToDoListForm, ToDoListicle;

ToDoListForm = require('./ToDoListForm');
ToDoListicle = require('./ToDoListicle');

ToDoList = React.createClass(
  {
    getInitialState: function getInitialState() {
      return {
        list: []
      };
    },

    render: function render() {
      return (
        <div>
          <ToDoListForm />
          <ToDoListicle list={this.state.list}/>
        </div>
      );
    }
  }
);

module.exports = ToDoList;
