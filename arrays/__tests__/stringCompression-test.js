import stringCompression from '../stringCompression';

describe('the compression', () => {
  it('compresses strings', () => {

    const toCompress = 'aabcccccaaa';
    const result = 'a2b1c5a3';

    expect(stringCompression(toCompress)).toEqual(result);
  })

})
