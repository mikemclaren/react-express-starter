'use strict';
var React = require('react'), ToDoList, ToDoListForm, ToDoListicle, request;

ToDoListForm = require('./ToDoListForm');
ToDoListicle = require('./ToDoListicle');
request = require('superagent');

ToDoList = React.createClass(
  {
    getInitialState: function getInitialState() {
      return {
        list: []
      };
    },

    addItem: function addItem(data) {
      var list = this.state.list,
          self = this;
      request
        .post('/item')
        .send({ item: data.detail })
        .end(function response(err, res) {
          if(res.ok) {
            list.push(data.detail);
            self.setState({ list: list });
          }
        });
    },

    removeItem: function removeItem(data) {
      var list = this.state.list,
          self = this;
      request
        .del('/item' + data.detail)
        .end(function response(err, res) {
          if(res.ok) {
            list.splice(data.detail, 1);
            self.setState({ list: list });
          }
        });
    },

    componentDidMount: function componentDidMount() {
      var list = document.getElementById('initial-data').innerHTML;
      list = JSON.parse(list);

      window.addEventListener('add_event', this.addItem);
      window.addEventListener('remove_item', this.removeItem);
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
