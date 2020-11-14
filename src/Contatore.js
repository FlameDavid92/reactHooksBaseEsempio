import React from 'react';

export default class Contatore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contatore: 0
        }
    }

    aggiungi = () => {
        this.setState((prevState)=>{
            return {contatore: prevState.contatore + 1}
        });
    }

    render(){
        return(
            <>
                <h1>Sono un componente contatore</h1>
                <h2>{this.state.contatore}</h2>
                <button onClick={this.aggiungi}>Aggiungi</button>
            </>
        )
    }
}