"use strict";
let thingsToLoad = [
  "res/735315.png",
  "res/bunny_thief_1.png",
  "res/farmer_1.png",
  "res/farmer_2.png",
  "res/farmer_3.png"
]

var h = hexi(640, 480, setup, thingsToLoad);
h.debug = true;
h.scaleToWindow();
var player;
var map;
var mapGuards = [];
var mapCollectables = [];
var mapCollisions = [];
var clockGraphic;
var clockInterval;
h.start();

function setup() {
  var title = h.text("Bunny Ninja Heist", "75px Tahoma", "black");
  h.stage.putCenter(title);
  var startButton = h.text("Play", "45px Tahoma", "grey");
  var credits = h.text("Credits: Brandon W, Ben K. \n Art: ARoachIFoundOnMyPillow", "15px Tahoma", "darkgrey");
  h.stage.putBottom(credits);
  credits.y -= 50; 
  h.stage.putCenter(startButton);
  startButton.y += 90;
  startButton.interact = true;
  h.pulse(startButton, 40, 0.3);
  startButton.press = () => {
    cleanUp(title)
    cleanUp(startButton)
    cleanUp(credits)
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
  var startTime = new Date();
  let getStart = startTime.getTime();
  player.st = (getStart/100);
  player.spawn = h.circle(10, "purple", "black", 0, level.spawn.x + (h.canvas.width/2), level.spawn.y + (h.canvas.height/2)+30);
  map.addChild(player.spawn);
  for(var npc of level.npcs){
    mapGuards.push(guard(npc.x, npc.y, npc.path));
  }
  for(var cbl of level.collectables){
    mapCollectables.push(collectable(cbl.x, cbl.y, cbl.value));
  }  
  for(var col of level.collisions){
    var colGraphic = h.rectangle(col.width, col.height, "forestgreen", "black", 0, col.x, col.y)
    map.addChild(colGraphic)
    colGraphic.alpha = 0.8;
    mapCollisions.push(colGraphic);
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
  var curtain = h.rectangle(h.canvas.width, h.canvas.height, "grey");
  curtain.alpha = 0;
  h.fadeIn(curtain);
  h.state = pause();
  var endTime = new Date();
  let getEnd = endTime.getTime();
  var et = (getEnd/100);
  var baseScore = 1000;
  var totalTime = Math.abs(et - player.st);
  var totalTimeScore = Math.floor(baseScore - totalTime); 
    totalTimeScore = Math.max(totalTimeScore, 0);
    player.tts = totalTimeScore;
  var ultraScore = Math.max((player.score + player.tts), 0);

  if (player.death){
    player.score = 0;
    player.tts = 0;
    ultraScore = 0;
  }
 
  var title = h.text("Score Summary", "45px Tahoma", "black", 10, 10);
  var foodScore = h.text("Food Score" + "  " + player.score, "30px Tahoma", "light-grey", 50, 100);
  var timeScore = h.text("Time Score" + "  " + player.tts, "30px Tahoma", "light-grey", 50, 200);
  var level1Button = h.text("Total Score" + "  " + ultraScore, "30px Tahoma", "light-grey", 100, 300);
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

function startCountDown(){
  for (var guard of mapGuards){
    guard.state = "seek";
    guard.target = player;
  }
  clockGraphic = tooltip(0,0, "Time Remaining 30s");
  h.stage.putCenter(clockGraphic);
  clockGraphic.y -= 100;
  clockGraphic.time = 30;
  clockGraphic.remaining = 30;
  clockInterval = setInterval(() => {
    clockGraphic.text.text = "Time Remaining " + clockGraphic.remaining + "s";
    if (clockGraphic.remaining > 0){
      clockGraphic.remaining--;
    } else {
      clearInterval(clockInterval);
      death();
    }
  }, 500);
}

function cleanUp(input){
	input.x += 20000;
	h.remove(input);		
}

function death(){
  player.death = true;
  clearInterval(clockInterval);
  scoreBoard();
};

function pause(){};