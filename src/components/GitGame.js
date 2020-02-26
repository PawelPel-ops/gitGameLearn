import React, {Component} from 'react';
import Description from "./Description";
import Term2 from "./Term2";
import Animation from "./Animation";

const gameSettings = [
    {
        id: 1,
        name: 'Zadanie 1',
        des: 'Stwórz swoje repozytorium.\n Sprawdź status.',
        commands:{
            'git-status': () => 'On branch master.\nNothing to commit.',
            'git-init': () => 'Create an empty Git repository or reinitialize an existing one.'
        }
    },
    {
        id: 2,
        name: 'Zadanie 2',
        des: 'Dodaj plik index.html.\nDodaj plik style.css.\nDodaj plik app.js.',
        commands:{
            'git-add_index.html': () => 'Add index.html to the index.',
            'git-add_style.css': () => 'Add style.css to the index.',
            'git-add_app.js': () => 'Add app.js to the index.',
        }
    },
    {
        id: 3,
        name: 'Zadanie 3',
        des: 'Zrób commita (bez komentarza xD).\nDodaj pliki do zdalnego repozytorium.',
        commands:{
            'git-commit': () => 'Record changes to the repository',
            'git-push': () => 'Update remote refs along with associated objects.',
        }
    }
];

class GitGame extends Component {
    constructor(props) {
        super(props);
        this.state= {
            currentTask: 0,
            tasks: gameSettings
        };
    }


    handleChangTask =(i)=> {
        this.setState({
            currentTask: (i)
        });
    };


    render() {
        console.log(this.state.currentTask);
        return (
            <>
                <Animation />
                <div className="gitgame">
                    <Description task={{...this.state.tasks[this.state.currentTask]}}/>
                    <Term2 task={{...this.state.tasks[this.state.currentTask]}}/>
                    {this.state.tasks.map((e, i) => <a href='#' key={e.id} onClick={() => this.handleChangTask(i)}>{e.name}</a>)}
            </div>
            </>
        );
    }
}

export default GitGame;