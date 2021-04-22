import React from "react";

class Game extends React.Component {
  render() {
    return (
      <div className = 'game'>
        <h1>Black Jack</h1>
        <div>
          <button className="btn btn-primary" type="button" style= {{height: '100px', width: '200px', fontSize: '50px'}} onClick = {this.props.startGame}>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
