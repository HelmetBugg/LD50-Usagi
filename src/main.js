"use strict";
let thingsToLoad = [
  "res/735315.png"
]

var h = hexi(640, 480, setup, thingsToLoad);
h.debug = true;
h.scaleToWindow();
var player;
var map;
var test_guard;
var mapCollectables = [];

h.start();

function setup() {
  map = h.sprite("res/735315.png");
  player = player();
  
  test_guard = guard();

  var Collect1 = collectable();
  var Collect2 = collectable();
  Collect2.x += 100;
  var Collect3 = collectable();
  Collect3.x += 200;

  mapCollectables= [];
  mapCollectables.push(Collect1, Collect2, Collect3);

  document.addEventListener('keyup', handleKeyUp);

  document.addEventListener('keydown', handleKeyDown);
  h.state = play;
}

function findPlayerAngle(t1) {
  var t2 = {};
  t2.x = player.x + map.x;
  t2.y = player.y + map.y;
  return Math.atan2(t1.y - t2.y, t1.x - t2.x);
}

function play() {
  h.move(player);
  h.move(map);
  player.rotation = findPlayerAngle(h.pointer);
  test_guard.update();

  for (var collectable of mapCollectables){
    collectable.update();
  }
}

