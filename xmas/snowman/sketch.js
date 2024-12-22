let faceType = 1;
let faceX = 200;
let faceY = 150;
let faceScale = 0.5;

let snow1;
let snow2;
let snow1Y = 0;
let snow2Y = 0;

function preload() {
  snow1 = loadImage('snow1.png');
  snow2 = loadImage('snow2.png');
}

function setup() {
  createCanvas(400, 600);
  getParam();
}

function draw() {
  background('PowderBlue');
  noStroke();
  fill(235);
  ellipse(200, 450, 250, 250);
  fill(245);
  ellipse(200, 300, 200, 200);
  face(faceX, faceY, faceType);

  snow();
}

function snow() {
  snow1Y = (snow1Y + 0.5) % height;
  image(snow1, 0, snow1Y - height, 400, 600);
  image(snow1, 0, snow1Y, 400, 600);
  snow2Y = (snow2Y + 1.3) % height;
  image(snow2, 0, snow2Y - height, 400, 600);
  image(snow2, 0, snow2Y, 400, 600);
}

/* -------------------------------------------------------------------------- */
function mouseClicked() {
  let d = dist(faceX, faceY, mouseX, mouseY);
  if (d < 150 * faceScale) {
    faceType = faceType + 1;
    if (faceType > 3) {
      faceType = 1;
    }
    setParam();
  }
}

function setParam() {
  let url = new URL(location.href); //주소가져와서
  url.searchParams.set('faceType', faceType); //주소 값넣고
  history.pushState({}, null, url); //주소창 반영하기
}
//로드될때 넣어서 보여주
function getParam() {
  let url = new URL(location.href);
  faceType = url.searchParams.get('faceType');
  if (faceType == null) {
    faceType = 1;
  }
}

/* -------------------------------------------------------------------------- */
function face(x, y, type) {
  let d = dist(x, y, mouseX, mouseY);

  push();
  translate(x, y);
  scale(faceScale);

  //얼굴
  if (d < 150 * faceScale) {
    fill('LightPink');
  } else {
    fill('white');
  }
  ellipse(0, 0, 300, 300);
  //눈
  stroke('black');
  fill('white');
  ellipse(-60, 0, 100, 100);
  ellipse(60, 0, 100, 100);
  noStroke();

  fill('darkgray');
  ellipse(-60, 0, 50, 50);
  ellipse(60, 0, 50, 50);

  // 볼
  fill('rgba(255,192,203,0.6)');
  ellipse(-95, 55, 60, 60);
  ellipse(95, 55, 60, 60);

  //코1 입1
  if (type == 2) {
    rectMode(CENTER);
    fill('FireBrick');
    rect(0, 60, 20, 60);
  }
  ellipse(0, 90, 80, 20);

  //코2 입2
  if (type == 3) {
    fill('red');
    ellipse(0, 60, 50, 20);

    noFill();
    arc(0, 0, 200, 200, radians(60), radians(120));
  }
  //코3 입3
  if (type == 1) {
    strokeWeight(5);
    fill('orange');
    push();
    translate(0, 40);
    triangle(100, 0, 0, -20, 0, 20);
    pop();

    fill('FireBrick');
    rectMode(CENTER);
    rect(0, 90, 100, 10);
  }

  // 눈썹
  fill('gray');
  rect(-60, -80, 80, 15, 999);
  rect(60, -80, 80, 15, 999);

  //모자
  fill('navy');
  rect(0, -160, 110, 60, 20, 20, 0, 0);
  rect(0, -140, 150, 20, 20, 20, 0, 0);
  pop();

  // 좌표
  // line(x,y,mouseX,mouseY);
  // text(d,mouseX,mouseY);
}
