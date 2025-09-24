// ----------------------
// Scroll Reveal Animation
// ----------------------
const revealOnScroll = () => {
  const cards = document.querySelectorAll(".project-card:not(.hide)");
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      card.classList.add("reveal");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // initial check

// ----------------------
// Show More / Show Less
// ----------------------
document.querySelectorAll(".project-summary").forEach(summary => {
  const fullText = summary.innerText.trim();
  const limit = 120;

  if (fullText.length > limit) {
    const truncated = fullText.slice(0, limit) + "...";

    const textSpan = document.createElement("span");
    textSpan.className = "text-content";
    textSpan.innerText = truncated;
    summary.innerHTML = "";
    summary.appendChild(textSpan);

    const toggle = document.createElement("span");
    toggle.className = "show-toggle";
    toggle.innerText = " Show More";
    summary.appendChild(toggle);

    let expanded = false;

    toggle.addEventListener("click", () => {
      if (!expanded) {
        textSpan.innerText = fullText;
        toggle.innerText = " Show Less";
      } else {
        textSpan.innerText = truncated;
        toggle.innerText = " Show More";
      }
      expanded = !expanded;
    });
  }
});

// ----------------------
// Filtering
// ----------------------

// normalize string (lowercase + remove extra spaces)
function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .trim();
}

// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Set active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = normalize(btn.dataset.category);

    projectCards.forEach(card => {
      // Split card categories by comma and normalize each
      const categories = (card.dataset.categories || "")
        .split(",")
        .map(c => normalize(c));

      if (category === "all" || categories.includes(category)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    revealOnScroll(); // trigger reveal after filtering
  });
});

// ----------------------
// Make Tags Clickable to Filter
// ----------------------
document.querySelectorAll(".tag").forEach(tag => {
  tag.addEventListener("click", () => {
    const tagText = normalize(tag.innerText);
    const correspondingBtn = Array.from(filterButtons).find(
      btn => normalize(btn.dataset.category) === tagText
    );
    if (correspondingBtn) correspondingBtn.click();
  });
});
