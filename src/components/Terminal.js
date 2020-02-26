import React, {Component} from 'react';

class Terminal extends Component {
    state = {
        userInput: '',
        history: [],
        taskEnd: false,
        task2End: false,
        // message: [],
        currentTask: this.props.task
    };

    handleKeyPress = e => {
        if(e.keyCode === 13) {
            this.setState(
                {
                    history: [...this.state.history, this.state.userInput]
                },
                ()=> {
                    if (this.state.userInput === this.state.currentTask.commands[0]) {
                this.setState({
                    taskEnd: true,
                    history: [...this.state.history, 'On branch master. Nothing to commit.']
                })
                } else {
                        this.setState({
                            history: [...this.state.history, `${this.state.userInput} is not a git command.`]
                        })
                    }
                if (this.state.userInput === this.state.currentTask.commands[1] && this.state.taskEnd === true) {
                    this.setState({
                        task2End: true,
                        history: [...this.state.history, 'Add index.html to the Stage.']
                    })
                }

            }
        );
    }

};

    // static getDerivedStateFromProps (nextProps){
    //     return {
    //         currentTask: nextProps,
    //     }
    //
    // }

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
                    return <span key={i}>{e}<br /></span>
                })}

                {/*{this.state.message.map(e=>{*/}
                {/*    return <span>{e}<br /></span>*/}
                {/*})}*/}

                <input id="butt" className="inputTerminal" type="text" onChange={e=>this.setState({userInput: e.target.value})} onKeyDown={this.handleKeyPress}/>
            </div>
        </div>
    );
};
}
export default Terminal;