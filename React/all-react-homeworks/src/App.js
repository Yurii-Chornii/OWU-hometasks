import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {textInput : '', numberInput : ''}
    myForm = React.createRef();
    render() {
        return (
            <div>
                <form action={"/saveData"} ref={this.myForm} onSubmit={this.send}>
                    <input id={'textInput'} type={"text"} onInput={this.commitStateText} value={this.state.textInput}/>
                    <input id={'numberInput'} type={"number"} onInput={this.commitStateNumber} value={this.state.numberInput}/>
                    <button>Send</button>
                </form>

            </div>
        );
    }

    send = (e) => {
        e.preventDefault();
        console.log(this.myForm.current[0].value);
    }
    commitStateText = (e) => {
        this.setState({textInput : e.target.value})
    }
    commitStateNumber = (e) => {
        this.setState({numberInput : e.target.value})
    }
}
export default App;
