"use strict";
let thingsToLoad = [
  "res/735315.png"
]

var h = hexi(640, 480, setup, thingsToLoad);
h.debug = true;
h.scaleToWindow();
var player;
var map;
var mapGuards = [];
var mapCollectables = [];
h.start();

function setup() {
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

function firstPlay(){
  document.addEventListener('keyup', handleKeyUp);
  document.addEventListener('keydown', handleKeyDown);
  h.state = play;
}

function loadLevel(level){
  map = h.sprite(level.graphic);
  map.x -= level.spawn.x;
  map.y -= level.spawn.y;
  player = player();
  player.x = level.spawn.x + (h.canvas.width/2);
  player.y = level.spawn.y + (h.canvas.height/2); 

  player.spawn = h.circle(10, "purple", "black", 0, level.spawn.x + (h.canvas.width/2), level.spawn.y + (h.canvas.height/2)+30);
  map.addChild(player.spawn);
  for(var npc of level.npcs){
    mapGuards.push(guard(npc.x, npc.y, npc.path));
  }
  for(var cbl of level.collectables){
    mapCollectables.push(collectable(cbl.x, cbl.y, cbl.value));
  }  
}

function findPlayerAngle(t1) {
  var t2 = {};
  t2.x = player.x + map.x;
  t2.y = player.y + map.y;
  return Math.atan2(t1.y - t2.y, t1.x - t2.x);
}

function play() {
  player.update();
  for (var guard of mapGuards){
    guard.update();
  }
  for (var collectable of mapCollectables){
    collectable.update();
  }
}

function scoreBoard(){
  h.state = pause();
  var title = h.text("Score Summary", "45px Tahoma", "black", 10, 10);
  var foodScore = h.text("Food Score", "30px Tahoma", "light-grey", 50, 100);
  var timeScore = h.text("Time Score", "30px Tahoma", "light-grey", 50, 200);
  var level1Button = h.text("Total Score", "30px Tahoma", "light-grey", 100, 300);
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
    loadLevel(level1);
    firstPlay();
  }
}

function cleanUp(input){
	input.x += 20000;
	h.remove(input);		
}

function death(){
  player.score = 0;
  scoreBoard();
};

function pause(){};