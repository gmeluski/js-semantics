import rotateMatrix from '../rotateMatrix';

describe('rotate the image', () => {

  it('rotates a 3x3 image', () => {
    /*
     * a b
     * c d
     *
     * c a
     * d b
     */

    const originalMatrix = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ]

    const rotatedMatrix = [
      ['g', 'd', 'a'],
      ['h', 'e', 'b'],
      ['i', 'f', 'c'],
    ];


    expect(rotateMatrix(originalMatrix)).toEqual(rotatedMatrix)
  })

  it('rotates a 2x2 image', () => {
    /*
     * a b
     * c d
     *
     * c a
     * d b
     */

    const originalMatrix = [
      ['a', 'b'],
      ['c', 'd'],
    ]

    const rotatedMatrix = [
      ['c', 'a'],
      ['d', 'b'],
    ];


    expect(rotateMatrix(originalMatrix)).toEqual(rotatedMatrix)
  })
})
