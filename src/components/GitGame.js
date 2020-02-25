import React, {useState} from 'react';
// import Terminal from "./Terminal";
import ReactTerm from "./ReactTerm";
import Description from "./Description";

const GitGame = () => {
    const [description, setDescription] = useState([{
        id: 1, name: 'lesson 1', des: 'Wykonaj zadanie 1'
    },
        {
            id: 2, name: 'lesson 2', description: 'Wykonaj zadanie 2'
        }]);
    return (
        <div>
            {/*<Terminal message={['>git add .', '>git commit -m']}/>*/}
            <Description description={description}/>
            <ReactTerm />
            {description.map(e=><a href='#' id={e.id}>{e.name}</a>)}
        </div>
    );
};

export default GitGame;