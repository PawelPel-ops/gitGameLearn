import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class Term2 extends Component {
    showMsg = () => 'Hello World';
    showMsg1 = () => 'On branch master.\nNothing to commit.';
    showMsg2 = () => 'Fatal: unable to access.'

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
                    color='#79a9a9'
                    backgroundColor='#1e1e1e'
                    barColor='#1e1e1e'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'open-google': () => window.open('https://www.google.com/', '_blank'),
                        showmsg: this.showMsg,
                        popup: () => alert('Terminal in React'),
                        'git_status': this.showMsg1,
                        'git_push': this.showMsg2
                    }}
                    descriptions={{
                        'open-google': 'opens google.com',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert',
                        'git_status': 'command git status',
                        'git_push': 'command git push'
                    }}

                />
            </div>
        );
    }
}

export default Term2;