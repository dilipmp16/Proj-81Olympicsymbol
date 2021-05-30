canvas = document.getElementById("myCanvas");
//color = "red";

ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(200,143,430,220);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 10;
ctx.arc(325, 225, 40 ,0 , 2 * Math.PI);
ctx.stroke();  

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;
ctx.arc(375, 275, 40 ,0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.arc(425, 225, 40 ,0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.arc(475, 275, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.arc(525, 225, 40 ,0 , 2 * Math.PI);
ctx.stroke(); 
