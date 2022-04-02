"use strict";
let thingsToLoad = [
  "res/forest.png"
]

var h = hexi(1280, 720, setup, thingsToLoad);

h.scaleToWindow();
var ball = undefined;
var map;
h.start();

function setup() {
  map = h.sprite("res/forest.png");
  map.scaleX = map.scaleY = 6;
  ball = h.circle(32, "white", "black", 2, 192, 256);
  h.stage.putCenter(ball);
  var head = h.rectangle(16, 16, "white", "black", 2, 0, 0);
  ball.setPivot(0.5, 0.5);
  ball.addChild(head);
  head.rotation = -0.8;
  initKeyboard();
  h.state = play;
}


function play() {
  h.move(ball);
  h.move(map);
  ball.rotation = h.angle(ball, h.pointer);
}

function initKeyboard() {

	let speed = 16;
  let wKey = h.keyboard(87);
  let sKey = h.keyboard(83);
  let dKey = h.keyboard(68);
  let aKey = h.keyboard(65);

  wKey.press = () => {
    ball.vy = -5;
    ball.vx = 0;
  };
  wKey.release = () => {
    ball.vy = 0;
    ball.vx = 0;
  };

  sKey.press = () => {
    ball.vy = 5;
    ball.vy = -5;
    ball.vx = 0;
  };
  sKey.release = () => {
    ball.vy =0;
    ball.vx = 0;
  };

  dKey.press = () => {
    ball.vy = 0;
    ball.vx = 5;
  };
  dKey.release = () => {
    ball.vy =0;
    ball.vx = 0;
  };

  aKey.press = () => {
    ball.vy = 0;
    ball.vx = -5;
  };
  aKey.release = () => {
    ball.vy = 0;
    ball.vx = 0;
  };
}



