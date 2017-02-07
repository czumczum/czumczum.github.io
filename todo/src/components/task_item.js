import React from 'react';

const TaskItem = React.createClass({
  onCompleted: function(e) {
    e.target.className += " ordered-list__item--completed"
  },
  render: function() {

    return (
        <li><span className="ordered-list__item" onClick={this.onCompleted}>{this.props.task.name}</span>
            <span onClick={() => this.props.deleteMe(this.props.task)}
                  className='btn btn--delete'>Delete</span>
        </li>
    );
  }
});


export default TaskItem;
