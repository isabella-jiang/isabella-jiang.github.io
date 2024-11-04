function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
    translate(width/2, height/2);
    // rotate(second());
    // print(second());
    
    // hr style
    noStroke();
    fill(255, 255, 0);
  
    // hr start and stop angles
    let biteSize = 20;
    let startAngle = biteSize * sin(frameCount * 0.01389) + biteSize;
    let endAngle = 360 - startAngle;
  
    // hr arc
    push();
    rotate(hour()*30);
    arc(0, -100, 15, 15, startAngle, endAngle, PIE);
    pop();
    push();
    for (let x = 12; x > hour() % 12; x = x - 1) {
      stroke(255)
      rotate(-30);
      ellipse(0, -100, 2, 2);
      }
    pop();
    
    // min style
    noStroke();
    fill(255, 255, 0);
  
    // min start and stop angles
    let biteSize2 = 20;
    let startAngle2 = biteSize2 * sin(frameCount * 1) + biteSize2;
    let endAngle2 = 360 - startAngle2;
  
    // min arc
    push();
    rotate(minute()*6);
    arc(0, -120, 15, 15, startAngle2, endAngle2, PIE);
    pop();
    push();
    for (let x = 60; x > minute(); x = x - 1) {
      stroke(255)
      rotate(-6);
      ellipse(0, -120, 2, 2);
      }
    pop();
   
    // sec style
    noStroke();
    fill(255, 255, 0);
  
    // sec start and stop angles
    let biteSize3 = 20;
    let startAngle3 = biteSize3 * sin(frameCount * 6) + biteSize3;
    let endAngle3 = 360 - startAngle3;
  
    // sec arc
    push();
    rotate(second()*6);
    arc(0, -140, 15, 15, startAngle3, endAngle3, PIE);
    pop();
    push();
    for (let x = 60; x > second(); x = x - 1) {
      stroke(255)
      rotate(-6);
      ellipse(0, -140, 2, 2);
      }
    print(second());
    pop();
    
    //outer track 1
    noFill();
    stroke(0, 0, 255)
    strokeWeight(3);
    ellipse(0, 0, 300, 300);
    
    //inner track 1
    noFill();
    stroke(0, 0, 255)
    strokeWeight(3);
    ellipse(0, 0, 260, 260);
    
    //inner track 2
    noFill();
    stroke(0, 0, 255)
    strokeWeight(3);
    ellipse(0, 0, 220, 220);
    
    //inner track 3
    noFill();
    stroke(0, 0, 255)
    strokeWeight(3);
    ellipse(0, 0, 180, 180);
    
  }