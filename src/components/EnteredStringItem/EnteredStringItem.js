import React from 'react';
import ShareVia from '../ShareVia/ShareVia';
import PalindromeBadge from '../PalindromeBadge/PalindromeBadge';
import './EnteredStringItem.css';

function EnteredStringItem (props) {
      return (
      <div className='List-item'>
        <div className="Palindrome-list-item">
          <div className="Palindrome-text-container">
            <p className="Palindrome-text">{props.item.inputString}</p>
          </div>
          <PalindromeBadge isPalindrome={props.item.isPalindrome} />
        </div>
        <ShareVia item={props.item} />
      </div>
    );
}

export default EnteredStringItem;