import React from 'react';
import FontAwesome from 'react-fontawesome';
import { shareMessageText } from '../../utils/ShareMessage';
import './ShareVia.css';

function ShareVia(props) {
  const whatsapp = () => {
    window.open(encodeURI(`whatsapp://send?text=${shareMessageText(props.item)}`), '_self');
  };

  const email = () => {
    window.open(`mailto:?Subject=Palindrome&body=${shareMessageText(props.item)}`, '_self')
  };

  return (
    <div className="Share-entered-item" style={props.style}>
      <FontAwesome name="whatsapp" className={'clickable'} onClick={whatsapp} />
      <FontAwesome name="envelope" className={'clickable'} onClick={email} />
    </div>
  );
}

ShareVia.propTypes = {
  item: React.PropTypes.object,
  style: React.PropTypes.object
};

export default ShareVia;
