// Handle buttons for Welcome paragraph.
const welcomeButton = document.getElementById("welcomeMore");
welcomeButton.addEventListener("click", function () {
  const welcome = document.getElementById("welcome");
  if (welcome.classList.toggle("collapse")) {
    welcomeButton.innerText = "See More";
  } else {
    welcomeButton.innerText = "See Less";
  }
});

// Handle buttons for Welcome paragraph.
const aboutButton = document.getElementById("aboutMore");
aboutButton.addEventListener("click", function () {
  const about = document.getElementById("about");
  if (about.classList.toggle("collapse")) {
    aboutButton.innerText = "See More";
  } else {
    aboutButton.innerText = "See Less";
  }
});