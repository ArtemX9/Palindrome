import React, { Component } from 'react';
import ShareVia from './ShareVia';

class EnteredStringItem extends Component {
  state = {
    hovered: false
  };

  clicked = (item) => {
    console.log(item);
  };

  onHover = () => {
    this.setState({ hovered: true });
  };

  onLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    return (
      <div
        className="Entered-item"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        {this.props.itemm}
        {this.state.hovered ? <ShareVia text={this.props.itemm} /> : null}
      </div>
    );

  }
}

export default EnteredStringItem;