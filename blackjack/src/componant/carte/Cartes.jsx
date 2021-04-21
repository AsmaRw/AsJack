import React from "react";


class Cartes extends React.Component {

  
  render() {
    return (
      <div>
        {this.props.cardList.map(
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
