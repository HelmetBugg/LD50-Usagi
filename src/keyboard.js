function handleKeyDown(event) {
  if (event.key == 'w') {
    player.vy = -player.speed;
    map.vy = player.speed;
  };
  if (event.key == 'a') {
    player.vx = -player.speed;
    map.vx = player.speed;
  };
  if (event.key == 's') {
    player.vy = player.speed;
    map.vy = -player.speed;
  };
  if (event.key == 'd') {
    player.vx = player.speed;
    map.vx = -player.speed;
  };
}

function handleKeyUp(event) {
  if (event.isComposing || event.key == 'w') {
    map.vy = 0;
    player.vy = 0;
  };
  if (event.isComposing || event.key == 'a') {
    map.vx = 0;
    player.vx = 0;
  };
  if (event.isComposing || event.key == 's') {
    map.vy = 0;
    player.vy = 0;
  };
  if (event.isComposing || event.key == 'd') {
    map.vx = 0;
    player.vx = 0;
  };
  if ((event.isComposing || event.key == 'e') && h.hit(player, player.spawn)) {
      scoreBoard();
  };
  if ((event.isComposing || event.key == 'c') && player.teleportReady) {
    //map.addChild(h.circle(32, "blue", "black", 0, h.pointer.x - map.x, h.pointer.y - map.y))
    player.teleport(h.pointer.x - map.x, h.pointer.y - map.y);
  };
  if ((event.isComposing || event.key == 'q')) {
    //map.addChild(h.circle(32, "blue", "black", 0, h.pointer.x - map.x, h.pointer.y - map.y))
    h.shoot(
      player,            //The shooter
      4.71,              //The angle at which to shoot (4.71 is up)
      player.halfWidth,  //Bullet's x position on the cannon
      0,                 //Bullet's y position on the cannon
      h.stage,           //The container to which the bullet should be added
      7,                 //The bullet's speed (pixels per frame)
      [],      //The array used to store the bullets
      () => h.circle(10, "brown", "black", 2, 0, 0)
    );
  };
}

function preventUseOfDefaultKeys(event) {
  if (event.keycode == 87 || event.keycode == 83 || event.keycode == 68 || event.keycode == 65) {
    event.preventDefault();
  }
}