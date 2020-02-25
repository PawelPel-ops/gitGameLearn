import React, {useState} from 'react';

const Terminal = ({message}) => {
    const [command, setCommand] = useState(">");
    const [history, addToHistory] = useState([]);
    let replay = "";

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();



            if (command === message) {
               replay = '>Correct';
            } else {
               replay = '>Uncorrect';
            }

            addToHistory(prevState => [...prevState, command, replay]);

        }


    };

    const handleValue = (e) => {

        setCommand(e.target.value);

    };


    return (

        <div>
            <form className="formTerminal">
                {history.map((e, i)=><p key={i}>{e}</p>)}

                <input id="butt" className="inputTerminal" type="text" value={command} onChange={handleValue} onKeyDown={handleKeyPress}/>
            </form>
        </div>
    );
};

export default Terminal;