const openBtn = document.getElementById("openBtn");
const reasonsSection = document.getElementById("reasonsSection");
const timelineSection = document.getElementById("timelineSection");

// ✅ Only run if elements exist
if (openBtn && reasonsSection && timelineSection) {

  openBtn.addEventListener("click", () => {

    reasonsSection.classList.remove("hidden");
    timelineSection.classList.remove("hidden");

    reasonsSection.scrollIntoView({
      behavior: "smooth"
    });

  });

}