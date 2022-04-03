"use strict";

const level1 = {
  "graphic": "res/735315.png",
  "spawn": { 'x': 600, 'y': 600 },
  "npcs": [
    { 'x': 200, 'y': 50, 'sprite': "", 'path': [
      { 'x': 200, 'y': 50, 'width': 10, 'height': 10 },
      { 'x': 200, 'y': 200, 'width': 10, 'height': 10 },
      { 'x': 50, 'y': 200, 'width': 10, 'height': 10 },
      { 'x': 50, 'y': 50, 'width': 10, 'height': 10 }
    ] },
    { 'x': 350, 'y': 150, 'sprite': "", 'path': [
      { 'x': 350, 'y': 150, 'width': 10, 'height': 10 },
      { 'x': 350, 'y': 350, 'width': 10, 'height': 10 },
      { 'x': 150, 'y': 350, 'width': 10, 'height': 10 },
      { 'x': 150, 'y': 150, 'width': 10, 'height': 10 }
    ] },
    { 'x': 500, 'y': 150, 'sprite': "", 'path': [
      { 'x': 500, 'y': 150, 'width': 10, 'height': 10 },
      { 'x': 500, 'y': 500, 'width': 10, 'height': 10 },
      { 'x': 150, 'y': 500, 'width': 10, 'height': 10 },
      { 'x': 150, 'y': 150, 'width': 10, 'height': 10 }
    ] }
  ],
  "collectables": [
    { 'x': 10, 'y': 150, 'sprite':"res/apple_green.png", 'value': 100 },
    { 'x': 10, 'y': 250, 'sprite':"res/celery.png", 'value': 100 },
    { 'x': 10, 'y': 350, 'sprite':"res/lettuce.png", 'value': 100 },
    { 'x': 500, 'y': 500, 'sprite':"res/strawberry.png", 'value': 100 },
    { 'x': 600, 'y': 500, 'sprite':"res/yam.png", 'value': 100 },
    { 'x': 700, 'y': 500, 'sprite':"res/grapes_purple.png", 'value': 100 }
  ],
  "collisions": [
    { 'x': 190, 'y': 100, 'width':100, 'height':200, 'sprite':"", 'value': 100 },
    { 'x': 500, 'y': 550, 'width':100, 'height':200, 'sprite':"", 'value': 100 },
  ]
}