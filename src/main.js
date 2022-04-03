"use strict";
let thingsToLoad = [
  "res/735315.png",
  "res/bunny_thief_1.png",
  "res/farmer_1.png",
  "res/farmer_2.png",
  "res/farmer_3.png",
  "res/burrow.png",

  "res/apple_green.png",
  "res/apple_red.png",
  "res/beet.png",
  "res/bell_pepper_red.png",
  "res/blueberries.png",
  "res/broccoli.png",
  "res/cabbage.png",
  "res/carrot.png",
  "res/cauliflower.png",
  "res/celery.png",
  "res/doughnut_pink.png",
  "res/eggplant.png",
  "res/grapes_purple.png",
  "res/lettuce.png",
  "res/potato.png",
  "res/strawberry.png",
  "res/yam.png",

  "res/bunny_ninja_level_1.png",
  "res/bunny_ninja_level_2.png",

  "sound/alarm_caught.wav",
  "sound/button_press.wav",
  "sound/caught.wav",
  "sound/food.wav",
  "sound/teleport_ready.wav",
  "sound/teleport.wav",
  "sound/teleportFail.wav",
  "sound/usagiFull.wav"
];

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
var firstPlay = true;
var music;
h.start();


function setup() {
  window.focus();
  var title = h.text("Bunny Ninja Heist", "75px Tahoma", "black");
  h.stage.putCenter(title);
  var startButton = h.text("Play", "45px Tahoma", "grey");
  var credits = h.text("Credits: Brandon W, Ben K. \n Food: ARoachIFoundOnMyPillow", "15px Tahoma", "darkgrey");
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


function firstPlaySetup(){
  document.addEventListener('keyup', handleKeyUp);
  document.addEventListener('keydown', handleKeyDown);
}


function loadLevel(level){
  if(firstPlay){
    firstPlaySetup();
    firstPlay = false;
    map = h.sprite(level.graphic);
    player = player();
    player.spawn = burrow(level.spawn.x + (h.canvas.width/2), level.spawn.y + (h.canvas.height/2)+30);

  } else {
    map.texture = PIXI.Texture.from(level.graphic);
    levelReset();
  }
  map.x = -level.spawn.x;
  map.y = -level.spawn.y;
  music = h.sound("sound/usagiFull.wav");
  music.volume = 5.5;
  music.loop = true;
  music.play();

  player.x = level.spawn.x + (h.canvas.width/2);
  player.y = level.spawn.y + (h.canvas.height/2); 
  player.spawn.x = level.spawn.x + (h.canvas.width/2);
  player.spawn.y = level.spawn.y + (h.canvas.height/2)+30;

  var startTime = new Date();
  let getStart = startTime.getTime();
  player.st = (getStart/100);

  for(var npc of level.npcs){
    mapGuards.push(guard(npc.x, npc.y, npc.path));
  }
  for(var cbl of level.collectables){
    mapCollectables.push(collectable(cbl.x, cbl.y, cbl.value, cbl.sprite));
  }  
  for(var col of level.collisions){
    var colGraphic = h.rectangle(col.width, col.height, "forestgreen", "black", 0, col.x, col.y)
    map.addChild(colGraphic)
    colGraphic.alpha = 0.8;
    mapCollisions.push(colGraphic);
  } 
  h.state = play;
}


function levelReset(){
    // Reset Player Attributes
    player.death = false;
    player.score = 0;
    player.spawn.tip.visible = false;
    clearInterval(clockInterval);

    // Reset map objects
    for(var npc of mapGuards){
      cleanUp(npc.vision);
      cleanUp(npc);
    } 
    mapGuards = [];   

    for(var cbl of mapCollisions){
      cleanUp(cbl);
    }
    mapCollisions = [];   

    for(var col of mapCollectables){
      cleanUp(col);
    }
    mapCollectables = [];       
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
  //cleanUp(map);
  music.pause();
  var curtain = h.rectangle(h.canvas.width, h.canvas.height, "darkgrey");
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
  var foodScore = h.text("Food Score" + "  " + player.score, "30px Tahoma", "lightgrey", 50, 100);
  var timeScore = h.text("Time Score" + "  " + player.tts, "30px Tahoma", "lightgrey", 50, 200);
  var totalScore = h.text("Total Score" + "  " + ultraScore, "30px Tahoma", "lightgrey", 100, 300);  
  var returnToLevelSelect = h.text("Return", "30px Tahoma", "black", 100, 400);
  var menuGroup = h.group(curtain, title, foodScore, timeScore, totalScore, returnToLevelSelect);
  returnToLevelSelect.interact = true;
  returnToLevelSelect.press = () => { 
    cleanUp(menuGroup);
    levelSelect(); 
  };
}


function levelSelect(){
  var curtain = h.rectangle(h.canvas.width, h.canvas.height, "darkgrey");
  var howToPlay = h.text('\How To Play\n\
Use "w","a","s" and "d" to move around.\n\
Collect as many pieces of food from the \ngarden as fast as you can to score points.\n\
Dont get spotted, hide in bushes and \navoid line of sight.\n\
Use "c" to teleport where your cursor is.\nThis ability has a cooldown.\n\
Return to burrow to exit level.\n\
  ', "20px Tahoma", "black", 260, 120);

  var title = h.text("Level Select", "45px Tahoma", "black");
  var level1Button = h.text("Level 1", "30px Tahoma", "light-grey");
  level1Button.y = 90;
  var level2Button = h.text("Level 2", "30px Tahoma", "light-grey");
  level2Button.y = 180;
  var level3Button = h.text("Level 3", "30px Tahoma", "grey");
  level3Button.y = 270;

  var menuGroup = h.group(title, level2Button, level3Button, howToPlay, level1Button);
  level1Button.x = level2Button.x = level3Button.x = 50;
  level1Button.interact = true;
  level1Button.press = function() {
    var tween = h.fadeOut(curtain)
    tween.onComplete = () => cleanUp(curtain);
    cleanUp(menuGroup);
    loadLevel(level1);
  }
  level2Button.interact = true;
  level2Button.press = function() {
    cleanUp(menuGroup);
    loadLevel(level2);
  }
}


function startCountDown(){
  for (var guard of mapGuards){
    guard.state = "seek";
    guard.target = player;
  }
  var curtain = h.rectangle(h.canvas.width, h.canvas.height, "red");
  curtain.alpha = 0.25;
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