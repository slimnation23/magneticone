const selectAll = document.querySelectorAll(".__select");
selectAll.forEach((currentSelect) => {
  const currentSelect_title = currentSelect.querySelector(".__select__title");
  const currentSelect_labels = currentSelect.querySelectorAll(
    ".__select__label"
  );
  // Toggle menu
  currentSelect_title.addEventListener("click", () => {
    toggleSelect(currentSelect);
  });

  // Close when click to option
  for (let i = 0; i < currentSelect_labels.length; i++) {
    currentSelect_labels[i].addEventListener("click", (evt) => {
      currentSelect_title.textContent = evt.target.textContent;
      currentSelect.setAttribute("data-state", "");
    });
  }
});
const toggleSelect = (select, close = false) => {
  if ("active" === select.getAttribute("data-state") || close) {
    select.setAttribute("data-state", "");
  } else {
    select.setAttribute("data-state", "active");
  }
};
window.addEventListener("click", windowOnClick);

function windowOnClick(event) {
  selectAll.forEach((currentSelect) => {
    if (event.target.parentNode !== currentSelect) {
      toggleSelect(currentSelect, true);
    }
  });
}

$(document).ready(function () {
  let menuBtn = $(".bottom-nav_btn");
  let menu = $(".bottom-nav_menu");

  menuBtn.on("click", function (event) {
    event.preventDefault();
    menu.toggle("bottom-nav_menu__active");
  });
});
