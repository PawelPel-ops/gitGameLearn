import React, { Component } from 'react';
import ReactTerminal from 'react-terminal-component';
// import { ReactThemes } from 'react-terminal-component';
// import { ReactOutputRenderers } from 'react-terminal-component';

class ReactTerm extends Component {
    render() {
        return (
            <div>
                <ReactTerminal theme={{
                    background: '#141313',
                    promptSymbolColor: '#6effe6',
                    commandColor: '#fcfcfc',
                    outputColor: '#fcfcfc',
                    errorOutputColor: '#ff89bd',
                    fontSize: '1.1rem',
                    spacing: '1%',
                    fontFamily: 'monospace',
                    minWidth: '500px',
                    height: '50vh'
                }}/>
            </div>
        );
    }
}

export default ReactTerm;