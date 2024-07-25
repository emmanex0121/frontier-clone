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

console.log(window.location.pathname);
if (window.location.pathname === "/views/billing.html") {
  const expiration = document.getElementById("expiration");
  const ExpYear = document.getElementById("year");

  // Loop from 1 to 12 to create <option> elements
  for (let month = 1; month <= 12; month++) {
    const optionMonth = document.createElement("option");
    optionMonth.value = month;
    optionMonth.textContent = month;
    expiration.appendChild(optionMonth);
  }

  for (let year = 2024; year <= 2029; year++) {
    const optionYear = document.createElement("option");
    optionYear.value = year;
    optionYear.textContent = year;
    ExpYear.appendChild(optionYear);
  }
}

// if (window.location.pathname === "/views/billing.html") {
//   const year = document.getElementById("year");
//   // Loop from 2024 to 2029 to create <option> elements
//   for (let year = 2024; year <= 2029; year++) {
//     const optionYear = document.createElement("option");
//     optionYear.value = year;
//     optionYear.textContent = year;
//     year.appendChild(optionYear);
//   }
// }
