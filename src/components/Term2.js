import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class Term2 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            currentTask: this.props.task
        }
    }

    static getDerivedStateFromProps (nextProps){
        return {
            currentTask: nextProps,
        }

    }

    render() {
        console.log(this.state.currentTask.task.commands);
        return (
            <div
                style={{
                    width: "40vw"
                }}
            >
                <Terminal
                    color='#79a9a9'
                    backgroundColor='#1e1e1e'
                    barColor='#1e1e1e'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={this.state.currentTask.task.commands}
                    descriptions={{
                        'git': 'command git status',
                    }}
                />
            </div>
        );
    }
}

export default Term2;