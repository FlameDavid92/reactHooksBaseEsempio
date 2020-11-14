import React from 'react';
//import Card from './CardClass';
import Card from './CardFunc';

export default function Accordion(props){
    return(
        <>
            <div id={props.idAcc}>
            {
                Object.keys(props.cards).map(card => {
                    return(
                        <Card key={card} id={card} titolo={props.cards[card].titolo} data={props.cards[card].data} testo={props.cards[card].testo}/>
                    )
                })
            }
            </div>
        </>
    )
}
