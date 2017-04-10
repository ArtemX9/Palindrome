export function prepareString (rawString) {
  return rawString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\s\\/]/gi, '').toLowerCase().trim();
}

export function isPalindrome (rawString) {
  let preparedString = prepareString(rawString);
  return preparedString === preparedString.split('').reverse().join('');
}
