import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class ShareVia extends Component {
  whatsapp = () => {
    window.open(encodeURI(`whatsapp://send?text=${this.props.text}`), '_self');
  };

  email = () => {
    window.open(`mailto:?Subject=Palindrome&body=${this.props.text}`, '_self')
  };

  render() {
    return (
      <div className='Share-entered-item'>
        <FontAwesome name='whatsapp' className={'clickable'} onClick={this.whatsapp} />
        <FontAwesome name='envelope' className={'clickable'} onClick={this.email} />
      </div>
    );
  }
}

export default ShareVia;