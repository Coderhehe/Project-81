canvas = document.getElementById("canvasa");    
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc (220, 200, 40, 0 ,2*MathPI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "black";
ctxx.lineWidth = 5;
ctx.arc (300, 210, 40, 0 ,2*MathPI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc (380, 210, 40, 0 ,2*MathPI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc (220, 200, 40, 0 ,2*MathPI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc (300, 200, 40, 0 ,2*MathPI);
ctx.stroke(); 



