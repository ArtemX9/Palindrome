import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class ShareVia extends Component {
  slack = () => {
    window.open(encodeURI(`slack://open?team=mygroupartem&id=general&message=${this.props.text}`), '_self');
  };

  whatsapp = () => {
    window.open(encodeURI(`whatsapp://send?text=${this.props.text}`), '_self');
  };

  email = () => {
    window.open(`mailto:?Subject=Palindrome&body=${this.props.text}`, '_self')
  };

  jabber = () => {
    window.open(encodeURI(`xmpp:romeo@montague.net?message;body=${this.props.text}`), '_self')
  };

  render() {
    return (
      <div className='Share-entered-item'>
        <FontAwesome name='slack' className={'clickable'} onClick={this.slack} />
        <FontAwesome name='whatsapp' className={'clickable'} onClick={this.whatsapp} />
        <FontAwesome name='comment' className={'clickable'} onClick={this.jabber} />
        <FontAwesome name='envelope' className={'clickable'} onClick={this.email} />
      </div>
    );
  }
}

export default ShareVia;