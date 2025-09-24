// Reveal animation on scroll
const revealOnScroll = () => {
  const buttons = document.querySelectorAll(".contact-btn");
  const triggerBottom = window.innerHeight * 0.9;

  buttons.forEach(btn => {
    const rect = btn.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      btn.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
