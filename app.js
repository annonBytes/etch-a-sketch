//select elements on the page like the button and the canvas
const canvas = document.getElementById('etch');
const btn = document.getElementById('.shake');

const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 50;

const {width, height} = canvas; //setup canvas for drawing

//create random x and y points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); //start the drawing
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();


//write a draw function
function draw({key}){
    console.log(key);
    //starting the path
    ctx.beginPath();
    ctx.moveTo(x, y);

    //adjusting the postion from key press
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        default:
            break;

    }


    ctx.lineTo(x,y);
    ctx.stroke();
}



//write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
      e.preventDefault();
      draw({ key: e.key });
    }
  }



//clear and shake function




//listen for arrow keys
window.addEventListener('keydown', handleKey);
