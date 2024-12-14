const selectImg = document.querySelector(".hero-img");
const selectText = document.querySelector(".hero-text");
const changeBg = document.querySelector(".video-bg");

let animationTimeout;

changeBg.classList.add("hidden");

selectImg.addEventListener("mouseover", () => {
  changeBg.classList.remove("hidden");
  selectText.style.opacity = '0';
  selectText.style.pointerEvents = 'none';
  selectImg.style.animation = 'none'; 
  clearTimeout(animationTimeout); 
});

selectImg.addEventListener("mouseleave", () => {
  changeBg.classList.add("hidden");
  selectText.style.opacity = '1';
  selectText.style.pointerEvents = 'initial';
});

animationTimeout = setTimeout(() => {
  selectImg.style.animation = 'scaleAnimation 1s infinite ease-in-out';
}, 3000);