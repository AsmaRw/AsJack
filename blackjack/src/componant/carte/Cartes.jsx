import React from "react";

const cardArray = [
  "KS", "QS", "JS", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
  "KD", "QD", "JD", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
  "KH", "QH", "JH", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H",
  "KC", "QC", "JC", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C"];

const min = 0
const cardCount = 52
const rndCarte = ""
const exportCarte = ""

let rndNum = 0
let count = 1
let temp = ""

class Cartes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      rndCarte,
      exportCarte,
      rndNum: 0,
      lancePremier: false
    }

    this.rndCarte = this.rndCarte.bind(this);
  }

  // console.log(typeof cardCount, cardCount)

  rndCarte() {

    let rndCarteTemp = "";
    let urlCarteTemp = "";
    let rndNumTemp = 0;
    let lancePremier = false;
    let cardSelected = []

    if (lancePremier) {

      while (count <= 2) {
        rndNumTemp = Math.floor(Math.random() * ((cardCount - 1) - min + count) + min);
        // console.log(rndNum)
        if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 } else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

        count++

        rndCarteTemp = (cardArray[rndNumTemp - 1]);

        cardSelected.push(cardArray[rndNum - 1])
        temp = (cardSelected[0].substring(0, 1));

        cardSelected.push(temp.substring(0, 1));

        // console.log(temp)
        cardSelected.push(urlCarteTemp + rndCarteTemp + ".png")

        console.log(cardSelected)
      }
    } else {

      rndNumTemp = Math.floor(Math.random() * ((cardCount - 1) - min + count) + min);
      // console.log(rndNum)
      if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 } else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

      // console.log(cardArray[rndNum - 1])
      rndCarteTemp = (cardArray[rndNumTemp - 1]);

      cardSelected.push(cardArray[rndNumTemp - 1])
      temp = (cardSelected[0].substring(0, 1));

      cardSelected.push(temp.substring(0, 1));

      // console.log(temp)
      cardSelected.push(urlCarteTemp + rndCarteTemp + ".png")

      console.log(cardSelected);

    }
    this.setState({

      cardSelected: cardSelected,
      urlCarte: urlCarteTemp,
      exportCarte: urlCarteTemp

    })
  }

  render() {
    return (
      <div>
        <img class="CarteRecu" src={this.props.urlCarte} alt="" ></img>
      </div>
    );
  }
}

export default Cartes;
