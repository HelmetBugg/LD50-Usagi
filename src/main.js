"use strict";
var h = hexi(512, 512, setup);
h.scaleToWindow();
var ball = undefined;
h.start();

//The `setup` function to initialize your application
function setup() {

  //Make a ball sprite.
  //circle arguments: diameter, fillStyle, strokeStyle, lineWidth, x, y
  ball = h.circle(64, "powderBlue", "black", 2, 192, 256);

  initKeyboard();

  h.state=play;
}

function play() {
h.move(ball);
 
}


function initKeyboard() {
	let speed = 16;
  let wKey = h.keyboard(87);
  let sKey = h.keyboard(83);
  let dKey = h.keyboard(68);
  let aKey = h.keyboard(65);

//	dialogue.press = () => {
	
//	}

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



