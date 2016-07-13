var inputData = [
  '4 2',
  '1 2',
  '3 2',
];

var visited = {};
var connectedComponents = 0;

function toInt(input) {
  return parseInt(input, 10);
}

function explore(node, adjacencies) {
  var connectedNodes = adjacencies[node];
  var id;

  visited[node] = true;

  for (var i = 0; i < connectedNodes.length; i++) {
    id = connectedNodes[i];

    if (!visited[id]) {
      explore(connectedNodes[i], adjacencies);
    }
  }
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

  for (var i = 0; i < edges; i++) {
    edgeInfo = inputs[i].split(' ');
    firstVertice = toInt(edgeInfo[0]);
    secondVertice = toInt(edgeInfo[1]);

    adjacencies[firstVertice].push(secondVertice);
    adjacencies[secondVertice].push(firstVertice);
  }

  for (var nodeId = 1; nodeId < adjacencies.length; nodeId++) {
    if (!visited[nodeId]) {
      explore(nodeId, adjacencies);
      connectedComponents++;
    }
  }

  console.log(connectedComponents);
}

main(inputData);
