function changeColor() {

  var paragraph = document.getElementById("text");

  var borderR = document.getElementById("borderRvalue");
  var borderG = document.getElementById("borderGvalue");
  var borderB = document.getElementById("borderBvalue");
  var borderWidth = document.getElementById("width");

  var backR = document.getElementById("backRvalue");
  var backG = document.getElementById("backGvalue");
  var backB = document.getElementById("backBvalue");

  var borderRGB = "#" + borderR.value + borderG.value + borderB.value;
  var backRGB = "#" + backR.value + backG.value + backB.value;
  var width = borderWidth.value;
  
  paragraph.style.border = width + " solid " + borderRGB;
  paragraph.style.backgroundColor = backRGB;

}
