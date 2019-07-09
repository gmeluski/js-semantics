
const generateRow = (matrix, xPosition) => {
  let row = [];
  const n = matrix.length;
  for (let i = n - 1; i >= 0; i--) {
    row.push(matrix[i][xPosition]);
  }

  return row;
}

const rotateMatrix = (startMatrix) => {
  // get every single element in the first column
  // for (0 > n (because n is the same in both)
  // get x, 0. that's the first array
  // the first array to replaced is an iteration through
  // 0,x
  //

  let finalMatrix = []

  for (let i = 0; i < startMatrix.length; i++) {
    const row = generateRow(startMatrix, i);
    finalMatrix.push(row)
  }


  return finalMatrix;
}


export default rotateMatrix;
