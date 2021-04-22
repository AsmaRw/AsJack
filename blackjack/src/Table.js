import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './componant/button/Button.jsx'
import Cartes from "./componant/carte/Cartes";
//import Dealer from './componant/Play/Dealer.jsx'
//import Player from './componant/Play/Player.jsx'

const cardArray = [
  "KS", "QS", "JS", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
  "KD", "QD", "JD", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
  "KH", "QH", "JH", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H",
  "KC", "QC", "JC", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C"
];

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
      // current player selection, standing player, busted player
      currentPlayer: "Player",
      playersStand: [],
      playerBusted: [],
      playerHit: [],
      playerWin: "",
      counterPlayer: 0,
      counterDealer: 0,
      playerCardList: [],
      dealerCardList: [],
      totalPlayerValue: 0,
      totalDealerValue: 0,
      valueCarte: 0,
      cardNum: ""
    }
  }

  rndCarte() {
    rndNumTemp = Math.floor(Math.random() * 53);

    if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 } else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

    rndCarteTemp = cardArray[rndNumTemp - 1];
    console.log("rndCarteTemp", rndCarteTemp)

    return rndCarteTemp;
  }


  onClickGive = () => {
  
    const cardSelected = this.rndCarte()

    console.log("rndcarte in onClickGive", this.rndCarte())
    let carteVal = cardSelected.split("")[0]
    console.log(temp)

    // let carteVal = this.transformCardIntoInt(cardSelected.split("")[0])
    this.setState({

      // valueCarte: this.valueCarte = this.transformCardIntoInt(this.cardSelected.split("")[0])
      valueCarte: carteVal,
      playerCardList: [...this.state.playerCardList, cardSelected]
    })

    console.log("current player is", this.state.currentPlayer)

    if (this.currentPlayer === "Player") {

      console.log("current player is", this.state.currentPlayer)

      this.setState({
        totalPlayerValue: this.state.counterPlayer + this.state.valueCarte,
        playerCardList: [...this.state.playerCardList, this.state.cardSelected]
      })

      console.log("card value", this.state.valueCarte, "total player value", this.state.totalPlayerValue)
      this.calculateCard(this.state.totalPlayerValue)
      // totalPlayerValue = this.state.counterPlayer + valueCarte

    } else if (this.currentPlayer === "Dealer") {

      console.log("current player is", this.state.currentPlayer)

      this.setState({
        totalDealerValue: this.state.counterDealer + this.state.valueCarte,
        dearlerCardList: [...this.state.dealerCardList, this.state.cardSelected]
      })
      console.log("card value", this.state.valueCarte, "total dealer value", this.state.totalDealerValue)
      this.calculateCard(this.state.totalDealerValue)
    }
    // this.calculateCard(this.totalPlayerValue)
    this.checkPlayerTotalPoint()
    return
  }

  transformCardIntoInt(cardValue) {
    if (cardValue === "K" || cardValue === "Q" || cardValue === "J" || cardValue === "A") {
      cardValue = "10"
    }
    return parseInt(cardValue)
  }

  calculateCard(value) {
    // if card first character is K-Q-J-A-0, cardNum will change t 10 
    if (this.state.cardNum === "K" || this.state.cardNum === "Q" || this.state.cardNum === "J" || this.state.cardNum === "A" || this.state.cardNum === "0") {
      this.state.cardNum = "10"
      console.log("cardNum", this.state.cardNum)

    } else {
      // if card first character is between 1 and 9, cardNum will change to 1 and 9  
      for (let i = 0; i <= 10; i++) {
        if (i === this.state.cardNum) {
          console.log("counter number", i, "cardNum", this.state.cardNum)
          this.state.cardNum = i;
        }
      }
    }
    return
  }

  checkPlayerTotalPoint() {

    if (this.state.currentPlayer === "Player") {

      this.setState({

        totalPlayerValue: parseInt(this.state.cardNum) + this.state.previousCardsValues     // add cardNum with current player's previous points
      })

      this.whoWin()

    } else {
      this.setState({

        totalDealerValue: parseInt(this.state.cardNum) + this.state.previousCardsValues     // add cardNum with current player's previous points
      })

      this.whoWin()
    }
    return
  }

  whoWin() {

    if (this.state.currentPlayer === "Player") {

      if (this.state.totalPlayerValue === 21) {
        alert(this.state.currentPlayer, "point is", this.state.totalPlayerValue, this.state.currentPlayer, "is Winner")
        alert("Game Over")

      } else if (this.state.totalPlayerValue > 21) {
        console.log(this.state.currentPlayer, "point is", this.state.totalPlayerValue, " You are busted")
        this.bustedPlayerList()

      } else if (this.state.totalPlayerValue <= 16) {
        console.log(this.state.currentPlayer, "point is", this.state.totalPlayerValue, " You are busted")
        console.log("Hit card and continue the game")
        // select player or dealer to continue
        this.hittingPlayerList()
        this.hitCard()

      } else if (this.state.totalPlayerValue >= 17) {
        console.log("Do you want to Stand or Hit card?")
        // if Stand, continue game stop giving card to this player
        this.standingPlayerList()
        this.hitCard()
        // if Stand game he can't get new card untill himself or someone win
      }

    } else {

      if (this.state.totalDealerValue === 21) {
        alert(this.state.currentPlayer, "point is", this.state.totalDealerValue, this.state.currentPlayer, "is Winner")
        alert("Game Over")

      } else if (this.totalDealerValue > 21) {
        console.log(this.state.currentPlayer, "point is", this.state.totalDealerValue, " You are busted")
        this.bustedPlayerList()

      } else if (this.state.totalDealerValue <= 16) {
        console.log(this.state.currentPlayer, "point is", this.state.totalDealerValue)
        console.log("Hit card and continue the game")
        // select player or dealer to continue
        this.hittingPlayerList()
        this.hitCard()

      } else if (this.state.totalDealerValue >= 17) {
        console.log("Do you want to Stand or Hit card?")
        // if Stand, continue game stop giving card to this player
        this.standingPlayerList()
        this.hitCard()
        // if Stand game he can't get new card untill himself or someone win
      }
    }
    return
  }

  standingPlayerList() {
    this.setState({
      playersStand: [...this.state.currentPlayer, this.state.currentPlayer]
    })
    return
  }

  bustedPlayerList() {
    this.setState({
      playerBusted: [...this.state.currentPlayer, this.state.currentPlayer]
    })
    return
  }

  hittingPlayerList() {
    this.setState({
      playerHit: [...this.state.playerHit, this.state.playerHit]
    })
    return
  }

  hitCard() {
    // selected player or dealer will continue to play
    this.rndCarte()
    return
  }

  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <h1 style={{ color: '#feb236', textAlign: 'center' }}>Black Jack</h1>
        <img src='https://m.media-amazon.com/images/I/71g6q+jPYAL._AC_UL320_.jpg' alt="W3Schools" width="104" height="142" />
        <Cartes cardList={this.state.playerCardList} />
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
            {/* <img src='https://deckofcardsapi.com/static/img/KS.png' alt="W3Schools" width="104" height="142" /> */}
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

