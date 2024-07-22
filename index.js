// toggles nav menu on mobile view upon menu button click
const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-general");
  const navComputedStyle = window.getComputedStyle(navLinks);
  console.log(window.getComputedStyle(navLinks).display); // <empty string>

  if (navComputedStyle.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});

// Toggles the footer links display in the footer top
function showFooter(event, element) {
  event.preventDefault();

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (event.type === "click" && mediaQuery.matches) {
    // console.log("clickkkkk");

    const footerLinks = element.lastElementChild;
    const footerComputedstyle = window.getComputedStyle(footerLinks);
    // console.log(footerComputedstyle.display);

    if (footerComputedstyle.display === "none") {
      footerLinks.style.display = "flex";
    } else {
      footerLinks.style.display = "none";
    }
  }
}
