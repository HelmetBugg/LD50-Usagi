function handleKeyDown(event) {
  if (event.key =='w'){
    player.vy = -5;
    map.vy = 5;
  };  
  if (event.key =='a'){
    player.vx = -5;
    map.vx = 5;
  };
  if (event.key =='s'){
    player.vy = 5;
    map.vy = -5;
  };
  if (event.key =='d'){
    player.vx = 5;
    map.vx = -5;
  };  
}

function handleKeyUp(event) {
  if (event.isComposing ||  event.key =='w'){
    map.vy = 0;
    player.vy = 0;
  };
  if (event.isComposing || event.key =='a'){
    map.vx = 0;
    player.vx = 0;
  };
  if (event.isComposing || event.key =='s'){
    map.vy = 0;
    player.vy = 0;
  };
  if (event.isComposing || event.key =='d'){
    map.vx = 0;
    player.vx = 0;
  };
}

function preventUseOfDefaultKeys(event) {
  if (event.keycode == 87 || event.keycode == 83 || event.keycode == 68 || event.keycode == 65) {
      event.preventDefault();
  }
}