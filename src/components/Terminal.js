import React, {Component} from 'react';


class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            history: [],
            currentTask: this.props.task,
            wrongCommand: 'Błędna lub niewłaściwa komenda.',

        };
    }


    handleKeyPress = e => {
        if(e.keyCode === 13) {
            this.setState(
                {
                    history: [...this.state.history, this.state.userInput]
                },
                ()=> {
                    //GIT STATUS sprawdzanie git status przy niewykonanych zadaniach
                    if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.currentTask.task.taskEnd === false && this.state.currentTask.task.task2End === false && this.state.currentTask.task.task3End === false) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[0][0]],
                            userInput: ''
                        });
                    } else {
                        //reagowanie na bledna komende
                        this.setState({
                            history: [...this.state.history, this.state.wrongCommand],
                            userInput: ''
                        })
                    }
                    //GIT STATUS sprawdzanie git status przy pierwszym wykonanym zadaniu
                    if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.currentTask.task.taskEnd === true && this.state.currentTask.task.task2End === false && this.state.currentTask.task.task3End === false) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[0][1]],
                            userInput: ''
                        });
                    }
                    //GIT STATUS sprawdzanie git status przy dwoch pierwszych wykonanych zadaniach
                    if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.currentTask.task.taskEnd === true && this.state.currentTask.task.task2End === true && this.state.currentTask.task.task3End === false) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[0][2]],
                            userInput: ''
                        });
                    }
                    //GIT STATUS sprawdzanie git status przy wszystkich wykonanych zadaniach
                    if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.currentTask.task.taskEnd === true && this.state.currentTask.task.task2End === true && this.state.currentTask.task.task3End === true) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[0][3]],
                            userInput: ''
                        });
                    }
                    //PIERWSZE ZaDANIE
                    if (this.state.userInput === this.state.currentTask.task.commands[1] && this.state.currentTask.task.taskEnd === false) {
                        this.props.taskChange();
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[1][0]],
                            userInput: ''
                        });
                        // sprawdzanie czy jest odpowiednie id tasku i pojawia sie animacja
                        if (this.state.currentTask.task.id === 1) {
                            this.props.animationChange("","Head");
                        }
                        if (this.state.currentTask.task.id === 2) {
                            this.props.animationChange("CSS","Untracked");
                        }
                        if (this.state.currentTask.task.id === 3) {
                            this.props.animationChange("CSS","Untracked");
                            this.props.animationChange("JS","Untracked");
                            this.props.animationChange("CSS","Stage");
                            this.props.animationChange("JS","Stage");
                        }
                        if (this.state.currentTask.task.id === 4) {
                            this.props.animationChange("Index","Local");
                            this.props.animationChange("Index","Untracked");
                        }
                        if (this.state.currentTask.task.id === 5) {
                            this.props.animationChange("Index","Origin");
                            this.props.animationChange("CSS","Origin");
                            this.props.animationChange("JS","Origin");
                        }
                    }

                    //sprawdzanie czy pierwsza komenda zostala wpisana drugi raz
                    if (this.state.userInput === this.state.currentTask.task.commands[1] && this.state.currentTask.task.taskEnd === true) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[1][1]],
                            userInput: ''
                        })
                    }
                    //DRUGIE ZDANIE
                    if (this.state.userInput === this.state.currentTask.task.commands[2] && this.state.currentTask.task.taskEnd === true && this.state.currentTask.task.task2End === false) {
                        this.props.task2Change();
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[2][0]],
                            userInput: ''
                        });
                        // sprawdzanie czy jest odpowiednie id tasku i pojawia sie animacja
                        if (this.state.currentTask.task.id === 1) {
                            this.props.animationChange("Index","Untracked");
                        }
                        if (this.state.currentTask.task.id === 2) {
                            this.props.animationChange("JS","Untracked");
                        }
                        if (this.state.currentTask.task.id === 3) {
                            this.props.animationChange("Index","Stage");
                            this.props.animationChange("CSS","Stage");
                            this.props.animationChange("JS","Stage");
                            this.props.animationChange("Index","Local");
                            this.props.animationChange("CSS","Local");
                            this.props.animationChange("JS","Local");
                        }
                        if (this.state.currentTask.task.id === 4) {
                            this.props.animationChange("Index","Stage");
                            this.props.animationChange("Index","Untracked");
                        }
                    }
                    //sprawdzanie czy druga komenda jest wpisana drugi raz
                    if (this.state.userInput === this.state.currentTask.task.commands[2] && this.state.currentTask.task.task2End === true) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[2][1]],
                            userInput: ''
                        })
                    }
                    //TRZECIE ZDANIE
                    if (this.state.userInput === this.state.currentTask.task.commands[3] && this.state.currentTask.task.taskEnd === true && this.state.currentTask.task.task2End === true && this.state.currentTask.task.task3End === false) {
                        this.props.task3Change();
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[3][0]],
                            userInput: ''
                        });
                        //animacja dla zadania 3
                        if (this.state.currentTask.task.id === 2) {
                            this.props.animationChange("Index","Untracked");
                            this.props.animationChange("Index","Stage");
                        }
                        if (this.state.currentTask.task.id === 4) {
                            this.props.animationChange("Index","Stage");
                            this.props.animationChange("Index","Local");
                        }
                    }
                    //sprawdzanie czy trzecia komenda jest wpisana drugi raz
                    if (this.state.userInput === this.state.currentTask.task.commands[3] && this.state.currentTask.task.taskEnd === true && this.state.currentTask.task.task2End === true && this.state.currentTask.task.task3End === true) {
                        this.setState({
                            history: [...this.state.history, this.state.currentTask.task.response[3][1]],
                            userInput: ''
                        });
                    }
                    //czyszczenie terminala
                    if (this.state.userInput === 'clear') {
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


render () {


    return (
        <div className="boxTerminal">
            <h3>Terminal</h3>


                <div className="formTerminal">

                    {this.state.history.map((e,i)=>{
                        return <span key={i} className="terminalResponse">${e}<br /></span>
                    })}

                    <input id="butt" className="inputTerminal" type="text" maxLength="80" value={this.state.userInput} onChange={e=>this.setState({userInput: e.target.value})} onKeyDown={this.handleKeyPress}/>

                </div>

        </div>
    );
};
}
export default Terminal;