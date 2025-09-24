
/* Type + erase loop for the name (moderate speed) */
document.addEventListener('DOMContentLoaded', () => {
  const texts = ['Data Scientist', 'Educator', 'Career Mentor']; 
  const el = document.getElementById('typing-text');
  const typeSpeed = 110;   // typing speed
  const eraseSpeed = 60;   // erasing speed
  const pauseAfterType = 1400; 
  const pauseAfterErase = 500; 

  let txtIdx = 0;
  let charIdx = 0;
  let typing = true;

  function tick() {
    const current = texts[txtIdx];
    if (typing) {
      if (charIdx < current.length) {
        el.textContent = current.slice(0, ++charIdx);
        setTimeout(tick, typeSpeed);
      } else {
        setTimeout(() => { typing = false; setTimeout(tick, eraseSpeed); }, pauseAfterType);
      }
    } else {
      if (charIdx > 0) {
        el.textContent = current.slice(0, --charIdx);
        setTimeout(tick, eraseSpeed);
      } else {
        txtIdx = (txtIdx + 1) % texts.length;
        typing = true;
        setTimeout(tick, 300);
      }
    }
  }

  tick();
});

// Services
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".services-slider");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  if (!slider) return;

  const intervalTime = 10000; // auto-scroll every 3s

  // Get width of one full card (including gap)
  const getCardWidth = () => {
    const card = slider.querySelector(".service-card");
    return card ? card.offsetWidth + 20 : 320; // 20px = gap
  };

  // Manual scroll with arrows
  rightBtn?.addEventListener("click", () => {
    slider.scrollBy({ left: getCardWidth() * 4, behavior: "smooth" }); // scroll 4 at once
  });

  leftBtn?.addEventListener("click", () => {
    slider.scrollBy({ left: -getCardWidth() * 4, behavior: "smooth" });
  });

  // Auto-scroll
  const startAutoScroll = () => {
    return setInterval(() => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: getCardWidth() * 4, behavior: "smooth" });
      }
    }, intervalTime);
  };

  let autoScroll = startAutoScroll();

  // Pause auto-scroll on hover
  slider.addEventListener("mouseenter", () => clearInterval(autoScroll));
  slider.addEventListener("mouseleave", () => {
    autoScroll = startAutoScroll();
  });
});



//Projects
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".projects-slider");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const cardWidth = 320; // card width + gap

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
});

// Resources Slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".resources-slider");
  const leftBtn = slider.parentElement.querySelector(".left-btn");
  const rightBtn = slider.parentElement.querySelector(".right-btn");

  if (!slider) return;

  const cardWidth = 320; // card width + gap

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
});
