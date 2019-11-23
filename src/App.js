import React from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  removeTask(task) {
    this.setState({
      tasks: this.state.tasks.filter(t => t !== task)
    })
  }

  render() {
    return (
        <div className="App">
          <AddTaskForm onAdd={this.addTask.bind(this)}/>
          <ul>
            {this.state.tasks.map((task,i) => {
              return <Task key={i}
                           text={task}
                           onRemove={this.removeTask.bind(this)}/>;
            })}
          </ul>
        </div>
    );
  }
}
export default App;
