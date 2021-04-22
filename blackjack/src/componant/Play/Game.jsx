import React from "react";

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <h1>Black Jack</h1>
        <div>
          <button type="button" className="btn btn-outline-warning rounded-pill" style={{ height: '100px', width: '200px', fontSize: '2em' }} onClick={this.props.startGame}>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
