import React from "react";

const cardArray = [
  "KS", "QS", "JS", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
  "KD", "QD", "JD", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
  "KH", "QH", "JH", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H",
  "KC", "QC", "JC", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C"];

const min = 0
const count = 1
const lancePremier = true
const cardCount = 52
// var lancePremier = false;
const cardSelected = []

class Cartes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      rndCarte: "",
      urlCarte: "",
      lancePremier: "",
      cardSelected: "",
      cardList: ["AS", "7C"] //juste pour tester a effacer apres 
    }

    // this.rndCarte = this.rndCarte.bind(this);
  }

  // console.log(typeof cardCount, cardCount)

  // rndCarte(lancePremier) {

  //   let rdmNum = 0

  //   let cardSelected = []

  //   if (lancePremier) {

  //     while (count <= 2) {
  //       rdmNum = Math.floor(Math.random() * ((cardCount - 1) - min + count) + min);
  //       // console.log(rdmNum)
  //       if (rdmNum > 52) { rdmNum = rdmNum - 10 } else if (rdmNum < 1) { rdmNum = rdmNum + 10 }

  //       count++
  //       rndCarte = (cardArray[rdmNum - 1]);

  //       cardSelected.push(cardArray[rdmNum - 1])
  //       var temp = (cardSelected[0].substring(0, 1));

  //       cardSelected.push(temp.substring(0, 1));

  //       // console.log(temp)
  //       cardSelected.push(urlCarte + rndCarte + ".png")

  //       console.log(cardSelected)
  //     }
  //   } else {

  //     rdmNum = Math.floor(Math.random() * ((cardCount - 1) - min + count) + min);
  //     // console.log(rdmNum)
  //     if (rdmNum > 52) { rdmNum = rdmNum - 10 } else if (rdmNum < 1) { rdmNum = rdmNum + 10 }

  //     // console.log(cardArray[rdmNum - 1])
  //     rndCarte = (cardArray[rdmNum - 1]);

  //     cardSelected.push(cardArray[rdmNum - 1])
  //     var temp = (cardSelected[0].substring(0, 1));

  //     cardSelected.push(temp.substring(0, 1));

  //     // console.log(temp)
  //     cardSelected.push(urlCarte + rndCarte + ".png")

  //     console.log(cardSelected)

  //   }

  // }
  render() {
    return (
      <div>
        {/* {this.props.cardList.map( */}
        {this.state.cardList.map(

          function (x) {
            const url = "https://deckofcardsapi.com/static/img/" + x + "." + "png"
            return (
              <img src={url} />
            )
          })}
      </div>
    );
  }
}




export default Cartes;