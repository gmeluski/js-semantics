import isSubstring from '../isSubstring.js'

describe('string rotations', () => {
  it('works', () => {
    const stringOne = 'waterbottle';
    const stringTwo = 'erbottlewat';

    expect(isSubstring(stringOne, stringTwo)).toEqual(true);

  })

  xit('breaks when it doesnt find first character', () => {
    const stringOne = 'waterbottle';
    const stringTwo = 'erbottleaat';

    expect(isSubstring(stringOne, stringTwo)).toEqual(true);
  })

  xit('doesnt accept non rotations', () => {
    const stringOne = 'waterbottle';
    const stringTwo = 'abeelortttw'

    expect(isSubstring(stringOne, stringTwo)).toEqual(false);
  })

})
