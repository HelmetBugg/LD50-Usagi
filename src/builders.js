"use strict";
function player() {
  var body = h.circle(15, "black", "black", 0, 0, 0);
  body.anchor.set(0.5, 0.5);
  map.addChild(body);

  var graphic = h.sprite("res/bunny_thief_1.png");
  graphic.anchor.set(0.5, 0.5);
  graphic.rotation = 1.45;
  body.addChild(graphic);
  body.graphic = graphic;

  body.speed = 4;
  body.score = 0;
  body.coolDown = 6;
  body.teleportReady = true;

  body.update = function() {
    if(player.wouldBreakBounds({'x': player.x + player.vx, 'y': player.y + player.vy})){
      player.vx = 0;
      player.vy = 0;
      map.vx = 0;
      map.vy = 0;
    }
    h.move(player);
    h.move(map);
    player.rotation = findPlayerAngle(h.pointer);
  }

  body.teleport = function(newX, newY){
    if (!player.wouldBreakBounds({'x': newX, 'y': newY})){
      player.teleportReady = false;
      player.graphic.tint = 0xe60000;
      var mapXOffset = player.x - newX;
      var mapYOffset = player.y - newY;
      player.x = newX;
      player.y = newY;
      map.x += mapXOffset;
      map.y += mapYOffset;
      setTimeout(function(){
        player.teleportReady = true;
        player.graphic.tint = 0xffffff;
      }, body.coolDown*1000);
    }
  }

  body.wouldBreakBounds = function(newXY){
    if(newXY.x <= 0 || newXY.x >= map.width){
      return true;
    }
    if(newXY.y <= 0 || newXY.y >= map.height){
      return true;
    }
    return false;
  }

  return body;
}

function collectable(x, y, score, sprite = "") {
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
  container.score = score;
  h.slide(collectable, 0, 5, 10, "smoothstep", true);
  
  container.popup = function() {
    var scoreText = h.text(container.score, "20px", "orange", container.x, container.y);
    map.addChild(scoreText);
    h.slide(scoreText, container.x - 50, container.y - 100, 60, "smoothstep", true)
    player.score += container.score;
    h.wait(500, () => h.remove(scoreText));
  }

  container.update = function () {
    if (h.hit(player, collison)) {
      var index = container.find();
      mapCollectables.splice(index, 1);
      h.remove(container);
      container.popup()
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


function guard(x, y, waypoints) {
  // Placeholder graphics
  let guard = h.circle(18, "red", "black", 2, x, y);
  var graphic = h.sprite("res/farmer_" + h.randomInt(1, 3) + ".png");
  graphic.anchor.set(0.5, 0.5);
  graphic.rotation = 1.45;
  guard.pivotX = guard.pivotY = 0.5;
  guard.addChild(graphic);
  map.addChild(guard);
  guard.state = "patrol";

  // Path finding boilerplate
  // waypoints, without height/width distance function doesn't work.
  guard.waypoints = waypoints;
  guard.waypointIncrement = 0;
  guard.target = guard.waypoints[guard.waypointIncrement];
  guard.speed = 1.5;
  guard.rotationSpeed = 0.05;
  /*if (h.debug) {
    for (const w of guard.waypoints) {
      let waypoint = h.circle(8, "orange", "black", 0, w.x, w.y);
      waypoint.setPivot(0.5, 0.5);
      map.addChild(waypoint);
    }
  }*/

  // Line of sight boilerplate
  var range = 200;
  var vision = h.circle(range, "green", "black", 0, 10, 10);
  vision.alpha = 0.25;
  guard.vision = vision;
  map.addChild(vision);

  guard.checkLineOfSight = function () {
    var result = true;
    vision.alpha = 0.55;
    if (!h.lineOfSight(guard, player, mapCollisions, 16)) {
      result = false;
    }
    var visionLocation ={
      'x': guard.x + (range * Math.cos(guard.rotation)),
      'y': guard.y + (range * Math.sin(guard.rotation)),
      'width': 1,
      'height': 1
    };
    if(range-10 <= h.distance(visionLocation, player)) {
      result = false;
      vision.alpha = 0.25;
    }
    if(!h.hitTestCircle(guard.vision, player)){
      result = false;
      vision.alpha = 0.25;
    }
    return result;
  }


  guard.update = function () {
    guard.vision.x = guard.x;
    guard.vision.y = guard.y;
    guard.vision.rotation = guard.rotation + -0.8;
    if(h.hitTestCircle(guard, player)){
      death();
    }
    if (guard.state === "patrol"){
      guard.targetCheck();
      if(guard.checkLineOfSight()){
        startCountDown();
      }
    }
    // Turn guard to face target.
    if (Math.floor(guard.rotation * 10) < Math.floor(h.angle(guard, guard.target) * 10)) {
      guard.rotation += guard.rotationSpeed;
    } else if (Math.floor(guard.rotation * 10) > Math.floor(h.angle(guard, guard.target) * 10)) {
      guard.rotation -= guard.rotationSpeed;
    }
    /*var distanceRight = Math.abs(Math.floor(guard.rotation * 100) - Math.floor(h.angle(guard, guard.target) * 100))
    var distanceLeft = Math.abs(Math.floor(guard.rotation * 100) - Math.floor(h.angle(guard, guard.target) * 100))
    if (distanceRight < distanceLeft) {
      guard.rotation += guard.rotationSpeed;
    } else {
      guard.rotation -= guard.rotationSpeed;
    }*/
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
  }

  return guard;
}

function tooltip(x, y, text){
  var menu = h.rectangle(text.length * 20, 24, "powderblue", "white", 0, x, y);
  var text = h.text(text, "20px", "orange", 0, 0);
  menu.addChild(text);
  menu.anchor.set(0.5, 0.5);
  text.anchor.set(0.5, 0.5);
  menu.text = text;
  return menu;
}