import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
    }
    removeTask() {
        this.props.onRemove(this.props.text);
    }
    render() {
        return (
            <div>
                <li>
                {this.props.text}
                    <button onClick={this.removeTask.bind(this)}>X</button>
                </li>

            </div>
        );
    }
}

export default Task;