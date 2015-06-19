'use strict';
var React = require('react'), ToDoList, ToDoListForm, ToDoListicle, request;

ToDoListForm = require('./ToDoListForm');
ToDoListicle = require('./ToDoListicle');
request = require('superagent');

ToDoList = React.createClass(
  {
    getInitialState: function getInitialState() {
      var list = document.getElementById('initial-data').innerHTML;
      list = JSON.parse(list);

      return {
        list: list
      };
    },

    addItem: function addItem(data) {
      var list = this.state.list,
          _this = this;

      request
        .post('/item')
        .type('form')
        .send({ item: data.detail })
        .end(function response(err, res) {
          if(res.ok) {
            list.push(data.detail);
            _this.setState({ list: list });
          }
        });
    },

    removeItem: function removeItem(data) {
      var list = this.state.list,
          _this = this;

      request
        .del('/item/' + data.detail)
        .end(function response(err, res) {
          if(res.ok) {
            list.splice(data.detail, 1);
            _this.setState({ list: list });
          }
        });
    },

    componentDidMount: function componentDidMount() {
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
