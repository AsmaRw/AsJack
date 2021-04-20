import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './componant/carte/Cartes.jsx'

//import Button from './componant/button/Button.jsx'
//import Dealer from './componant/Play/Dealer.jsx'
//import Player from './componant/Play/Player.jsx'



class Table extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h1 style = {{ color: '#feb236', textAlign: 'center'}}>Black Jack</h1>
      </div>
    );
  }
}

export default Table;

