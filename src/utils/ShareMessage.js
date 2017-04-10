export function shareMessageText(item) {
  return `Look out! This string: ${item.inputString} - is${!item.isPalindrome ? ' not' : ''} palindrome!`;
}