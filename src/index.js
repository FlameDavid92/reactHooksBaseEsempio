import React from 'react';
import ReactDOM from 'react-dom';
//import Contatore from './Contatore';
//import Contatore2 from './Contatore2';
//import Photos from './Photos';
import Accordion from './Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'

const cards = {
  '1' : {
    titolo: "Titolo1",
    data: new Date().toLocaleDateString(),
    testo: "Testo testo testo"
  },
  '2' : {
    titolo: "Titolo2",
    data: new Date().toLocaleDateString(),
    testo: "Testo testo testo"
  },
  '3' : {
    titolo: "Titolo3",
    data: new Date().toLocaleDateString(),
    testo: "Testo testo testo"
  }
}

ReactDOM.render(
  <Accordion idAcc={"accordion"} cards={cards}></Accordion>,
  document.getElementById('root')
);

