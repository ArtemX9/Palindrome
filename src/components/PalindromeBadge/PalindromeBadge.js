import React from 'react';
import './PalindromeBadge.css';

function PalindromeBadge (props) {
  let className = !!props.isPalindrome ? 'isPalindrome' : 'isNotPalindrome';

  return (
    <div className={`Palindrome-badge ${className}`}>
      <span>{props.isPalindrome ? 'Palindrome' : 'Not palindrome'}</span>
    </div>
  )
}

export default PalindromeBadge;