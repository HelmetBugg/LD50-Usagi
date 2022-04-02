"use strict";

function player() { }
function collectable() { 

  let container = h.circle(0,"white", "white", 2, 500, 500);
  let collectable = h.circle(16, "gold", "black", 2, 0, 0);
  
  let shadow =h.circle(16, "black","black", 2, 0,25);
  shadow.alpha =0.5;

  map.addChild(container);
  container.addChild(collectable);
  container.addChild(shadow);

  h.slide(collectable, 0, 5, 10, "smoothstep", true);


  container.update = function () {
  
    if (h.hitTestCircle(ball, container)) {
      console.log("hit");
    }

  }

  return container;
}

function guard() {

  // Placeholder graphics
  let guard = h.circle(32, "red", "black", 2, 50, 50);
  var head = h.rectangle(16, 16, "red", "black", 2, 0, 0);
  head.rotation = -0.8;
  guard.setPivot(0.5, 0.5);
  guard.addChild(head);
  map.addChild(guard);

  // Path finding boilerplate
  // waypoints, without height/width distance function doesn't work.
  guard.waypoints = [
    { 'x': 200, 'y': 50, 'width':10, 'height':10 },
    { 'x': 200, 'y': 200, 'width':10, 'height':10 },
    { 'x': 50, 'y': 200, 'width':10, 'height':10 },
    { 'x': 50, 'y': 50, 'width':10, 'height':10 }
  ];
  guard.waypointIncrement = 0;
  guard.target = guard.waypoints[guard.waypointIncrement];
  guard.speed = 3;
  guard.rotationSpeed = 0.08;
  if (h.debug){
    for (const w of guard.waypoints){
      let waypoint = h.circle(8, "orange", "black", 0, w.x, w.y);
      waypoint.setPivot(0.5, 0.5);
      map.addChild(waypoint);
    }
  }

  // Line of sight boilerplate
  var lineOfSite = 250;
  for(var i = 0; i < 10; i++){
    let line = siteLine(lineOfSite);
    line.rotation = (0.15 * i) + -0.4;
    guard.addChild(line);
  }

  guard.update = function () {
    guard.targetCheck();
    // Turn guard to face target.
    if (Math.floor(guard.rotation * 10) < Math.floor(h.angle(guard, guard.target) * 10)) {
      guard.rotation += guard.rotationSpeed;
    } else if (Math.floor(guard.rotation * 10) > Math.floor(h.angle(guard, guard.target) * 10)) {
      guard.rotation -= guard.rotationSpeed;
    }
    h.followConstant(guard, guard.target, guard.speed);
  }


  // If he's reached his target move onto the next, loop if exhausted waypoints.
  guard.targetCheck = function () {
    if (h.distance(guard, guard.target) < (guard.speed + 1)){
      if ((guard.waypointIncrement + 1) >= guard.waypoints.length){
        guard.waypointIncrement = 0;
      } else {
        guard.waypointIncrement++;
      }
      guard.target = guard.waypoints[guard.waypointIncrement];
    }
    //console.log(h.distance(guard, guard.target));
  }

  return guard;
}


function siteLine(length){
  var line = h.rectangle(length, 16, "green", "black", 0, 0, 0);
  line.setPivot(0, 0.5);
  line.alpha = 0.25;

  line.check = function(){
    // Need to come back and make the player
    if (line.angleHitTest(ball, line)){
      this.alpha = 1;
      console.log("spotted");
      return true;
    }
    line.alpha = 0.25;
    return false;
  }

  line.angledHitTest = function(sprite1, sprite2){
    for(var i=0; i<sprite1.width; i+=10){
        xValue = sprite1.x + (i * Math.cos(sprite1.rotation));
        yValue = sprite1.y + (i * Math.sin(sprite1.rotation));
        if (h.hit({x: xValue, y:yValue, width:16, height:16}, sprite2)) {
            return true;
        }       
    }
    return false;
  }

  return line;
}