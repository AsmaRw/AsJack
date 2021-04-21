import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cartes from './componant/carte/Cartes.jsx'

import Button from './componant/button/Button.jsx'
import Cartes from "./componant/carte/Cartes";
//import Dealer from './componant/Play/Dealer.jsx'
//import Player from './componant/Play/Player.jsx'


class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      deck: [],
      player: 0,
      dealer: 0,
      dealerCardList:[],
      playerCardList:[]
    }
  }







  //  getrandomcart=()=>{

  //  }


  //   getPlayer=()=>{

  //   }


  //   getDealer=()=>{

  //   }
    onclickGive=()=>{
      this.rndCarte
      const carteActuel= this.state.playerCardList.splice()
      valueCarte= parseInt(cardSelected[1])
      carteActuel.push(cardSelected[2])
      this.setState({player: player+valueCarte})
      this.setState({playerCardList:carteActuel})
    }

  //   onclickStop=()=>{

  //   }
  render() {
    return (
      <div style = {{height : '100vh', position: 'relative'}}>
        <h1 style={{ color: '#feb236', textAlign: 'center' }}>Black Jack</h1>
        <div style={{bottom: '20px', position: 'absolute'}} className= "row col-6 offset-3 flex d-flex justify-content-between">
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
            <Cartes/>
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

