import React, {Component} from 'react';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }

    add(e){
        e.preventDefault();
        if(this.taskInput.current.value === ''){

        }else {
            this.props.onAdd(this.taskInput.current.value);
            e.target.reset();
        }
    }
    render() {
        return (
            <form onSubmit={this.add.bind(this)} className="form">
                <input placeholder="Task name..." ref={this.taskInput}/>
                <button>Add</button>
            </form>
        );
    }
}

export default AddTaskForm;


