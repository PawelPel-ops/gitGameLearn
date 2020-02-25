import React, {useState} from 'react';
// import Terminal from "./Terminal";
// import ReactTerm from "./ReactTerm";
import Description from "./Description";
import Term2 from "./Term2";


const GitGame = () => {

    const [currentTask, setCurrentTask] = useState(0);
    const [tasks, setTasks] = useState([{
        id: 1, name: 'lesson 1', des: 'Wykonaj zadanie 1'
    },
        {
            id: 2, name: 'lesson 2', des: 'Wykonaj zadanie 2'
        }]);

    const handleChangTask =(i)=> {
        setCurrentTask(i)
    };

    return (
        <div className="gitgame">

            {/*<Terminal message={['>git add .', '>git commit -m']}/>*/}
            <Description task={tasks[currentTask]}/>
            {/*<ReactTerm />*/}
            <Term2 />
            {tasks.map((e,i)=><a href='#' id={e.id} onClick={()=>handleChangTask(i)}>{e.name}</a>)}
        </div>
    );
};

export default GitGame;