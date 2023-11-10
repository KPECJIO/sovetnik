window.onload = function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var W = canvas.width;
  var H = canvas.height;
  var degrees = 0;
  var new_degrees = 0;
  var difference = 0;
  var color = "#FFDA44";
  var bgcolor = "#222";
  var text;
  var animation_loop, redraw_loop; 
  function init()
  {
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 4;
    ctx.arc(W/2, H/2, 60, 0, Math.PI*2, false);
    ctx.stroke();
    var radians = degrees * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(W/2, H/2, 60, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = "45px bebas";
    text = Math.floor(degrees/360*100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, W/2 - text_width/2, H/2 + 15);
  }
  function draw()
  {
    if(typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = 310;
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 1000/difference);
  }
  function animate_to()
  {
    if(degrees < new_degrees)
      degrees++;
    else
      degrees--;
    if(degrees == new_degrees)
      clearInterval(animation_loop);
    init();
  }
  draw();
};
