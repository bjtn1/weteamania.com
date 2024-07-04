function animate_ham_menu_icon(x) {
  x.classList.toggle("change");
}

function show_nav_items() {
  let x = document.getElementById("nav-items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// hamburger menu thingie toggle
// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const menu = document.getElementById("ham-menu");
//
//   menuToggle.addEventListener("click", function () {
//     menu.classList.toggle("hidden");
//   });
// });
