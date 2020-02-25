import React, {useState} from 'react';


const Terminal = ({message}) => {
    // const [command, setCommand] = useState(">");
    // const [history, addToHistory] = useState([]);
    // const [firstTask, setFirstTask] = useState(false);
    // let replay = "";
    //
    // const handleKeyPress = (event) => {
    //     if(event.key === 'Enter') {
    //         event.preventDefault();
    //
    //
    //
    //         if (command === message[0]) {
    //            replay = '>Correct first task';
    //            setFirstTask(true);
    //         } else {
    //            replay = '>Uncorrect';
    //         }
    //
    //
    //         if (command === message[1] && firstTask === true) {
    //             replay = '>Correct second task';
    //         } else {
    //             replay = '>Uncorrect';
    //         }
    //         addToHistory(prevState => [...prevState, command, replay]);
    //
    //     }
    //
    //
    // };
    //
    // const handleValue = (e) => {
    //
    //     setCommand(e.target.value);
    //
    // };



    return (

        <div>

        </div>
        // <div>
        //     <form className="formTerminal">
        //         {history.map((e, i)=><p key={i}>{e}</p>)}
        //
        //         <input id="butt" className="inputTerminal" type="text" value={command} onChange={handleValue} onKeyDown={handleKeyPress}/>
        //     </form>
        // </div>
    );
};

export default Terminal;