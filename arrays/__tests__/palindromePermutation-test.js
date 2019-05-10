// questions: can we assume that capital letters are equivalent to lowercase?
// does type of character set matter?

import palindromePermutation from '../palindromePermutation';

describe('tells whether the input is a permutation of a palindrome', () => {
  it('returns false for an unbalanced, uneven character count', () => {
    const input = 'Tact Coaaj'

    expect(palindromePermutation(input)).toEqual(false);
  })

  it('returns true for a balanced, uneven character count', () => {
    const input = 'Tact Coa'

    expect(palindromePermutation(input)).toEqual(true);

  })

  it('returns true for a balanced, even character count', () => {
    const input = 'Tact Coao'

    expect(palindromePermutation(input)).toEqual(true);

  })
})

