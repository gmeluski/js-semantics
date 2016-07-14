var matrix =[
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0]
];


var colors = Array.apply(null, Array(matrix.length)).map(function () {
  return -1;
});

function main() {
  var startNode = 0;
  var queue = [];
  var exploreNode;

  colors[startNode] = 0;
  queue.push(startNode);

  while (queue.length > 0) {

    exploreNode = queue.shift();
    console.log('checking node ', exploreNode);

    for (var i = 0; i < matrix.length; i++) {
      if (matrix[exploreNode][i] && colors[i] === -1) {
        // assign alternate color
        colors[i] = 1 - colors[exploreNode];
        queue.push(i);
      } else if (matrix[exploreNode][i] && colors[exploreNode] === colors[i]) {
        console.log('fail on ' + exploreNode + ', ' + i);
        return false;
      }
    }
  }

  return true;

}

console.log(main(matrix));

