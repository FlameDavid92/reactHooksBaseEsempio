import React, {useState, useEffect} from 'react';

export default function Contatore2(){
    const [contatore, setContatore] = useState(0);
    //const [colore, setColore] = useState('rosso');
    //const [lista, setLista] = useState([]);

    useEffect(()=>{  //un po' come componentDidMount nelle componenti a classi
        
    });

    const incrementa = ()=>{
        const somma = contatore + 1;
        setContatore(somma);
    }
    return(
        <>
            <h1>Sono un componente contatore</h1>
            <h2>{contatore}</h2>
            <button onClick={()=>setContatore(contatore + 1)}>Aggiungi</button>
        </>
    )
}