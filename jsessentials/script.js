var clicks = 1
function createParagraph(){
  var new_paragraph = document.createElement("div");
  new_paragraph.textContent = "button clicked " + clicks + " time(s)";
  clicks += 1;
  document.body.appendChild(new_paragraph);
}
var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}