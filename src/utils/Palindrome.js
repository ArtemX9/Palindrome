export function prepareString(rawString) {
  return rawString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\s\\/]/gi, '').toLowerCase().trim();
}

export function isPalindrome(rawString) {
  const preparedString = prepareString(rawString);
  return preparedString === preparedString.split('').reverse().join('');
}
