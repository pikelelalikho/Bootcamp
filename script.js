// Page loaded animation
globalThis.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });
});

// Contact form handler
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}

console.log("Portfolio page loaded successfully.");
