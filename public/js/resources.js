// Scroll reveal animation
const revealOnScroll = () => {
  const cards = document.querySelectorAll(".resource-card");
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      card.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
