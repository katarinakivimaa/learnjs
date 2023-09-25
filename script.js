//console.log(window, {document});
// setTimeout (() => {
//     document.location = 'https://google.com';
// }, 5000);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.stroke(); 
ctx.beginPath();
ctx.moveTo(150,100);
ctx.arc(150, 100, 25, 150, 180, 0.3*Math.PI);
ctx.fill();
ctx.arc(150, 100, 25, 0, 2*Math.PI);
ctx.lineWidth = 3;

// ctx.stroke(); 
// ctx.beginPath();
// ctx.moveTo(150,100);
// ctx.lineTo(150,100);
// ctx.arc(150, 100, 25, 0, 0.3*Math.PI);
// ctx.fill();
// ctx.arc(150, 100, 25, 0, 2*Math.PI);
// ctx.lineWidth = 3;
// ctx.stroke();

ctx.fillStyle = '#0000FF'; //eesti lipp
ctx.fillRect(10,10,100,30);
ctx.fillStyle = '#000000';
ctx.fillRect(10,40,100,30);
ctx.fillStyle = 'FFFFFF';
ctx.strokeStyle = 'black';
var fillRect = false;
ctx.rect(10, 70, 100, 30);
if (fillRect) {
  ctx.fill();
}
ctx.stroke();
 //võtsin selle koodi siit: https://stackoverflow.com/questions/38173871/html5-canvas-how-to-border-a-fillrect

ctx.beginPath(); //täht
ctx.moveTo(192,0);  //1
ctx.lineTo(214,68); //3
ctx.lineTo(156,25); //5
ctx.lineTo(228,26); //2
ctx.lineTo(170,68); //4
ctx.lineTo(192,0);  //1*
ctx.closePath();



