import oneAway from '../oneAway';

describe('if one string is a single edit away from the first string', () => {
  xit('matches for zero edits', () => {
    const original = 'pale';
    const match = 'pale';

    expect(oneAway(original, match)).toEqual(true);

  })

  it('fails if the match is more than one character shorter than the original', () => {
    const original = 'pale';
    const match = 'pl';

    expect(oneAway(original, match)).toEqual(false);

  })

  xit('fails is the original is one character longer and requires a swap', () => {
    const original = 'pale';
    const match = 'plf';

    expect(oneAway(original, match)).toEqual(true);
  })

  it('matches an insertion', () => {
    const original = 'pale';
    const match = 'ple';

    expect(oneAway(original, match)).toEqual(true);


  })

  it('fails if the match is more than one character longer than the original', () => {
    const original = 'pale';
    const match = 'paalee';

    expect(oneAway(original, match)).toEqual(false);

  })

  xit('matches a deletion', () => {


  })

  xit('matches an insertion', () => {


  })

  xit('matches a swap', () => {


  })

  xit('fails if more than two operations are required', () => {


  })

})
