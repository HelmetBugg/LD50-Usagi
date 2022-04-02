"use strict";

function player() { }
function collectable(x,y) {

  let container = h.circle(0, "white", "white", 2, x, y);
  let collectable = h.circle(16, "gold", "black", 2, 0, 0);
  let collison = h.rectangle(16, 16, "black", "white", 0, container.x, container.y);
  let shadow = h.circle(16, "black", "black", 2, 0, 25);
  shadow.alpha = 0.25;
  collison.visible = false;
  map.addChild(collison);
  map.addChild(container);
  container.addChild(collectable);
  container.addChild(shadow);

  h.slide(collectable, 0, 5, 10, "smoothstep", true);
  container.update = function () {
    if (h.hit(ball, collison)) {
      console.log("hit");
      var index = container.find();
      mapCollectables.splice(index, 1);
      console.log(mapCollectables);
      h.remove(container);
    }


  }
  container.find = function () {
    for (var i = 0; i <= mapCollectables.length; i++) {

      if (mapCollectables[i] == container) {
        return i;
      }

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
    { 'x': 200, 'y': 50, 'width': 10, 'height': 10 },
    { 'x': 200, 'y': 200, 'width': 10, 'height': 10 },
    { 'x': 50, 'y': 200, 'width': 10, 'height': 10 },
    { 'x': 50, 'y': 50, 'width': 10, 'height': 10 }
  ];
  guard.waypointIncrement = 0;
  guard.target = guard.waypoints[guard.waypointIncrement];
  guard.speed = 3;
  guard.rotationSpeed = 0.08;
  if (h.debug) {
    for (const w of guard.waypoints) {
      let waypoint = h.circle(8, "orange", "black", 0, w.x, w.y);
      waypoint.setPivot(0.5, 0.5);
      map.addChild(waypoint);
    }
  }

  // Line of sight boilerplate
  var range = 100;
  var vision = h.rectangle(range, range, "green", "black", 0, 10, 10);
  vision.alpha = 0.25;
  guard.vision = vision;
  map.addChild(vision)

  guard.checkLineOfSight = function () {
    var result = true;
    vision.alpha = 0.55;
    if (!h.lineOfSight(guard, ball, [], 16)) {
      result = false;
    }
    if (range <= h.distance(guard, ball)) {
      result = false;
    }
    if (!h.hit(guard.vision, ball)) {
      result = false;
      vision.alpha = 0.25;
    }
    return result;
  }


  guard.update = function () {
    guard.vision.x = guard.x;
    guard.vision.y = guard.y;
    guard.vision.rotation = guard.rotation + -0.8;
    console.log(guard.checkLineOfSight());
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
    if (h.distance(guard, guard.target) < (guard.speed + 1)) {
      if ((guard.waypointIncrement + 1) >= guard.waypoints.length) {
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