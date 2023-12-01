var slider = document.getElementById("slider");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
let contentListOne = document.getElementById('content1');
let contentListTwo = document.getElementById('content2');
let toggleOne = false;
let toggleTwo = false;

arrowLeft.addEventListener("click", function() {
    slider.scrollLeft -= slider.offsetWidth;
});

arrowRight.addEventListener("click", function() {
    slider.scrollLeft += slider.offsetWidth;
});

function openMenuOne() {
    if (toggleTwo) {
        contentListTwo.style.visibility = 'hidden';
        toggleTwo = false;
    }
    toggleOne = !toggleOne;
    contentListOne.style.visibility = toggleOne?'visible':'hidden';
}

function openMenuTwo() {
    if (toggleOne) {
        contentListOne.style.visibility = 'hidden';
        toggleOne = false;
    }
    toggleTwo = !toggleTwo;
    contentListTwo.style.visibility = toggleTwo?'visible':'hidden';
}

document.addEventListener('click', function (event) {
  const downSymbols = document.querySelectorAll('.fa-angle-down.down-symbol');
  if (event.target !== downSymbols[0] && event.target !== contentListOne) {
      contentListOne.style.visibility = 'hidden';
      toggleOne = false;
  }
  if (event.target !== downSymbols[1] && event.target !== contentListTwo) {
      contentListTwo.style.visibility = 'hidden';
      toggleTwo = false;
  }
});