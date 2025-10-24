// Handle buttons for paragraphs.
document.addEventListener('DOMContentLoaded', () => {
  const actionButtons = document.querySelectorAll("button[data-target]");
  actionButtons.forEach((btnElement) => {
    btnElement.addEventListener("click", function () {
      let hideElement = btnElement.getAttribute("data-target");
      hideElement = document.querySelector(`#${hideElement}`);
      if (hideElement.classList.toggle("show")) {
        btnElement.innerText = "See Less";
      } else {
        btnElement.innerText = "See More";
      }
    });
  });
});