import React from "react";


class Button extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()} className={this.props.classe} style={{ color: this.props.color, backgroundColor: this.props.bcolor }}>
        {this.props.name} {this.props.urlCarte} {this.props.rndCarte}
      </button>
    );
  }
}

export default Button;