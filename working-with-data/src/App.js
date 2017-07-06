import React from 'react';
import {Component} from 'react';

let data = [
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

class App extends Component {
    render(){
        return(
            <div>
                <CardList cards={data}/>
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

export default App;