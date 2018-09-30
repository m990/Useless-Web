function getMouseX(){
  return event.clientX;
}
function getMouseY(){
  return event.clientY;
}

function place(){
  var image = document.getElementById("face");
  image.style.position = "absolute";
  //image.style.left = getMouseX()+"px";
  image.style.top = getMouseY()+"px";
}
function updateRectangle(){
  var rectangle = document.getElementById("rect1");
  image.style.position = "absolute";
  image.style.left = image.style.left-5;
}
setInterval(function() {
  var rectangle = document.getElementById("rect1");
  image.style.position = "absolute";
  image.style.left = image.style.left;
}, 5000);
