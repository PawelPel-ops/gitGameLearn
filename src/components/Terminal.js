import React, {Component} from 'react';

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            history: [],
            taskEnd: false,
            task2End: false,
            currentTask: this.props.task,
            wrongCommand: 'Wrong command',
            terminalVisible: false
        };
    }


    handleKeyPress = e => {
        if(e.keyCode === 13) {
            this.props.animationChange();
            this.setState(
                {
                    history: [...this.state.history, this.state.userInput],
                    userInput: ''

                },
                ()=> {
                    if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.taskEnd === false) {
                this.setState({
                    history: [...this.state.history, this.state.currentTask.task.response[1]],
                    userInput: ''
                })
                } else {
                        this.setState({
                            history: [...this.state.history, this.state.wrongCommand],
                            userInput: ''
                        })
                    }
                if (this.state.userInput === this.state.currentTask.task.commands[1] && this.state.taskEnd === false) {
                    this.setState({
                        taskEnd: true,
                        history: [...this.state.history, this.state.currentTask.task.response[2]],
                        userInput: ''
                    })
                }
                if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.taskEnd === true) {
                    this.setState({
                        history: [...this.state.history, this.state.currentTask.task.response[0]],
                        userInput: ''
                    })
                }
                if (this.state.userInput === 'clear') {
                    console.log('ala ma kota');
                    this.setState({
                        history: [],
                        userInput: ''
                    })
                }
            }
        );
    }

};

    static getDerivedStateFromProps (nextProps){
        return {
            currentTask: nextProps,
        }

    }

    // handleReset=()=>{
    //     this.setState({
    //         history: [],
    //     })
    // };
render () {

    // if (this.state.task2End === true)  {
    //     return <button onClick={this.handleReset}>Zbierz punkty</button>
    // }
    return (
        <div>
            <h3>Terminal</h3>


                <div className="formTerminal">

                    {this.state.history.map((e,i)=>{
                        return <span key={i} className="terminalResponse">{e}<br /></span>
                    })}

                    <input id="butt" className="inputTerminal" type="text" value={this.state.userInput} onChange={e=>this.setState({userInput: e.target.value})} onKeyDown={this.handleKeyPress}/>
                </div>


        </div>
    );
};
}
export default Terminal;