document.getElementById("year").textContent = new Date().getFullYear();

// Ensure the page loads scrolled to top (so avatar is visible first)
window.addEventListener('load', () => {
  try { window.scrollTo(0, 0); } catch (e) { /* ignore */ }
});

// Guard form handling in case the HTML form isn't present
const form = document.getElementById("contactForm");
const result = document.getElementById("formResult");

if (form && result) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const messageEl = document.getElementById("message");

    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const message = messageEl ? messageEl.value.trim() : '';

    if (!name || !email || !message) {
      result.textContent = "Please fill all fields properly.";
      return;
    }

    result.textContent = `Thank you, ${name}! (This form is frontend-only.)`;
    form.reset();
  });
}

// Home button: force a refresh and make sure page is shown from the top
const homeBtn = document.getElementById("homeBtn");
if (homeBtn) {
  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Navigate to the current URL to force a full reload.
    // Using location.href assignment avoids errors if reload was prevented.
    window.location.href = window.location.href;
  });
}
