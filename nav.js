const primaryNavigation = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const isVisible = primaryNavigation.getAttribute("data-visible");

  if (isVisible === "false") {
    primaryNavigation.setAttribute("data-visible", true);
  } else {
    primaryNavigation.setAttribute("data-visible", false);
  }
});

function closeMenu() {
  primaryNavigation.setAttribute("data-visible", false);
}
