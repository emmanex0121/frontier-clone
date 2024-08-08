// Billing Section
const expiration = document.getElementById("expiration");
const states = document.getElementById("states");
const ExpYear = document.getElementById("year");
// console.log(ExpYear);

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

// Billing page form submit
const billingSubmit = document.querySelector(".submit-btn");
billingSubmit.addEventListener("click", async () => {
  const inputs = document.querySelectorAll(".info-container input");
  const checkBox = document.querySelector(".checkbox");
  const selectBoxes = document.querySelectorAll(".dropdown-billing");
  // console.log(checkBox);
  // const date = document.getElementById("date-picker")
  // console.log(date.value)

  const messages = Array.from(inputs).map(
    (input) => `${input.name}: ${input.value}`
  );
  messages.push(`prepaid: ${checkBox.checked}`);
  console.log(messages);

  selectBoxes.forEach((selectOptions) => {
    // console.log(selectOptions.value, selectOptions.name);
    messages.push(`${selectOptions.name}: ${selectOptions.value}`);
  });

  await apiCall("./banking.html", messages);
  console.log("billing success");
});
