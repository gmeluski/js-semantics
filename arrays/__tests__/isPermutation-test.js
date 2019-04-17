import isPermutation from '../isPermutation.js'

describe('is unique', () => {
  it('will be false if the strings are different lengths', () => {
    const firstString = 'eat';
    const secondString = 'at';


    expect(isPermutation(firstString, secondString)).toEqual(false)
  })

  it('will be false if the strings are not permutations', () => {
    const firstString = 'eat';
    const secondString = 'tet';


    expect(isPermutation(firstString, secondString)).toEqual(false)
  })

  it('works for simple cases', () => {
    const firstString = 'eat';
    const secondString = 'tea';

    expect(isPermutation(firstString, secondString)).toEqual(true)

  })

  xit('fails when there are asymmetrically matched letters', () => {
    const firstString = 'eatt';
    const secondString = 'teea';

    expect(isPermutation(firstString, secondString)).toEqual(false)

  })

  xit('works when there are repeat letters', () => {
    const firstString = 'eatt';
    const secondString = 'ttea';

    expect(isPermutation(firstString, secondString)).toEqual(true)

  })

})
