// Handle buttons for Welcome paragraph.
const buttonElems = document.querySelectorAll("button.collapsible");
buttonElems.forEach((buttonElem) =>  {
  buttonElem.addEventListener("click", function() {
    let id = buttonElem.getAttribute("name");
    const elem = document.getElementById(id);
    if (elem.classList.toggle("show")) {
      buttonElem.innerText = "See Less";
    } else {
      buttonElem.innerText = "See More";
    }
  });
});