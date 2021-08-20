function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor(randomNum) {
    var colors = ['red', 'blue', 'green'];
    return colors[randomNum];
}

function drawTriangle() {
    var canvas = document.getElementById('left-title');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var x1 = getRandomInt(canvas.width)
        var y1 = getRandomInt(canvas.height)
        var x2 = getRandomInt(canvas.width - 5)
        var y2 = getRandomInt(canvas.height - 5)
        var x3 = getRandomInt(canvas.width - 10)
        var y3 = getRandomInt(canvas.height - 10)

        // Filled triangle
        ctx.strokeStyle = getRandomColor(getRandomInt(3));
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();

        // Stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();

        triangleIterator++;
        if (triangleIterator === 50) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            triangleIterator = 0;
        }
    }

}

function drawCircle() {
    var canvas = document.getElementById('right-title');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var x1 = getRandomInt(canvas.width)
        var y1 = getRandomInt(canvas.height)


        // Filled triangle
        ctx.strokeStyle = getRandomColor(getRandomInt(3));
        ctx.beginPath();

        ctx.arc(x1, y1, Math.min(canvas.width - x1, canvas.height - y1), 0, Math.PI * 2, true);
        ctx.stroke();

        // Stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();

        circleIterator++;
        if (circleIterator === 50) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circleIterator = 0;
        }
    }
}

var triangleIterator = 0;
var circleIterator = 0;

// Everything below handles the atom animation
let img = new Image();
img.src = './assets/images/atom-sprite-sheet.png';
img.onload = function () {
    init();
};

let canvas = document.getElementById('profile-sprite');
let ctx = canvas.getContext('2d');

var x1 = [0, 31, 63, 95, 127, 159,
          0, 31, 63, 95, 127, 159,
          0, 31, 63, 95, 127, 159,
          0, 31, 63, 95, 127, 159,
          0, 31, 63, 95, 127, 159,
          0, 31, 63, 95, 127, 159,
          0, 31, 63, 95];
var y1 = [0, 0, 0, 0, 0, 0,
          31, 31, 31, 31, 31, 31,
          63, 63, 63, 63, 63, 63,
          95, 95, 95, 95, 95, 95,
          127, 127, 127, 127, 127, 127,
          159, 159, 159, 159, 159, 159,
          191, 191, 191, 191];
var x2 = [31, 63, 95, 127, 159, 191,
          31, 63, 95, 127, 159, 191,
          31, 63, 95, 127, 159, 191,
          31, 63, 95, 127, 159, 191,
          31, 63, 95, 127, 159, 191,
          31, 63, 95, 127, 159, 191,
          31, 63, 95, 127];
var y2 = [31, 31, 31, 31, 31, 31,
          63, 63, 63, 63, 63, 63,
          95, 95, 95, 95, 95, 95,
          127, 127, 127, 127, 127, 127,
          159, 159, 159, 159, 159, 159,
          191, 191, 191, 191, 191, 191,
          223, 223, 223, 223];
var widthArray = [310, 620, 930, 1240, 1550, 1860,
                  310, 620, 930, 1240, 1550, 1860,
                  310, 620, 930, 1240, 1550, 1860,
                  310, 620, 930, 1240, 1550, 1860,
                  310, 620, 930, 1240, 1550, 1860,
                  310, 620, 930, 1240, 1550, 1860,
                  310, 620, 930, 1240];
var heightArray = [140, 140, 140, 140, 140, 140,
                   280, 280, 280, 280, 280, 280,
                   420, 420, 420, 420, 420, 420,
                   560, 560, 560, 560, 560, 560,
                   700, 700, 700, 700, 700, 700,
                   840, 840, 840, 840, 840, 840,
                   980, 980, 980, 980];
let frameCount = 0;
let currentLoopIndex = 0;

function step() {
    frameCount++;
    if (frameCount < 6) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x1[currentLoopIndex], y1[currentLoopIndex], x2[currentLoopIndex],
        y2[currentLoopIndex], 0, 0, widthArray[currentLoopIndex], heightArray[currentLoopIndex]);
    currentLoopIndex++;
    if (currentLoopIndex >= x1.length) {
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}

function init() {
    window.requestAnimationFrame(step);
}

setInterval(drawTriangle, 1000);
setInterval(drawCircle, 1000);


