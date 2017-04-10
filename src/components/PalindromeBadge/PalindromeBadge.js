import React from 'react';
import './PalindromeBadge.css';

function PalindromeBadge(props) {
  const className = props.isPalindrome ? 'isPalindrome' : 'isNotPalindrome';

  return (
    <div className={`Palindrome-badge ${className}`}>
      <span>{props.isPalindrome ? 'Palindrome' : 'Not palindrome'}</span>
    </div>
  );
}

PalindromeBadge.propTypes = {
  isPalindrome: React.PropTypes.bool
};

export default PalindromeBadge;
