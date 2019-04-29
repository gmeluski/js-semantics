import urlify from '../urlify.js'

describe('urlify', () => {
  it('sucessfully flips the initial test case', () => {
    const input = 'Mr John Smith  ';
    const result = 'Mr%20John%20Smith';
    const trueLength = 13;

    expect(urlify(input, trueLength)).toEqual(result);
  })

})

