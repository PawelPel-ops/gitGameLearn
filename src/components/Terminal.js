import React, {Component} from 'react';

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            history: [],
            taskEnd: false,
            task2End: false,
            task3End: false,
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
                // this.props.animationChange("CSS","Untracked");
                // this.props.animationChange("CSS","Stage");
                // this.props.animationChange("CSS","Local");
                // this.props.animationChange("CSS","Origin");

                ()=> {
                    //sprawdzanie czy pierwsza komenda jest poprawnie wpisana
                           if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.taskEnd === false) {
                               this.setState({
                                   taskEnd: true,
                                   history: [...this.state.history, this.state.currentTask.task.response[0]],
                                   userInput: ''
                               });
                               // sprawdzanie czy jest odpowiednie id tasku i pojawia sie animacja
                               if (this.state.currentTask.task.id === 1) {
                                   this.props.animationChange("","Head");
                               }
                               if (this.state.currentTask.task.id === 2) {
                                   this.props.animationChange("CSS","Untracked");
                               }
                           } else {
                               //reagowanie na bledna komende
                                this.setState({
                                    history: [...this.state.history, this.state.wrongCommand],
                                    userInput: ''
                                })
                            }
                            //sprawdzanie czy pierwsza komenda zostala wpisana drugi raz
                            if (this.state.userInput === this.state.currentTask.task.commands[0] && this.state.taskEnd === true) {
                                this.setState({
                                    history: [...this.state.history, this.state.currentTask.task.response[1]],
                                    userInput: ''
                                })
                            }
                            //sprawdzanie czy druga komenda jest poprawnie wpisana
                            if (this.state.userInput === this.state.currentTask.task.commands[1] && this.state.taskEnd === true && this.state.task2End === false) {
                                this.setState({
                                    task2End: true,
                                    history: [...this.state.history, this.state.currentTask.task.response[2]],
                                    userInput: ''
                                });
                                // sprawdzanie czy jest odpowiednie id tasku i pojawia sie animacja
                                if (this.state.currentTask.task.id === 1) {
                                    this.props.animationChange("Index","Untracked");
                                }
                                if (this.state.currentTask.task.id === 2) {
                                    this.props.animationChange("JS","Untracked");
                                }
                            }
                            //sprawdzanie czy druga komenda jest wpisana drugi raz
                            if (this.state.userInput === this.state.currentTask.task.commands[1] && this.state.task2End === true) {
                                this.setState({
                                    history: [...this.state.history, this.state.currentTask.task.response[3]],
                                    userInput: ''
                            })
                            }
                            //sprawdzanie czy trzecia komenda(git status) jest poprawnie wpisana i na koncu zadania
                            if (this.state.userInput === this.state.currentTask.task.commands[2] && this.state.taskEnd === true && this.state.task2End === true) {
                                this.setState({
                                history: [...this.state.history, this.state.currentTask.task.response[4]],
                                userInput: ''
                            });
                            }
                            //sprawdzanie czy trzecia komenda (git status) jest wpisana po wykonaniu pierwszego etapu, a przed drugim
                            if (this.state.userInput === this.state.currentTask.task.commands[2] && this.state.taskEnd === true && this.state.task2End === false) {
                                this.setState({
                                history: [...this.state.history, this.state.currentTask.task.response[5]],
                                userInput: ''
                             });
                            }
                            //sprawdzanie czy czwarta komenda jest wpisana poprawnie
                            if (this.state.userInput === this.state.currentTask.task.commands[3] && this.state.taskEnd === true && this.state.task2End === true) {
                                this.setState({
                                    task3End: true,
                                    history: [...this.state.history, this.state.currentTask.task.response[6]],
                                    userInput: ''
                            });
                                if (this.state.currentTask.task.id === 2) {
                                    this.props.animationChange("Index","Untracked");
                                    this.props.animationChange("Index","Stage");
                                }
                            }
                            //sprawdzanie czy czwarta komenda jest wpisana drugi raz
                            if (this.state.userInput === this.state.currentTask.task.commands[3] && this.state.taskEnd === true && this.state.task2End === true && this.state.task3End === true) {
                                this.setState({
                                    history: [...this.state.history, this.state.currentTask.task.response[7]],
                                    userInput: ''
                            });
                            }
                            //sprawdzanie czy czwarta komenda jest wpisana poprawnie
                            if (this.state.userInput === this.state.currentTask.task.commands[3] && this.state.taskEnd === true && this.state.task2End === true && this.state.task3End === true ) {
                                this.setState({
                                history: [...this.state.history, this.state.currentTask.task.response[8]],
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
        <div>
            <h3>Terminal</h3>


                <div className="formTerminal">

                    {this.state.history.map((e,i)=>{
                        return <span key={i} className="terminalResponse">${e}<br /></span>
                    })}

                    <input id="butt" className="inputTerminal" type="text" value={this.state.userInput} onChange={e=>this.setState({userInput: e.target.value})} onKeyDown={this.handleKeyPress}/>
                </div>


        </div>
    );
};
}
export default Terminal;