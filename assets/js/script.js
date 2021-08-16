function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor(randomNum) {
    var colors = ['red', 'blue', 'green'];
    return colors[randomNum];
}

function drawTriangle() {
    var canvas = document.getElementById('sprite-container-left');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var x1 = getRandomInt(100)
        var y1 = getRandomInt(100)
        var x2 = getRandomInt(99)
        var y2 = getRandomInt(99)
        var x3 = getRandomInt(98)
        var y3 = getRandomInt(98)

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
            ctx.clearRect(0, 0, 100, 100);
            triangleIterator = 0;
        }
    }
    
}

function drawCircle() {
    var canvas = document.getElementById('sprite-container-right');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var x1 = getRandomInt(100)
        var y1 = getRandomInt(100)
       

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
            ctx.clearRect(0, 0, 100, 100);
            circleIterator = 0;
        }
    }
}

var triangleIterator = 0;
var circleIterator = 0;

setInterval(drawTriangle, 1000);
setInterval(drawCircle, 1000);