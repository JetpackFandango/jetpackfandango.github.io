let buttons = Array.from(document.querySelectorAll('.color-button'));
const circleContainer = document.getElementById("circle-container");
for (let button of buttons) {
  button.addEventListener('click', function() {
    const color = button.getAttribute('data-color');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.classList.add(color);
    circleContainer.appendChild(circle);
  });
}
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function() {
  circleContainer.innerHTML = '';
});