import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        cards: []
    }

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }
    render(){
        return(
            <div>
                <Form onSubmit={this.addNewCard}/>
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
            {props.cards.map(card => <Card key={card.id} {...card}/>)}
        </div>
    )
}

// A form to handle user search input
class Form extends Component {
    state = { userName: '' }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({userName: ''});
            });
    };
    render(){
        return(
            /* alternative to using ref is 'state'*/
            /* ref={(input) => this.userNameInput = input}*/
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.userName}
                onChange = {(event) => this.setState({ userName: event.target.value })}
                placeholder="Github username" required/>
                <button type="submit">Add card</button>
            </form>
        )
    }
}

export default App;