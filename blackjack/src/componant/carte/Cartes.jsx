import React from "react";


class Cartes extends React.Component {


  render() {
    return (
      <div className="cartes">
        {this.props.cardList.map(
          function (x) {
            const url = "https://deckofcardsapi.com/static/img/" + x + "." + "png"
            return (
              <img src={url}
                style={{ height: 150, width: 100 }} />
            )
          })}
      </div>
    );
  }
}




export default Cartes;
