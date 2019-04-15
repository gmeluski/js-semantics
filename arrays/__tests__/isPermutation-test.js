import isPermutation from '../isPermutation.js'

describe('is unique', () => {
  it('will be false if the strings are different lengths', () => {
    const firstString = 'eat';
    const secondString = 'at';


    expect(isPermutation(firstString, secondString)).toEqual(false)
  })

  it('works', () => {
    const firstString = 'eat';
    const secondString = 'tea';


  })

})
