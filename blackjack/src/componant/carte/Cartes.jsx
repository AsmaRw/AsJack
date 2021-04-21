import React from "react";


class Cartes extends React.Component {

  constructor() {
    super()

    this.state = {
      rndCarte: "",
      urlCarte: "",
      lancePremier: "",
      cardSelected: "",
    }
  }


  render(props) {
    return (
      <div>
        {this.props.playerCartList.map(
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
