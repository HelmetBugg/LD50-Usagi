"use strict";

const level1 = {
  "graphic": "res/bunny_ninja_level_1.png",
  "spawn": { 'x': 798, 'y': 656 },
  "npcs": [
    {
      'x': 172, 'y': 876, 'sprite': "", 'path': [
        { 'x': 172, 'y': 876, 'width': 10, 'height': 10 },
        { 'x': 888, 'y': 876, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 152, 'y': 52, 'sprite': "", 'path': [
        { 'x': 152, 'y': 52, 'width': 10, 'height': 10 },
        { 'x': 152, 'y': 876, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 500, 'y': 150, 'sprite': "", 'path': [
        { 'x': 500, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 150, 'width': 10, 'height': 10 }
      ]
    }

  ],
  "collectables": [
    { 'x': 976, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1016, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1076, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1116, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1176, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },

    { 'x': 976, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1016, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1076, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1116, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1176, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },

    { 'x': 976, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1016, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1076, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1116, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1176, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },

    { 'x': 150, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 200, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 250, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 300, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 350, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 400, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },

    { 'x': 700, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 750, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 800, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 850, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 900, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 950, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1000, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1050, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1100, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },


    { 'x': 544, 'y': 652, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 602, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 552, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 502, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 452, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 402, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 352, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 302, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 252, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 202, 'sprite': "res/carrot.png", 'value': 100 },

    { 'x': 424, 'y': 652, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 602, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 552, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 502, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 452, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 402, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 352, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 302, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 252, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 202, 'sprite': "res/carrot.png", 'value': 100 }

  ],
  "collisions": [
    { 'x': 50, 'y': 1000, 'width': 500, 'height':48, 'sprite':"", 'value': 100 },
    { 'x': 692, 'y': 1000, 'width': 500, 'height':48, 'sprite':"", 'value': 100 },    
    { 'x': 954, 'y': 768, 'width': 300, 'height':48, 'sprite':"", 'value': 100 },    
    { 'x': 954, 'y': 388, 'width': 300, 'height':48, 'sprite':"", 'value': 100 }, 
    { 'x': 250, 'y': 98, 'width': 48, 'height':708, 'sprite':"", 'value': 100 }, 
    { 'x': 710, 'y': 98, 'width': 48, 'height':708, 'sprite':"", 'value': 100 }, 
    { 'x': 250, 'y': 98, 'width': 200, 'height':48, 'sprite':"", 'value': 100 },    
    { 'x': 250, 'y': 768, 'width': 200, 'height':48, 'sprite':"", 'value': 100 },
    { 'x': 565, 'y': 98, 'width': 200, 'height':48, 'sprite':"", 'value': 100 },    
    { 'x': 565, 'y': 768, 'width': 200, 'height':48, 'sprite':"", 'value': 100 }
  ],
  "bushes": [
    { 'x': 630, 'y': 812, 'width':100, 'height':48, 'sprite':"", 'value': 100 },
    { 'x': 256, 'y': 2, 'width':800, 'height':48, 'sprite':"", 'value': 100 }
  ]
}

const level2 = {
  "graphic": "res/bunny_ninja_level_2.png",
  "spawn": { 'x': 352, 'y': 1056 },
  "npcs": [
    {
      'x': 172, 'y': 876, 'sprite': "", 'path': [
        { 'x': 172, 'y': 876, 'width': 10, 'height': 10 },
        { 'x': 888, 'y': 876, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 692, 'y': 576, 'sprite': "", 'path': [
        { 'x': 692, 'y': 576, 'width': 10, 'height': 10 },
        { 'x': 692, 'y': 1256, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 500, 'y': 150, 'sprite': "", 'path': [
        { 'x': 500, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 150, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 1000, 'y': 650, 'sprite': "", 'path': [
        { 'x': 150, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 500, 'width': 10, 'height': 10 }
      ]
    }
  ],
  "collectables": [
    { 'x': 976, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1016, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1076, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1116, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1176, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },

    { 'x': 976, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1016, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1076, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1116, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1176, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },

    { 'x': 976, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1016, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1076, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1116, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1176, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },

    { 'x': 150, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 200, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 250, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 300, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 350, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 400, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },

    { 'x': 700, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 750, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 800, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 850, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 900, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 950, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1000, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1050, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1100, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },


    { 'x': 544, 'y': 652, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 602, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 552, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 502, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 452, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 402, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 352, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 302, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 252, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 202, 'sprite': "res/carrot.png", 'value': 100 },

    { 'x': 424, 'y': 652, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 602, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 552, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 502, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 452, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 402, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 352, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 302, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 252, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 202, 'sprite': "res/carrot.png", 'value': 100 }

  ],
  "collisions": [
    { 'x': 0, 'y': 0, 'width':100, 'height':20, 'sprite':"", 'value': 100 },
    { 'x': 0, 'y': 0, 'width':100, 'height':200, 'sprite':"", 'value': 100 }
  ],
  "bushes": [
    { 'x': 630, 'y': 812, 'width':0, 'height':0, 'sprite':"", 'value': 100 }
  ]
}


const level3 = {
  "graphic": "res/bunny_ninja_level_3.png",
  "spawn": { 'x': 352, 'y': 1056 },
  "npcs": [
    {
      'x': 172, 'y': 876, 'sprite': "", 'path': [
        { 'x': 172, 'y': 876, 'width': 10, 'height': 10 },
        { 'x': 888, 'y': 876, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 692, 'y': 576, 'sprite': "", 'path': [
        { 'x': 692, 'y': 576, 'width': 10, 'height': 10 },
        { 'x': 692, 'y': 1256, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 500, 'y': 150, 'sprite': "", 'path': [
        { 'x': 500, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 150, 'width': 10, 'height': 10 }
      ]
    },
    {
      'x': 1000, 'y': 650, 'sprite': "", 'path': [
        { 'x': 150, 'y': 500, 'width': 10, 'height': 10 },
        { 'x': 150, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 150, 'width': 10, 'height': 10 },
        { 'x': 500, 'y': 500, 'width': 10, 'height': 10 }
      ]
    }
  ],
  "collectables": [
    { 'x': 976, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1016, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1076, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1116, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },
    { 'x': 1176, 'y': 460, 'sprite': "res/lettuce.png", 'value': 100 },

    { 'x': 976, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1016, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1076, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1116, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },
    { 'x': 1176, 'y': 560, 'sprite': "res/kale.png", 'value': 100 },

    { 'x': 976, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1016, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1076, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1116, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },
    { 'x': 1176, 'y': 660, 'sprite': "res/celery.png", 'value': 100 },

    { 'x': 150, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 200, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 250, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 300, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 350, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 400, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },

    { 'x': 700, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 750, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 800, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 850, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 900, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 950, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1000, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1050, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },
    { 'x': 1100, 'y': 1100, 'sprite': "res/beet.png", 'value': 100 },


    { 'x': 544, 'y': 652, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 602, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 552, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 502, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 452, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 402, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 352, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 302, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 252, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 544, 'y': 202, 'sprite': "res/carrot.png", 'value': 100 },

    { 'x': 424, 'y': 652, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 602, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 552, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 502, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 452, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 402, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 352, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 302, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 252, 'sprite': "res/carrot.png", 'value': 100 },
    { 'x': 424, 'y': 202, 'sprite': "res/carrot.png", 'value': 100 }

  ],
  "collisions": [
    { 'x': 0, 'y': 0, 'width':100, 'height':20, 'sprite':"", 'value': 100 },
    { 'x': 0, 'y': 0, 'width':100, 'height':200, 'sprite':"", 'value': 100 }
  ],
  "bushes": [
    { 'x': 630, 'y': 812, 'width':0, 'height':0, 'sprite':"", 'value': 100 }
  ]
}