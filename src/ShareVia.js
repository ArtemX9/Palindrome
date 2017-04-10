import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { shareMessageText } from './utils/ShareMessage';

class ShareVia extends Component {
  whatsapp = () => {
    window.open(encodeURI(`whatsapp://send?text=${shareMessageText(this.props.item)}`), '_self');
  };

  email = () => {
    window.open(`mailto:?Subject=Palindrome&body=${shareMessageText(this.props.item)}`, '_self')
  };

  render() {
    return (
      <div className='Share-entered-item' style={this.props.style}>
        <FontAwesome name='whatsapp' className={'clickable'} onClick={this.whatsapp} />
        <FontAwesome name='envelope' className={'clickable'} onClick={this.email} />
      </div>
    );
  }
}

export default ShareVia;