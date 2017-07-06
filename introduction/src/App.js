import React from 'react';
import {Component} from 'react';
import Button from './Button';

class App extends Component {
    state = {counter: 0};

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
                counter: prevState.counter + incrementValue
            })
        );
    }

    render(){
        return(
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

const Result = (props) => {
    return(
        <div>{props.counter}</div>
    )
}

export default App;