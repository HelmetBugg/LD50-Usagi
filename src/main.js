"use strict";
let thingsToLoad = [
  "res/735315.png"
]

var h = hexi(1280, 720, setup, thingsToLoad);
h.debug = true;
h.scaleToWindow();
var ball = undefined;
var map;
var test_guard;
h.start();

function setup() {
  map = h.sprite("res/735315.png");
  ball = h.circle(32, "white", "black", 2, 192, 256);
  map.addChild(ball);
  h.stage.putCenter(ball);
  var head = h.rectangle(16, 16, "white", "black", 2, 0, 0);
  ball.setPivot(0.5, 0.5);
  ball.addChild(head);
  head.rotation = -0.8;

  test_guard = guard();
  initKeyboard();
  h.state = play;
}

function findPlayerAngle(t1) {
  var t2 = {};
  t2.x = ball.x + map.x;
  t2.y = ball.y + map.y;
  return Math.atan2(t1.y - t2.y, t1.x - t2.x);
}

function play() {
  h.move(ball);
  h.move(map);
  ball.rotation = findPlayerAngle(h.pointer);
  test_guard.update();
}

function initKeyboard() {
  let speed = 16;
  let wKey = h.keyboard(87);
  let sKey = h.keyboard(83);
  let dKey = h.keyboard(68);
  let aKey = h.keyboard(65);

  wKey.press = () => {
    ball.vy = -5;
    map.vy = 5;
  };
  wKey.release = () => {
    if (!sKey.isDown) {
      map.vy = 0;
      ball.vy = 0;
    }
  };

  sKey.press = () => {
    ball.vy = 5;
    map.vy = -5;
  };
  sKey.release = () => {
    if (!wKey.isDown) {
      map.vy = 0;
      ball.vy = 0;
    }
  };

  dKey.press = () => {
    ball.vx = 5;
    map.vx = -5;
  };
  dKey.release = () => {
    if (!wKey.isDown) {
      ball.vx = 0;
      map.vx = 0;
    }
  };

  aKey.press = () => {
    ball.vx = -5;
    map.vx = 5;
  };
  aKey.release = () => {
    if (!wKey.isDown) {
      ball.vx = 0;
      map.vx = 0;
    }
  };
}



