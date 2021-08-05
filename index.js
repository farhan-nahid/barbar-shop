var sideNav = document.getElementById("side__nav");
var menuButton = document.getElementById("menu__button");
var menu = document.getElementById("menu");

menuButton.onclick = function () {
  sideNav.style.right = "-250px";
  if (sideNav.style.right == "-250px") {
    sideNav.style.right == "0";
    console.log("inside");
  } else {
    sideNav.style.right == "-500px";
    console.log("outside");
  }
};
