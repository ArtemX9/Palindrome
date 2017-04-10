const { prepareString, isPalindrome, removeChars } = require('./Palindrome');

describe('prepareString function', () => {
  it('should trim, lowercase string ', () => {
    expect(prepareString('A dog, a plan, a canal: pagoda. ')).toBe('adogaplanacanalpagoda');
  });
  it('should remove all extra char in string except letters', () => {
    expect(prepareString(',,:%^&#%$&#%^#')).toBe('');
  });
  it('should recognize other than english letters', () => {
    expect(prepareString('укпжцукп')).toBe('укпжцукп');
  });
});

describe('isPalindrome function', () => {
  it('should recognize palindrome in plain string', () => {
    expect(isPalindrome('A dog, a plan, a canal: pagoda. ')).toBe(true);
  });

  it('should recognize palindrome in string with other than letter chars', () => {
    expect(isPalindrome('Amy, must I jujitsu my ma?')).toBe(true);
  });

  it('should not recognize palindrome if the string is not palindrome', () => {
    expect(isPalindrome('How are you?')).toBe(false);
  });
});
