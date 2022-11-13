const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const isVisible = primaryNav.getAttribute("data-visible");

  if (isVisible === "false") {
    primaryNav.setAttribute("data-visible", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
  }
});

function closeMenu() {
  primaryNav.setAttribute("data-visible", false);
}
