var multBitPow = (base, exp) => {
  let res = 1.0;
  base = Number(base);
  while (exp > 0) {
    if (exp & (1 != 0)) {
      res *= base;
    }
    exp >>= 1;
    base *= base;
  }
  return res;
};
const degitPrecision = 1e5;
var magnitude = (x1, y1, z1, x2, y2, z2) => {
  return (
    Math.round(
      Math.sqrt(
        multBitPow(x2 - x1, 2) + multBitPow(y2 - y1, 2) + multBitPow(z2 - z1, 2)
      ) *
        degitPrecision +
        Number.EPSILON
    ) / degitPrecision
  );
};

class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
}
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
    let i = 1;
    while (typeof arguments[i] === "object") {
      for (const [node, neighbours] of Object.entries(arguments[i])) {
        this.AdjList.set(node, neighbours);
      }
      i++;
    }
  }

  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  bfs(startingNode) {
    var _startingNode = startingNode.toString();
    var res = new Array();
    // create a visited object
    var visited = {};

    // Create an object for queue
    var q = new Queue();

    // add the starting node to the queue
    visited[_startingNode] = true;
    q.enqueue(_startingNode);

    // loop until queue is element
    while (!q.isEmpty()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback function
      //? console.log(getQueueElement);
      if (getQueueElement != _startingNode) {
        res.push(getQueueElement);
      }
      // get the adjacent list for current vertex
      var get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
    return res;
  }
  dfs(startingNode) {
    var visited = {};

    this.DFSUtil(startingNode.toString(), visited);
  }
  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
    }
  }
}
Array.prototype.removeOccurence = function (occurence) {
  return this.filter((element) => !(element === occurence));
};
function* enumerate(it, start = 0) {
  let i = start;
  for (const x of it) yield [i++, x];
}
var objectHelper = {
    atIndex: function(ix) {
      return this[ Object.keys(this)[ix] ];
    }
  };
Object.prototype.atIndex = function(property_ix) {
    return objectHelper.atIndex.call(this,property_ix)
}
function key(obj, idx) {
return objectHelper.key.call(obj, idx);
}

class PolyhedronData extends Graph {
  //Center of figure will always be (0,0,0)
  //since you can just p5.translate(sx,sy,sz) with push/pop Matrix

  setCenter(Ox = 0, Oy = 0, Oz = 0) {
    this.geoCenter = [Ox, Oy, Oz];
  }
  initNodes(...nodesCoords) {
    var NODES = new Object();
    for (let nodeNo = 0; nodeNo < this.noOfVertices; nodeNo++) {
      let coords = Array.from(nodesCoords[nodeNo]);
      NODES[`node${nodeNo + 1}`] = { x: coords[0], y: coords[1], z: coords[2] };
    }
    this.NODES = NODES;
    console.log(NODES);
  }

  initEdgesInfo() {
    let orderedEdges = [];

    this.AdjList.forEach((adj_nodes, key_node, currentMap) => {
      for (const adj_node of adj_nodes) {
        orderedEdges.push(Number(key_node), adj_node);
        let key_to_check = adj_node.toString(); //because the adj_value is also a key
        currentMap.set(
          key_to_check,
          Array.from(currentMap.get(key_to_check)).removeOccurence(
            Number(key_node)
          )
        );
      }
    });
    
    console.log(this.AdjList[Symbol.iterator]());

    var unorderedUniqueEdges = orderedEdges.reduce((list, _, index, source) => {
      if (index % 2 === 0) {
        list.push(source.slice(index, index + 2));
      }
      return list;
    }, []);

    var EDGES = new Object();
    for (const [edgeNo, edge] of enumerate(unorderedUniqueEdges, 1)) {
        let startNode = Object.values(this.NODES.atIndex(edge[0]-1)),
            endNode = Object.values(this.NODES.atIndex(edge[1]-1))
        EDGES[`edge${edgeNo}`] = {
            firstNode: startNode,
            secondNode: endNode,
            firstNodeNo:edge[0],
            secondNodeNo:edge[1],
            length : magnitude(...startNode,...endNode)
            
        };
    }
    
    this.EDGES = EDGES
    console.log(EDGES)
  }
  //get specs() {}
  // getAdjacentNodes(node) {

  //     return (super.AdjList.size >  super.bfs(node)
  // }
}
{
    function Cube() {
    //cube
    const numOfNodes = 8;
    var cubeData = new PolyhedronData(numOfNodes, {
        1: [2, 4, 5],
        2: [1, 3, 6],
        3: [2, 4, 7],
        4: [1, 3, 8],
        5: [6, 8, 1],
        6: [5, 7, 2],
        7: [6, 8, 3],
        8: [5, 7, 4],
    });

    //g.printGraph()
    //! NOTE: UPPER Y WILL BE NEGATIVE BECAUSE SCREEN PIXELS
    cubeData.setCenter();
    cubeData.initNodes(
        [-100, -100, -100],
        [-100, -100, +100],
        [+100, -100, +100],
        [+100, -100, -100],
        [-100, +100, -100],
        [-100, +100, +100],
        [+100, +100, +100],
        [+100, +100, -100]
    );
    cubeData.initEdgesInfo();
    var _NODES = cubeData.NODES,
        _EDGES = cubeData.EDGES

    console.log(_NODES.node1.x)
    console.log(_EDGES.edge1.length)


    }
}
Cube(); //TODO MAKE OTHER DEFAULT POLYHEDRONS ! 
//TODO MAKE SEPERATE MATH UTILS AND PROTO UTILS
//todo                  ONLY KEEP relevant Obj/classes here
