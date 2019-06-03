describe('rotate the image', () => {
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
