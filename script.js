// Accessibility: focus outline for keyboard users
document.addEventListener("keyup", function (e) {
  if (e.key === "Tab") {
    document.body.classList.add("show-focus");
  }
});

// Optional: smooth scroll (future-proof)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});