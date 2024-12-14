const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".menu-icon"),
      menuBtnsToggle = document.querySelectorAll(".logo .menu-icon"),
      overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    const isOpen = navBar.classList.toggle("open");

    menuBtnsToggle.forEach((toggleBtn) => {
      toggleBtn.style.color = isOpen ? "transparent" : "#fffafa";
    });
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");

  menuBtnsToggle.forEach((toggleBtn) => {
    toggleBtn.style.color = "#fffafa";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});