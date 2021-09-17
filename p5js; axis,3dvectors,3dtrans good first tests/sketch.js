function sleep(seconds) {
  let milliseconds = 1000*seconds
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
Array.prototype.swap = function(index_A, index_B) {
  let input = this;

  let temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
}
let font,
  fontsize = 40;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('/AntenderHandwriting-Final1.ttf');
}
const nodeSize = 8;
const canvasSize = 600;

var node0 = [-100, -100, -100];
var node1 = [-100, -100, 100];
var node2 = [-100, 100, -100];
var node3 = [-100, 100, 100];
var node4 = [100, -100, -100];
var node5 = [100, -100, 100];
var node6 = [100, 100, -100];
var node7 = [100, 100, 100];

var node8 = [-150,-100,-100]
var nodes = [node0, node1, node2, node3, node4, node5, node6, node7,node8];
var RESET_NODES = function() {
  node0 = [-100, -100, -100];
  node1 = [-100, -100, 100];
  node2 = [-100, 100, -100];
  node3 = [-100, 100, 100];
  node4 = [100, -100, -100];
  node5 = [100, -100, 100];
  node6 = [100, 100, -100];
  node7 = [100, 100, 100];
}

var edge0 = [0, 1];
var edge1 = [1, 3];
var edge2 = [3, 2];
var edge3 = [2, 0];
var edge4 = [4, 5];
var edge5 = [5, 7];
var edge6 = [7, 6];
var edge7 = [6, 4];
var edge8 = [0, 4];
var edge9 = [1, 5];
var edge10 = [2, 6];
var edge11 = [3, 7];

var edge12 = [0,8]
var edges = [
  edge0,
  edge1,
  edge2,
  edge3,
  edge4,
  edge5,
  edge6,
  edge7,
  edge8,
  edge9,
  edge10,
  edge11,
  edge12
];

var EDGES_OBJ = {}

var RESET_EDGES = function() {
  edge0 = [0, 1];
  edge1 = [1, 3];
  edge2 = [3, 2];
  edge3 = [2, 0];
  edge4 = [4, 5];
  edge5 = [5, 7];
  edge6 = [7, 6];
  edge7 = [6, 4];
  edge8 = [0, 4];
  edge9 = [1, 5];
  edge10 = [2, 6];
  edge11 = [3, 7];
}

// Rotate shape around the z-axis
var rotateZ3D = function (theta) {
  var sinTheta = Math.sin(theta);
  var cosTheta = Math.cos(theta);

  for (var n = 0; n < nodes.length; n++) {
    var node = nodes[n];
    var x = node[0];
    var y = node[1];
    node[0] = x * cosTheta - y * sinTheta;
    node[1] = y * cosTheta + x * sinTheta;
  }
};

var rotateX3D = function (theta) {
  var sinTheta = Math.sin(theta);
  var cosTheta = Math.cos(theta);

  for (var n = 0; n < nodes.length; n++) {
    var node = nodes[n];
    var y = node[1];
    var z = node[2];
    node[1] = y * cosTheta - z * sinTheta;
    node[2] = z * cosTheta + y * sinTheta;
  }
};
var rotateY3D = function (theta) {
  var sinTheta = Math.sin(theta);
  var cosTheta = Math.cos(theta);

  for (var n = 0; n < nodes.length; n++) {
    var node = nodes[n];
    var x = node[0];
    var z = node[2];
    node[0] = x * cosTheta + z * sinTheta;
    node[2] = z * cosTheta - x * sinTheta;
  }
};

function setup() {
  // Create Canvas of given size
  //smooth();
  createCanvas(canvasSize*2, canvasSize*2,WEBGL);
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  var backgroundColor = color(255, 255, 255);
  var nodeColor = color("blue");
  var edgeColor = color(34, 68, 204);
  
  background(backgroundColor);

  //edges
  stroke(edgeColor);
  //nodes
  fill(nodeColor);
  //vector_  = createVector(1,1,6)

  
}
let myFrames= {num: 0};
const animation_time = 10;
const frame_rate = 60;
var sign_x = 1,sign_y= 1,sign_z= 1 ;
var speed = 1;
var degrees_per_frames =  (360 / (animation_time * frame_rate)) *(Math.PI/180)

var v0;
var v1;//!new p5.Vector([x], [y], [z])

var CURRENT_ANGLE = 0
function draw() {
  background(0);
  push()
  CustomPyramid(...node1,...node5,{dx : 50,dy : 50,dz : 50},"white")

  pop()

  push();
  
  //pushMatrix();

  translate(canvasSize/20, canvasSize/20);
  
  for (var e = 0; e < edges.length; e++) {
    var n0 = edges[e][0];
    var n1 = edges[e][1];

    var node0_ = nodes[n0];
    var node1_ = nodes[n1];
    switch(e) {
      case 10://x axis def
        v0 = createVector(...node2)
        v1 = createVector(...node6)
        stroke("#FF0000")
        strokeWeight(5)
        CustomPyramid(...node6,...node2,{dx : 50,dy : 50,dz : 50},"#FF0000")
        //drawArrow(v0,v1,"#FF0000")
        
        
        
        break
      case 2://z axis def
        v0 = createVector(...node3)//!ERROR?
        v1 = createVector(...node2)
        stroke("#0492C2")
        strokeWeight(5)
        CustomPyramid(...node3,...node2,{dx : 50,dy : 50,dz : 50},"#0492C2")
        //drawArrow(v0,v1,"#0492C2")
        

        

        break
      case 3://y axis def (vertical)
        v0 = createVector(...node2)
        v1 = createVector(...node0)
        stroke("#028A0F")
        strokeWeight(5)
        CustomPyramid(...node0,...node2,{dx : 50,dy : 50,dz : 50},"#028A0F")
        //drawArrow(v0,v1,"#028A0F")
        
        break
      default:
        stroke("#1520A6")
        strokeWeight(1)
        line(node0_[0], node0_[1],  node1_[0], node1_[1]);
        
    }
    
    
   
    
  }

  // noStroke()
  

  for (var n = 0; n < nodes.length; n++) {
    var node = nodes[n];
    fill(color(40, 168, 107));
    ellipse(node[0], node[1], nodeSize, nodeSize);
    fill(255);
    if (n ===0) {
      
      fill(255);
      ellipse(node[0], node[1], nodeSize, nodeSize);
      
    }
    text(`${n+1}`,node[0]+nodeSize*2, node[1]+nodeSize*2);
  }
  
  //popMatrix();
 
  stroke('white')
  strokeWeight(3)
  //(1 frame / 1/45 second ) * 10 second = 450 frames
  // 360 degrees / 450 frames = 0.8 degrees/frame
  rotateZ3D(sign_z*degrees_per_frames*speed);
  rotateY3D(sign_y*degrees_per_frames*speed);
  rotateX3D(sign_x*degrees_per_frames*speed);
  //! Replace entries with this regex: \(.*?(node0\[).*?\) 

  sleep(1/60);
  frames++; //! from 'Window' ??? 
  //myFrames++;
  //let t = millis() / 1000;
  let t = frames / frame_rate

  // console.log(++myFrames.num)

  // pointLight(color('#f00'), p5.Vector.fromAngles(t * 1.0, t * 1.3,100));
  // pointLight(color('#0f0'), p5.Vector.fromAngles(t * 1.1, t * 1.2, 100));
  // pointLight(color('#00f'), p5.Vector.fromAngles(t * 1.2, t * 1.1, 100));
  
  // sphere(15);
  pop();


}
function mousePressed() {
  
  RESET_NODES()
  RESET_EDGES()
  // nodes = [node0, node1, node2, node3, node4, node5, node6, node7];
  // edges = [
  //   edge0,
  //   edge1,
  //   edge2,
  //   edge3,
  //   edge4,
  //   edge5,
  //   edge6,
  //   edge7,
  //   edge8,
  //   edge9,
  //   edge10,
  //   edge11,
  // ];
  sleep(1)
}

function keyTyped(){
  switch(key) {
    case 'X':
      sign_x= Math.abs(sign_x) ^ 1
    case 'Y':
      sign_y = Math.abs(sign_y) ^ 1
    case 'Z':
      sign_z = Math.abs(sign_z) ^ 1
    case 'x':
      sign_x *= -1
    case 'y':
      sign_y *= -1
    case 'z':
      sign_z *= -1
    
    default:
      return false
  }

}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  //translate(base.x, base.y);
  line(base.x, base.y, vec.x, vec.y);
  
  rotate(vec.heading())
  rect()
  let arrowSize = 10;
  translate(vec.mag() - arrowSize , 0,0);
  triangle(0, arrowSize / 2, 0, arrowSize / 2, arrowSize, 0);
  pop();
}




//!const degitPrecision = 1e5;
//!let mag = Math.round(dist(x1, y1, z1, x2, y2, z2)* degitPrecision + Number.EPSILON ) / degitPrecision 

//TODO ff = o => f(...withNamed(['height', 'width'], o)) FOR {dx,dy,dz}
function CustomPyramid(x1, y1, z1, x2, y2, z2,ScalingOfPyramid,genColor){
  /**
   * create custome pyramid that looks like R3 vector
   *
   * @param {int} dx xScalingOfPyramid
   * @param {int} dy yScalingOfPyramid
   * @param {int} dz zScalingOfPyramid
   */
  var [dx,dy,dz] = [ScalingOfPyramid.dx,ScalingOfPyramid.dy,ScalingOfPyramid.dz]
  //*FOR vector in XY plane (consider height = z axis)
  //corner0 : (Ox,Oy,Oz)
  //corner1: (Ox+dx,Oy,Oz)
  //corner2 :(Ox,Oy+dy,Oz)
  //corner3 :(Ox+dx,Oy+dy,Oz)

  //summit : (Ox+dx/2,Oy+dy/2,Oz+dz)

  //arrow_vector_line :  dist( (Ox+dx/2,Oy+dy/2,Oz), (Ox+dx/2,Oy+dy/2,Oz+mag()) )
  // x1 = x2 = Ox+dx/2
  // y1 = y2 = Oy+dy/2
  // z2 = z1 + mag() = Oz + mag()


  // let pairs = [x1,x2,y1,y2,z1,z2].reduce((list, _, index, source) => {
  //   if (index % 2 === 0) {
  //       list.push(source.slice(index, index + 2));
  //   }
  //   return list;
  // }, []);
  // let pairs_diff = Array.from(pairs, pair => Math.abs(pair[0] - pair[1]) );
  // let indexOfHeightAxis = pairs_diff.reduce((ixMax, diff, ix, arr) => diff > arr[ixMax] ? ix : ixMax, 0);
  // pairs.swap(indexOfHeightAxis,2);
  // [x1,x2,y1,y2,z1,z2] = [].concat.apply([], pairs);
  
  var vec = createVector(x2,y2,z2)
  var base = createVector(x1,y1,z1)
  var mag= Math.abs(dist(x1,y1,z1,x2,y2,z2))
  let {Oz,Oy,Ox} = {Oz : z1,   Oy : y1 - (dy/2),   Ox : x1 - (dx/2)}

  var corner0 = [Ox,Oy,Oz].slice(),
    corner1 = [Ox+dx,Oy,Oz].slice(),
    corner2 = [Ox,Oy+dy,Oz].slice(),
    corner3= [Ox+dx,Oy+dy,Oz].slice(),
    summit = [Ox+dx/2,Oy+dy/2,Oz+dz].slice()
    base_arrow = [Ox+dx/2,Oy+dy/2,Oz-dz-mag].slice() //TODO
  push()
  // rotateX(sign_x*degrees_per_frames*frameCount/60)
  // rotateY(sign_y*degrees_per_frames*frameCount/60)
  // rotateZ(sign_z*degrees_per_frames*frameCount/60)

  
  stroke(150);
  strokeWeight(3);
  line(...corner0,...corner1);
  line(...corner1,...corner3);
  line(...corner3,...corner2);
  line(...corner2,...corner0);
  line(...corner0,...summit);
  line(...corner1,...summit);
  line(...corner3,...summit);
  line(...corner2,...summit); 
  strokeWeight(5);
  stroke(genColor);

  
  line(base.x, base.y, vec.x, vec.y);


  // rotate(vec.heading()) //atan(y/x)
  
  // translate( vec.mag() - 10,0,0)
  // triangle(0, 10 / 2, 0, -10 / 2, 10, 0);
  fill(genColor)
  noStroke();
  beginShape();
  vertex(...corner0);
  vertex(...summit);
  vertex(...corner1);
  endShape()
  beginShape();
  vertex(...corner0);
  vertex(...summit);
  vertex(...corner2)
  endShape();
  beginShape();
  vertex(...corner3);
  vertex(...summit);
  vertex(...corner1);
  endShape()
  beginShape();
  vertex(...corner3);
  vertex(...summit);
  vertex(...corner2);
  endShape();

  pop();

}


//TODO beginSHape,beginContour (GOOD FOR ARDUINO+ BUTTONS AND AUDIO)
//TODO ALGEBRE LINEAIRE REVISER

//TODO VERY COOL FOR TERMINAL 3D SHAPES AND PHYSICS (PARTICLES,FLUIDS,...)

