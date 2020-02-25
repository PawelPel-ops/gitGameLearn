import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class Term2 extends Component {
    showMsg = () => 'Hello World';
    showMsg1 = () => 'git status command';

    render() {
        return (
            <div
                style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // height: "20vh",
                    width: "40vw"
                }}
            >
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'open-google': () => window.open('https://www.google.com/', '_blank'),
                        showmsg: this.showMsg,
                        popup: () => alert('Terminal in React'),
                        'git_status': this.showMsg1,
                    }}
                    descriptions={{
                        'open-google': 'opens google.com',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert',
                        'git_status': 'command git status'
                    }}
                    msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
                />
            </div>
        );
    }
}

export default Term2;