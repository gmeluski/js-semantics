
const generateRow = (matrix, xPosition) => {
  let row = [];
  const n = matrix.length;
  for (let i = n - 1; i >= 0; i--) {
    row.push(matrix[i][xPosition]);
  }

  return row;
}

const rotateMatrix = (startMatrix) => {
  let finalMatrix = []

  for (let i = 0; i < startMatrix.length; i++) {
    const row = generateRow(startMatrix, i);
    finalMatrix.push(row)
  }


  return finalMatrix;
}


export default rotateMatrix;
