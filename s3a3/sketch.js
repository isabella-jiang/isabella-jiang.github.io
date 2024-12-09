let letters = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(213, 82, 2);
  noLoop();
}

function draw() {
  background(213, 82, 2);
  drawParsley();

  textFont('Jua');
  textSize(50);
  fill(238, 202, 110);
  stroke(230, 163, 52);
  strokeWeight(2);

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    text(letter.char, letter.x, letter.y);
  }
}

document.getElementById('textInput').addEventListener('input', (event) => {
  let inputText = event.target.value.toUpperCase();
  scatterLetters(inputText);
});

function scatterLetters(inputText) {
  letters = [];

  for (let i = 0; i < inputText.length; i++) {
    let x = random(50, width - 50);
    let y = random(50, height - 150);

    letters.push({ char: inputText[i], x: x, y: y });
  }

  redraw();
}

function drawParsley() {
  noStroke();
  fill(34, 139, 34);

  for (let i = 0; i < 30; i++) {
    let px = random(width);
    let py = random(height - 100);
    if (random() > 0.5) {
      ellipse(px, py, 5, 5);
    } else {
      line(px - 2, py, px + 2, py);
      line(px, py - 2, px, py + 2);
    }
  }
}
