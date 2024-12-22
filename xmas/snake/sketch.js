let message = '행복한새해가되시길바래요';

let input;

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
  input = createInput();
  input.input(typing);

  textFont('Bagel Fat One');

  getParam();
}

function typing() {
  message = input.value();
  setParam();
}

/* -------------------------------------------------------------------------- */
function setParam() {
  let url = new URL(location.href); //주소가져와서
  url.searchParams.set('message', message); //주소 값넣고
  history.pushState({}, null, url); //주소창 반영하기
}
//로드될때 넣어서 보여주
function getParam() {
  let url = new URL(location.href);
  message = url.searchParams.get('message');
  if (message == null) {
    message = '행복한새해가되시길바래요';
  }
}
/* -------------------------------------------------------------------------- */
function draw() {
  background('RoyalBlue');

  textSize(40);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  let eyeBlink = 10;
  let tongueMove = 0;
  if (frameCount % 60 > 30) {
    tongueMove = -10;
    eyeBlink = 1;
  }

  //혀
  stroke('white');

  fill('pink');
  rect(tongueMove + 75, 120, 30, 10);

  //얼굴
  fill('skyblue');
  arc(125, 125, 100, 100, radians(180), radians(270), PIE);

  //눈
  noStroke();
  fill('white');
  ellipse(110, 100, 20, 20);
  fill('black');
  ellipse(110, 100, 10, eyeBlink);

  //몸
  stroke('white');
  fill('skyblue');

  //1번줄

  rect(150, 100, 50, 50);
  rect(200, 100, 50, 50);
  rect(250, 100, 50, 50);
  arc(275, 125, 100, 100, radians(-90), radians(0), PIE);

  //2번줄
  arc(125, 225, 100, 100, radians(180), radians(270), PIE);
  rect(150, 200, 50, 50);
  rect(200, 200, 50, 50);
  rect(250, 200, 50, 50);
  arc(275, 175, 100, 100, radians(0), radians(90), PIE);

  //3번줄
  arc(125, 275, 100, 100, radians(90), radians(180), PIE);
  rect(150, 300, 50, 50);
  rect(200, 300, 50, 50);
  rect(250, 300, 50, 50);
  arc(275, 325, 100, 100, radians(-90), radians(0), PIE);

  //4번줄
  arc(125, 425, 100, 100, radians(180), radians(270), PIE);
  rect(150, 400, 50, 50);
  rect(200, 400, 50, 50);
  rect(250, 400, 50, 50);
  arc(275, 375, 100, 100, radians(0), radians(90), PIE);

  //몸통
  rect(300, 150, 50, 50);
  rect(300, 350, 50, 50);
  rect(100, 250, 50, 50);

  // 눈 효과
  snow();

  //글자

  noStroke();
  fill('white');

  text(message[0], 150, 100);
  text(message[1], 200, 100);
  text(message[2], 250, 100);

  text(message[3], 150, 200);
  text(message[4], 200, 200);
  text(message[5], 250, 200);

  text(message[6], 150, 300);
  text(message[7], 200, 300);
  text(message[8], 250, 300);

  text(message[9], 150, 400);
  text(message[10], 200, 400);
  text(message[11], 250, 400);

  textSize(110);
  text(2025, 200, 500);
}

function snow() {
  snow1Y = (snow1Y + 0.5) % height;
  image(snow1, 0, snow1Y - height, 400, 600);
  image(snow1, 0, snow1Y, 400, 600);
  snow2Y = (snow2Y + 1.3) % height;
  image(snow2, 0, snow2Y - height, 400, 600);
  image(snow2, 0, snow2Y, 400, 600);
}
