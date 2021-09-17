# Processing-Maths-Physics-visuals-with-p5js-and-go-perhaps-
*Title says it all, this a work in progress of 3D and complex systems where tensors and 3D malleable objects proliferate with the power of GPL and Processing.*

# Basic principles used for the first tests: Arcs and rotations of R3 indepedent vectors
## *>> Equations are show here in form of matrices, because the affine transformations they undergo is thus easily explained*
![equations in forms of matrices](https://latex.codecogs.com/gif.latex?%7B%5Cdisplaystyle%20%7B%5Cbegin%7Baligned%7DR%3DR_%7Bz%7D%28%5Calpha%20%29%5C%2CR_%7By%7D%28%5Cbeta%20%29%5C%2CR_%7Bx%7D%28%5Cgamma%20%29%26%3D%7B%5Coverset%20%7B%5Ctext%7Byaw%7D%7D%7B%5Cbegin%7Bbmatrix%7D%5Ccos%20%5Calpha%20%26-%5Csin%20%5Calpha%20%260%5C%5C%5Csin%20%5Calpha%20%26%5Ccos%20%5Calpha%20%260%5C%5C0%260%261%5C%5C%5Cend%7Bbmatrix%7D%7D%7D%7B%5Coverset%20%7B%5Ctext%7Bpitch%7D%7D%7B%5Cbegin%7Bbmatrix%7D%5Ccos%20%5Cbeta%20%260%26%5Csin%20%5Cbeta%20%5C%5C0%261%260%5C%5C-%5Csin%20%5Cbeta%20%260%26%5Ccos%20%5Cbeta%20%5C%5C%5Cend%7Bbmatrix%7D%7D%7D%7B%5Coverset%20%7B%5Ctext%7Broll%7D%7D%7B%5Cbegin%7Bbmatrix%7D1%260%260%5C%5C0%26%5Ccos%20%5Cgamma%20%26-%5Csin%20%5Cgamma%20%5C%5C0%26%5Csin%20%5Cgamma%20%26%5Ccos%20%5Cgamma%20%5C%5C%5Cend%7Bbmatrix%7D%7D%7D%5C%5C%26%3D%7B%5Cbegin%7Bbmatrix%7D%5Ccos%20%5Calpha%20%5Ccos%20%5Cbeta%20%26%5Ccos%20%5Calpha%20%5Csin%20%5Cbeta%20%5Csin%20%5Cgamma%20-%5Csin%20%5Calpha%20%5Ccos%20%5Cgamma%20%26%5Ccos%20%5Calpha%20%5Csin%20%5Cbeta%20%5Ccos%20%5Cgamma%20&plus;%5Csin%20%5Calpha%20%5Csin%20%5Cgamma%20%5C%5C%5Csin%20%5Calpha%20%5Ccos%20%5Cbeta%20%26%5Csin%20%5Calpha%20%5Csin%20%5Cbeta%20%5Csin%20%5Cgamma%20&plus;%5Ccos%20%5Calpha%20%5Ccos%20%5Cgamma%20%26%5Csin%20%5Calpha%20%5Csin%20%5Cbeta%20%5Ccos%20%5Cgamma%20-%5Ccos%20%5Calpha%20%5Csin%20%5Cgamma%20%5C%5C-%5Csin%20%5Cbeta%20%26%5Ccos%20%5Cbeta%20%5Csin%20%5Cgamma%20%26%5Ccos%20%5Cbeta%20%5Ccos%20%5Cgamma%20%5C%5C%5Cend%7Bbmatrix%7D%7D%5Cend%7Baligned%7D%7D%7D) 

## Demonstration of personnal customization and keybinds while manipulating a simulated polyhedron (cube is first test case)

![asdad](https://github.com/ChiefsBestPal/Processing-Maths-Physics-visuals-with-p5js-and-go-perhaps-/blob/master/Tests%20showcase/Controls%20of%20basic%20polyhedron%20generated%20by%20pure%20math.gif)

# Coming soon: General implementation of this with optimized data structure (Could be used for differential equations and PHYSICS

![sdadsa](https://github.com/ChiefsBestPal/Processing-Maths-Physics-visuals-with-p5js-and-go-perhaps-/blob/master/Tests%20showcase/Screenshot%202021-09-17%20020024.png)

# Important code in sketch.js ./first tests
**This cool and epic code also... tends to generate errors depending on which engine it runs (not so cool). This needs to be fixed soon, but for now
the dangerous math parts are commented out so the first tests of the realease are working**
```javascript
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
```
