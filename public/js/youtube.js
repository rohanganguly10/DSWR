// Switch main video on thumbnail click
const thumbs = document.querySelectorAll(".yt-thumb");
const mainVideo = document.getElementById("mainVideo");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    // Replace main video source with clicked thumbnail’s video
    mainVideo.src = thumb.src;

    // Smooth scroll to main video
    window.scrollTo({
      top: mainVideo.offsetTop - 80,
      behavior: "smooth"
    });
  });
});

// Subscribe alert
const subscribeBtn = document.querySelector(".subscribe-btn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    alert("🎉 Thanks for subscribing!");
  });
}

// Filter videos by category
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // Update active button styling
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/hide thumbnails
    thumbs.forEach(thumb => {
      const thumbCategory = thumb.dataset.category;

      if (category === "all" || category === thumbCategory) {
        thumb.style.display = "inline-block";
      } else {
        thumb.style.display = "none";
      }
    });
  });
});
