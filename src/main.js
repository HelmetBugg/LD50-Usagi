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
  mainMenu();
}

function mainMenu(){
  var title = h.text("Bunny Ninja Heist", "75px Tahoma", "black");
  h.stage.putCenter(title);
  var startButton = h.text("Play", "45px Tahoma", "grey");
  h.stage.putCenter(startButton);
  startButton.y += 90;
  startButton.interact = true;
  h.pulse(startButton, 40, 0.3);
  startButton.press = () => {
    cleanUp(title)
    cleanUp(startButton)
    levelSelect();
  }
}

function loadGame(){
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

function levelSelect(){
  var title = h.text("Level Select", "45px Tahoma", "black");
  var level1Button = h.text("Level 1", "30px Tahoma", "light-grey");
  level1Button.y = 90;
  var level2Button = h.text("Level 2", "30px Tahoma", "grey");
  level2Button.y = 180;
  var level3Button = h.text("Level 3", "30px Tahoma", "grey");
  level3Button.y = 270;
  level1Button.x = level2Button.x = level3Button.x = 50;
  //level1Button.interact = level2Button.interact = 
  level1Button.interact = true;
  level1Button.press = () => {
    cleanUp(level1Button)
    cleanUp(level2Button)
    cleanUp(level3Button)
    cleanUp(title)
    loadGame();
  }

}

function cleanUp(input){
	input.x += 20000;
	h.remove(input);		
}
