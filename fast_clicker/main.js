let score = 0;
let is_counting = false;
let played = false
let colors = ["#f1c40f", "#e67e22", "#e74c3c", "#1abc9c", "#2ecc71", "#3498db", "#9b59b6"]
let random_color
let is_timer_started = false
let countdown = 30
let start_timer = countdown*100


function setup() {
  createCanvas(innerWidth, innerHeight);
  random_color = colors[floor(random() * colors.length)]
}

function draw() {
  background(random_color);

  noStroke();
  textSize(512);
  textAlign(CENTER, CENTER);
  fill(255);
  text(score, width/2, height/2);

  textSize(32);
  textAlign(CENTER, CENTER);
  text(countdown, 40, 40);
}

function mousePressed() {
  if (!is_timer_started) setTimeout(() => {
    is_counting = false
    played = true
  }, start_timer)
  is_timer_started = true

  if (is_counting) {
    score++
    random_color = colors[floor(random() * colors.length)]
    background(random_color);
  }

  if (!is_counting && !played) {
    setInterval(() => {
      if (is_counting) countdown--
    }, 100)
    is_counting = true
    score++
    countdown--
  }
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}