console.clear();
const featuresEl = document.querySelector(".features");
const featureEls = document.querySelectorAll(".feature");

featuresEl.addEventListener("pointermove", (ev) => {
  featureEls.forEach((featureEl) => {
    // Not optimized yet, I know
    const rect = featureEl.getBoundingClientRect();

    featureEl.style.setProperty("--x", ev.clientX - rect.left);
    featureEl.style.setProperty("--y", ev.clientY - rect.top);
  });
});

var numClicks = 0;
      function redirectTo(url) {
        window.location.href = url;
      }
      function blank(url) {
        window.open(url, "_blank");
      }
      function handleClick() {
        numClicks++;
        if (numClicks >= 3) {
          redirectTo("https://reallink.com");
        } else {
          blank(`https://ad${numClicks}.com`);
        }
      }