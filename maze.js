var inputData = [
  '4 4',
  '1 2',
  '3 2',
  '4 3',
  '1 4',
  '1 4'
];

//build an adjacency list
//
//

var visited = {};

function toInt(input) {
  return parseInt(input, 10);
}

function explore(node, endNode, adjacencies) {
  var connectedNodes = adjacencies[node];
  var id;

  visited[node] = true;

  if (node === endNode) {
    return true;
  }

  for (var i = 0; i < connectedNodes.length; i++) {
    id = connectedNodes[i];

    if (!visited[id]) {
      return explore(connectedNodes[i], endNode, adjacencies);
    }
  }

  return false;


}

function main(inputs) {
  var highLevel = inputs.shift().split(' ');
  var vertices = toInt(highLevel[0]);
  var edges = toInt(highLevel[1]);
  var adjacencies = Array.apply(null, Array(vertices + 1)).map(function () {
    return [];
  });

  var edgeInfo;
  var firstVertice;
  var secondVertice;
  var pathToFind = inputs[inputs.length - 1].split(' ').map(function (item) {
    return toInt(item);
  });

  for (var i = 0; i < edges; i++) {
    edgeInfo = inputs[i].split(' ');
    firstVertice = toInt(edgeInfo[0]);
    secondVertice = toInt(edgeInfo[1]);

    adjacencies[firstVertice].push(secondVertice);
    adjacencies[secondVertice].push(firstVertice);
  }

  var allGood = explore(pathToFind[0], pathToFind[1], adjacencies);

  console.log(allGood);
}

main(inputData);
