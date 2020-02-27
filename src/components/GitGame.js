import React, {Component} from 'react';
import Description from "./Description";
import Animation from "./Animation";
import Terminal from "./Terminal";

const gameSettings = [
    {
        id: 1,
        name: 'Zadanie 1',
        des: 'Stwórz swoje repozytorium.\n Sprawdź status.',
        commands:['git status', 'git add index.html'],
        response: ['On branch master. Nothing to commit.', 'On branch master. Untracked files: index.html', 'Add index.html to the Stage.'],
    },
    {
        id: 2,
        name: 'Zadanie 2',
        des: 'Dodaj plik index.html.\nDodaj plik style.css.\nDodaj plik app.js.',
        commands:['git status', 'git add index.html'],
        response: ['Task2', 'Task2', 'Task2']

    }
    // {
    //     id: 3,
    //     name: 'Zadanie 3',
    //     des: 'Zrób commita (bez komentarza xD).\nDodaj pliki do zdalnego repozytorium.',
    //     commands:{
    //         'git-commit': () => 'Record changes to the repository',
    //         'git-push': () => 'Update remote refs along with associated objects.',
    //     }
    // }
];

class GitGame extends Component {
    constructor(props) {
        super(props);
        this.state= {
            currentTask: 0,
            tasks: gameSettings,
            animation: false,
            animationCSS: false,
            animationJS: false
        };
    }


    handleChangTask =(i)=> {
        this.setState({
            currentTask: (i)
        });
    };
    handleAnimationIndex =()=>{
        this.setState(
            {animation: true}
        );
    };
    // handleAnimationCSS =()=>{
    //     this.setState(
    //         {animationCSS: true}
    //     );
    // };
    // handleAnimationJS =()=>{
    //     this.setState(
    //         {animationJS: true}
    //     );
    // };

    render() {

        return (
            <>

                <div className="gitgame">
                    <Animation animation={this.state.animation}/>
                    <Description task={{...this.state.tasks[this.state.currentTask]}} />
                    <Terminal task={{...this.state.tasks[this.state.currentTask]}} animationIndexChange={this.handleAnimationIndex}/>
                    <div>
                        {this.state.tasks.map((e, i) => <a href='#' key={e.id} onClick={() => this.handleChangTask(i)}><h3>{e.name}</h3></a>)}
                    </div>
                </div>
            </>
        );
    }
}

export default GitGame;