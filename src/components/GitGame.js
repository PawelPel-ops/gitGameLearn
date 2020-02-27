import React, {Component} from 'react';
import Description from "./Description";
import Animation from "./Animation";
import Terminal from "./Terminal";

const gameSettings = [
    {
        id: 1,
        name: 'Zadanie 1',
        des: 'Stwórz swoje pierwsze repozytorium. Służy do tego komenda git init.\nNastępnie korzystając z komendy edytora Nano stwórz plik index.html.\nSprawdź status swojego repozytorium',
        commands:['git init', 'nano index.html', 'git status'],
        response: ['Odp na git init.', 'Juz użyłeś git init. Drugie repozytorium nie jest nam potrzebne.', 'Odp na nano', 'Już stworzyłeś plik index.html. Jeden wystarczy.', 'On branch master. Untracked files: index.html.', 'On branch master'],
        taskEnd: false,
        task2End: false,
        task3End: false
    },
    {
        id: 2,
        name: 'Zadanie 2',
        des: 'Masz już repozytorium z pierwszym plikiem. Dodaj pliki style.css i app.js.\nSprawdź status swojego repozytorium.\nDodaj plik index.html do Stage wykorzystując komende git add.',
        commands:['nano style.css', 'nano app.js', 'git status', 'git add index.html'],
        response: ['Stworzenie style.css', 'Jeden plik style.css wystarczy.', 'stworzenie app.js', 'Jeden plik app.js wystarczy.', 'On branch master. Untracked files: index.html. style.css app.js', 'On branch master. Untracked files: index.html. style.css', 'Added index.html', 'juz dodales index.html', 'On branch master. Untracked files: style.css app.js'],
        taskEnd: false,
        task2End: false,
        task3End: false

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
            animationHead: false,
            animationIndexUntracked: false,
            animationCSSUntracked: false,
            animationJSUntracked: false,
            animationIndexStage: false,
            animationCSSStage: false,
            animationJSStage: false,
            animationIndexLocal: false,
            animationCSSLocal: false,
            animationJSLocal: false,
            animationIndexOrigin: false,
            animationCSSOrigin: false,
            animationJSOrigin: false
        };
    }


    handleChangTask =(i)=> {
        this.setState({
            currentTask: (i)
        });
    };
    handleAnimation =(file,where)=>{
        this.setState(
            {[`animation${file}${where}`]: !this.state[`animation${file}${where}`]}
        );
    };


    handleChangeTask=()=> {
        let tempTasks = [...this.state.tasks];
        tempTasks[this.state.currentTask].taskEnd = true;
        this.setState({
            tasks:tempTasks
        })
    };
    handleChangeTask2=()=> {
        let tempTasks = [...this.state.tasks];
        tempTasks[this.state.currentTask].task2End = true;
        this.setState({
            tasks:tempTasks
        })
    };
    handleChangeTask3=()=> {
        let tempTasks = [...this.state.tasks];
        tempTasks[this.state.currentTask].task3End = true;
        this.setState({
            tasks:tempTasks
        })
    };


    render() {
console.log({...this.state.tasks[this.state.currentTask]}.taskEnd);
        return (
            <>

                <div className="gitgame">
                    <Animation
                        animationIndexUntracked={this.state.animationIndexUntracked}
                        animationCSSUntracked={this.state.animationCSSUntracked}
                        animationJSUntracked={this.state.animationJSUntracked}
                        animationIndexStage={this.state.animationIndexStage}
                        animationCSSStage={this.state.animationCSSStage}
                        animationJSStage={this.state.animationJSStage}
                        animationIndexLocal={this.state.animationIndexLocal}
                        animationCSSLocal={this.state.animationCSSLocal}
                        animationJSLocal={this.state.animationJSLocal}
                        animationIndexOrigin={this.state.animationIndexOrigin}
                        animationCSSOrigin={this.state.animationCSSOrigin}
                        animationJSOrigin={this.state.animationJSOrigin}
                        animationHead={this.state.animationHead}
                    />
                    <Description task={{...this.state.tasks[this.state.currentTask]}} />
                    <Terminal task={{...this.state.tasks[this.state.currentTask]}}
                              animationChange={this.handleAnimation}
                              taskChange={this.handleChangeTask}
                              task2Change={this.handleChangeTask2}
                              task3Change={this.handleChangeTask3}
                    />
                    <div>
                        {this.state.tasks.map((e, i) => <a href='#' key={e.id} onClick={() => this.handleChangTask(i)}><h3>{e.name}</h3></a>)}
                    </div>
                </div>
            </>
        );
    }
}

export default GitGame;