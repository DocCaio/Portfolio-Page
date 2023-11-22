let menuButton = document.getElementsByClassName("menu-button");
let menu = document.getElementsByClassName("mobile-menu-icon");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
 