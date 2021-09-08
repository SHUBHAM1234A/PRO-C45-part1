var bg;
var earth, earthIMG, spaceShip, health, health_IMG, HP = 100, exhaust;
var ssIMG, exhaustANIM

function preload() {
  bg = loadImage("Images/BG-OP.jpg");
  health_IMG = loadImage("Images/PNG/Main_UI/Health_Bar_Table.png")
  earthIMG = loadImage("Images/earth (1).png");
  ssIMG = loadImage("free-pixel-art-enemy-spaceship-2d-sprites/PNG_Parts&Spriter_Animation/Ship2/Ship2.png");
  exhaustANIM = loadAnimation("free-pixel-art-enemy-spaceship-2d-sprites/PNG_Parts&Spriter_Animation/Ship2/Exhaust/Normal_flight/Exhaust1/exhaust1.png", "free-pixel-art-enemy-spaceship-2d-sprites/PNG_Parts&Spriter_Animation/Ship2/Exhaust/Normal_flight/Exhaust1/exhaust2.png", "free-pixel-art-enemy-spaceship-2d-sprites/PNG_Parts&Spriter_Animation/Ship2/Exhaust/Normal_flight/Exhaust1/exhaust3.png", "free-pixel-art-enemy-spaceship-2d-sprites/PNG_Parts&Spriter_Animation/Ship2/Exhaust/Normal_flight/Exhaust1/exhaust4.png")
}

function setup() {
  createCanvas(1600, 900);

  earth = createSprite(0, 450, 100, 100);
  earth.addImage(earthIMG)
  earth.scale = 3;

  exhaust = createSprite(250, 450, 10, 10)
  exhaust.scale = 2
  exhaust.addAnimation("exhaustANIM", exhaustANIM)
  exhaust.visible = false;

  spaceShip = createSprite(480, 450, 100, 200);
  spaceShip.addImage(ssIMG);
  spaceShip.scale = 2.5

  health = createSprite(200, 60, 10, 10);
  health.addImage(health_IMG);
}

function draw() {
  background(bg);

  exhaust.x = spaceShip.x - 100
  exhaust.y = spaceShip.y

  if (keyCode === 38) {
    spaceShip.y -= 3;
    exhaust.visible = true;
  }
  if (keyCode === 40) {
    spaceShip.y += 3;
    exhaust.visible = true;
  }
  if (keyCode === 39) { 
    spaceShip.x += 3;
    exhaust.visible = true;
  }
  if (keyCode === 37) {
    spaceShip.x -= 3;
    exhaust.visible = true;
  }
  if (keyCode === 32) {
    spaceShip.x = spaceShip.x;
    spaceShip.y = spaceShip.y;
    exhaust.visible = false;
  }

  drawSprites();
  textSize(65);
  fill("gold");
  text(`${HP}%`, 100, 80);
}

function keyPressed() {
  
}
