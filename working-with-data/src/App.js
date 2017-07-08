import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        cards: [
            {   
                name: "Ignatius Seto",
                avatar_url: "https://avatars3.githubusercontent.com/u/17163682?v=3",
                company: "Accenture" 
            },
            {
                name: "Philippe Dijon",
                avatar_url: "https://avatars3.githubusercontent.com/u/19623192?v=3",
                company: "Accenture"
            },
        ]
    }

    addNewCard = (cardInfo) => {
        console.log(cardInfo);
    }
    render(){
        return(
            <div>
                <Form />
                <CardList cards={this.state.cards}/>
            </div>
        )
    }
}

const Card = (props) => {
    return(
        <div style={{margin: '1em'}}>
            <img style={{width: '75px'}} src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
}

// ... is called "spread operator" in React, to spread props in available objects 
const CardList = (props) => {
    return(
        <div>
            {props.cards.map(card => <Card {...card}/>)}
        </div>
    )
}

// A form to handle user search input
class Form extends Component {
    state = { userName : '' }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event: form submit', this.state.userName);
        axios.get('https://www.github.com/users/${this.state.userName}')
            .then(resp => {
                console.log(resp);
            });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                /*alternative to using ref is 'state'*/
                /*ref={(input) => this.userNameInput = input}*/
                value={this.state.userName}
                onChange = {(event) => this.setState({ userName: event.target.value })}
                placeholder="Github username" />
                <button type="submit">Add card</button>
            </form>
        )
    }
}

export default App;