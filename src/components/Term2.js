import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class Term2 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            currentTask: this.props.task,
            terminalVisible: false
        }
    }

    static getDerivedStateFromProps (nextProps){
        return {
            currentTask: nextProps,
        }

    }

    render() {

        return (
            <div
                style={{
                    width: "40vw"
                }}
            >
                <button onClick={()=> this.setState({terminalVisible: true})}>Pokaz terminal</button>
                {this.state.terminalVisible? <Terminal
                    color='#79a9a9'
                    backgroundColor='#1e1e1e'
                    barColor='#1e1e1e'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={this.state.currentTask.task.commands}
                    descriptions={{
                        'git': 'command git status',
                    }}
                />:"Kliknij w guzik"}
            </div>
        );
    }
}

export default Term2;