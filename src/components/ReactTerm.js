// import React, { Component } from 'react';
// import ReactTerminalStateless from 'react-terminal-component';
// import {EmulatorState} from 'javascript-terminal';
// // import {ReactTerminalStateless} from 'react-terminal-component';
//
//
//
// class ReactTerm extends Component  {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             emulatorState: EmulatorState.createEmpty({
//                 'commandMapping': customCommandMapping
//             }),
//             inputStr: 'git status'
//         };
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <ReactTerminalStateless theme={{
//                     background: '#141313',
//                     promptSymbolColor: '#bada55',
//                     commandColor: '#fcfcfc',
//                     outputColor: '#fcfcfc',
//                     errorOutputColor: '#bada55',
//                     fontSize: '1.1rem',
//                     spacing: '1%',
//                     fontFamily: 'monospace',
//                     minWidth: '500px',
//                     height: '50vh'
//                 }}
//                     emulatorState={this.state.emulatorState}
//                     inputStr={this.state.inputStr}
//                     onInputChange={(inputStr) => this.setState({inputStr})}
//                     onStateChange={(emulatorState) => this.setState({emulatorState})}/>
//
//
//             </div>
//         );
//     }
// }
//
// export default ReactTerm;