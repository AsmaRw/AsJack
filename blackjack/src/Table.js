import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartes from './componant/carte/Cartes.jsx'

import Button from './componant/button/Button.jsx'
//import Dealer from './componant/Play/Dealer.jsx'
//import Player from './componant/Play/Player.jsx'

const cardArray = [
  "KS", "QS", "JS", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
  "KD", "QD", "JD", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
  "KH", "QH", "JH", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H",
  "KC", "QC", "JC", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C"];

const min = 0
const cardCount = 52

let rndNum = 0
let temp = ""

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      counterPlayer: 0,
      counterDealer: 0,
      playerCartList: [],
      dealerCartList: []
    }
  }

  rndCarte() {

    let rndCarteTemp = "";
    let rndNumTemp = 0;
    let cardSelected = []
  
        rndNumTemp = Math.floor(Math.random() * ((cardCount - 1) - min + count) + min);

        if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 } else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

        rndCarteTemp = (cardArray[rndNumTemp - 1]);
        // console.log(rndCarteTemp);
        cardSelected.push(cardArray[rndNum - 1])
        // temp = (cardSelected[0].substring(0, 1));

        // console.log(cardSelected)
        cardSelected.push(rndCarteTemp)
        cardSelected= push(this.state.cardSelected)
        // console.log(cardSelected)
        return cardSelected;
  }

  //  getrandomcart=()=>{
  //    const updateDeck = deck
  //    const upRandom = 
  //  }


  //   getPlayer=()=>{

  //   }


  //   getDealer=()=>{

  //   }
  //   onclickGive=()=>{

  //   }

  //   onclickStop=()=>{

  //   }
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <h1 style={{ color: '#feb236', textAlign: 'center' }}>Black Jack</h1>
        <div style={{ bottom: '20px', position: 'absolute' }} className="row col-6 offset-3 flex d-flex justify-content-between">
          <div className="d-grid gap-2">
            <Button
              onClick={this.onClickGive}
              classe="btn btn-outline-warning btn-lg"
              color="white"
              bcolor="rgba(18, 102, 241, 0.7)"
              name="give"
            />
          </div>

          <div>
            {/* carte du joueur */}
          </div>
          <div className="d-grid gap-2">
            <Button
              onClick={this.onClickStop}
              classe="btn btn-outline-danger btn-lg"
              color="white"
              bcolor="rgba(178, 60, 253, 0.5)"
              name="stop"
            />
          </div>

        </div>
      </div>
    );
  }
}

export default Table;

