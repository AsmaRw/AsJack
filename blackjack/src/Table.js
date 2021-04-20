import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './componant/button/Button.jsx'
//import Dealer from './componant/Play/Dealer.jsx'
//import Player from './componant/Play/Player.jsx'





class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      deck: [],
      player: 0,
      dealer: 0,

    }
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
      <div>
        <div style={{ float: "both" }}>
          <Button
            onClick={this.onClickGive}
            classe="btn btn-outline-primary hover-zoom"
            color="white"
            bcolor="rgba(18, 102, 241, 0.5)"
            name="give"
          />
        </div>

        <div>
          {/* carte du joueur */}
        </div>
        <div>
          <Button
            onClick={this.onClickStop}
            classe="btn btn-outline-danger hover-zoom"
            color="white"
            bcolor="rgba(178, 60, 253, 0.2)"
            name="stop"
          />
        </div>

      </div>
    );
  }
}

export default Table;

