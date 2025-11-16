// Smooth fade-in animations for cards
document.addEventListener("scroll", () => {
  document.querySelectorAll(".card, .project-card, .skill-card").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
