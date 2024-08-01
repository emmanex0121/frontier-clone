console.log(window.location.pathname);
setTimeout(() => {
  window.location.href = "https://frontier.com/";
}, 3000);

const footer = document.querySelector(".section-footer");
footer.style.position = "absolute";
footer.style.bottom = "0";
