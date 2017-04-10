import React, { Component } from 'react';
import ShareVia from './ShareVia';

class EnteredStringItem extends Component {
  state = {
    hovered: false
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
        className={`Entered-item`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        {this.props.item.inputString}
        <ShareVia style={{ display: `${this.state.hovered ? '' : 'none'}` }} item={this.props.item} />
      </div>
    );

  }
}

export default EnteredStringItem;