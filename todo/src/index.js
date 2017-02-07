import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TaskList from './components/task_list';
import AddingInput from './components/input';

const titleHeader = <h1 className="app__title">Simple to-do list:</h1>;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {id: 0, name: 'Complete task'},
                {id: 1, name: 'Add task'},
                {id: 2, name: 'Delete task'}
            ],
            id: 3,
        };
    }

    addTodo (elem) {
        const todo = {id: this.state.id, name: elem};
        this.state.tasks.push(todo);
        this.state.id += 1;
        this.setState({tasks: this.state.tasks});
    }

    deleteMe (elem) {
        let index = this.state.tasks.indexOf(elem);
        console.log(index);
        this.state.tasks.splice(index, 1);
        this.setState({tasks: this.state.tasks});
    }

  render () {
    return (
        <div className="app">
        {titleHeader}
        <TaskList
            tasks={this.state.tasks}
            deleteMe={this.deleteMe.bind(this)} />
        <AddingInput addTodo={this.addTodo.bind(this)} />
        </div>
    );
  }
}

ReactDOM.render(
<App />,
    document.getElementById('root')
);

