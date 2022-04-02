function handleKeyDown(event) {
  if (event.key =='w'){
    ball.vy = -5;
    map.vy = 5;
  };  
  if (event.key =='a'){
    ball.vx = -5;
    map.vx = 5;
  };
  if (event.key =='s'){
    ball.vy = 5;
    map.vy = -5;
  };
  if (event.key =='d'){
    ball.vx = 5;
    map.vx = -5;
  };  
}

function handleKeyUp(event) {
  if (event.isComposing ||  event.key =='w'){
    map.vy = 0;
    ball.vy = 0;
  };
  if (event.isComposing || event.key =='a'){
    map.vx = 0;
    ball.vx = 0;
  };
  if (event.isComposing || event.key =='s'){
    map.vy = 0;
    ball.vy = 0;
  };
  if (event.isComposing || event.key =='d'){
    map.vx = 0;
    ball.vx = 0;
  };
}

function preventUseOfDefaultKeys(event) {
  if (event.keycode == 87 || event.keycode == 83 || event.keycode == 68 || event.keycode == 65) {
      event.preventDefault();
  }
}