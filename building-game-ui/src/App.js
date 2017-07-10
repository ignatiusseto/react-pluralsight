import React from 'react';
import {Component} from 'react';
import AppCSS from './App.css';
import _ from '../node_modules/lodash';

class App extends Component {
    render(){
        return(
            <div>
                <Game />
            </div>
        )
    }
}

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    // let stars = [];
    
    // for(let i=0; i<numberOfStars; i++){
    //     stars.push(<i key={i} className="fa fa-star"></i>)
    // }

    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer = (props) => {
    return (
        <div className="col-5">
            ...
        </div>
    );
}

const Numbers = (props) => {
    // const arrayOfNumbers = _.range(1,10);

    return(
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    )
}

Numbers.list = _.range(1,10);

class Game extends Component {
    render(){
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
        )
    }
}

export default App;