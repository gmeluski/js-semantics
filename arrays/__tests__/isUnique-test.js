import isUnique from '../isUnique.js'
describe('is unique', () => {
  it('is true for strings with unique characters', () => {
    const uniqueCharacterWord = 'dextilurge'

    expect(isUnique(uniqueCharacterWord)).toEqual(true)
  })

  it('is false for strings with non unique characters', () => {
    const repetitiveWord = 'dexter';

    expect(isUnique(repetitiveWord)).toEqual(true)
  })

})
