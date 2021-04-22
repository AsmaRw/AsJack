import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './componant/button/Button.jsx'
import Cartes from "./componant/carte/Cartes";
import Game from './componant/Play/Game.jsx'
import DealerCard from "./componant/carte/DealerCard.jsx";

const cardArray = [
  "KS", "QS", "JS", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
  "KD", "QD", "JD", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
  "KH", "QH", "JH", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H",
  "KC", "QC", "JC", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C"];

const min = 0
const cardCount = 52

let rndNum = 0
let temp = ""

let rndCarteTemp = "";
let rndNumTemp = 0;
// let cardSelected = []
class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      counterPlayer: 0,
      counterDealer: 0,
      playerCardList: [],
      dealerCardList: [],
      startGame: false
    }
  }

  rndCarte() {
    rndNumTemp = Math.floor(Math.random() * 53);

    if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 } else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

    rndCarteTemp = cardArray[rndNumTemp - 1];
    console.log("rndCarteTemp", rndCarteTemp)

    return rndCarteTemp
  }


  onClickGive = () => {
    const cardSelected = this.rndCarte()
    console.log('cardSelected :', cardSelected)
    const cardSelectedDealer = this.rndCarte()
    console.log('cardSelectedDealer :', cardSelectedDealer)

    //console.log(this.rndCarte())

    const valueCarte = this.transformCardIntoInt(cardSelected.split("")[0])
    const totalPlayerValue = this.state.counterPlayer + valueCarte
    const valueCarteDealer = this.transformCardIntoInt(cardSelectedDealer.split("")[0])
    const totalValueDealer = this.state.counterDealer + valueCarteDealer

    this.setState({
      counterPlayer: totalPlayerValue,
      playerCardList: [...this.state.playerCardList, cardSelected]
    })
    this.setState({
      counterDealer: totalValueDealer,
      dealerCardList: [...this.state.dealerCardList, cardSelectedDealer]
    })

    console.log('DealerCardList :', this.state.dealerCardList)
    this.calculateCard(totalPlayerValue)
    this.calculateCard(totalValueDealer)
  }

  transformCardIntoInt(cardValue) {
    if (cardValue == "K" || cardValue == "Q" || cardValue == "J" || cardValue == "A") {
      cardValue = "10"
    }

    return parseInt(cardValue)
  }

  startGame = () => {
    this.setState({
      startGame: true
    })
  }


  calculateCard(value) {
    if (value > 21) {
      console.log("Busted")
    } else {
      // move current total card values to previousCardsValues
    }
  }

  render() {
    if (this.state.startGame == false) {
      return (
        <Game startGame={this.startGame} />
      )
    } else {
      return (
        <div className='playGame'>
          {/* <div>
              <DealerCard cardSelectedDealer={this.state.dealerCardList} />
            <Cartes cardList={this.state.playerCardList} />

            </div> */}
          <div style={{ height: '100vh', position: 'relative' }}>
            <h1 style={{ color: '#feb236', textAlign: 'center' }}>Black Jack</h1>
            {/* <img src='https://m.media-amazon.com/images/I/71g6q+jPYAL._AC_UL320_.jpg' alt="W3Schools" width="104" height="142" /> */}
            <DealerCard cardSelectedDealer={this.state.dealerCardList} />
            <Cartes cardList={this.state.playerCardList} />
            <div style={{ bottom: '20px', position: 'absolute' }} className="row col-6 offset-3 flex d-flex justify-content-between">
              <div className="d-grid gap-2">
                <Button
                  onClick={this.onClickGive}
                  classe="btn btn-outline-warning btn-lg rounded-pill"
                  color="white"
                  // bcolor="rgba(18, 102, 241, 0.7)"
                  bcolor="#0d6efd"
                  name="Give"
                />
              </div>
              <div>
                {/* <Cartes cardList={this.state.playerCardList} /> */}
              </div>
              <div className="d-grid gap-2">
                <Button
                  onClick={this.onClickStop}
                  classe="btn btn-outline-warning btn-lg rounded-pill"
                  color="white"
                  // bcolor="rgba(178, 60, 253, 0.5"
                  bcolor="#dc3545"
                  name="Stop"
                />
              </div>

            </div>
          </div>
        </div>
      );
    }
  }
}

export default Table;

