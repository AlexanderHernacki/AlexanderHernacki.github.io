// setup canvas

const canvas = document.querySelector('canvas');
//my code
const output = document.querySelector('.output');

const submit = document.querySelector('.SubmitButton');

submit.addEventListener('click',submitNumber);

function submitNumber()
{
    alert('Submitted your Phone number '+output.textContent)
}
canvas.addEventListener('click', (e) => {
  const mousePos = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
  // get pixel under cursor
  const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;

  // create rgb color for that pixel
  const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;

  const phoneColor= String(pixel[0])+String(pixel[1])+String(pixel[2]);

  console.log(color);

  const digitsToKeep= 10-phoneColor.length;
  console.log(digitsToKeep);
  var oldDigits= "";
  for(ii=9;ii>(9-digitsToKeep);ii--){
    oldDigits=output.textContent[ii]+oldDigits;
  }
  console.log(oldDigits);

  output.textContent = oldDigits+phoneColor;
  
});

/*elemLeft = canvas.offsetLeft + canvas.clientLeft,
elemTop = canvas.offsetTop + canvas.clientTop,
canvas.addEventListener('click',test(event));*/
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//  ball class

class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      
        update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
      
      
  }

  //  populate balls

  const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

// test function

function test(){
  console.log("Test");
}

//  loop function

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
     
     
    }
  
    requestAnimationFrame(loop);

    

    //balls[1].addEventListener('click',test);
    //balls[1].removeEventListener();

    
  }

  //    start loop

  loop();


  
  