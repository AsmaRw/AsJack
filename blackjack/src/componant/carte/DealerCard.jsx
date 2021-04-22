import React from "react";


class DealerCard extends React.Component {


  render() {
    console.log('dealerCard :', this.props.cardSelectedDealer);
    return (
      <div className="cartes">
        {this.props.cardSelectedDealer.map(
          function (x) {
            return (
              <img src='https://m.media-amazon.com/images/I/71g6q+jPYAL._AC_UL320_.jpg' alt="W3Schools" width="104" height="142" />
            )
          })}
      </div>
    );
  }
}




export default DealerCard;