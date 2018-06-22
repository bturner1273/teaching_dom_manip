window.onload = function(){
  document.querySelector("button").addEventListener("click", function(){
    document.body.style.background = randomRGB();
  });
};

function randomRGB(){
  var r = Math.floor(Math.random()*256);          // Random between 0-255
  var g = Math.floor(Math.random()*256);          // Random between 0-255
  var b = Math.floor(Math.random()*256);          // Random between 0-255
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string
  return rgb;
}
