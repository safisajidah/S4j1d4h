const galleryButton = document.querySelector(".m-gallery");
const videoButton = document.querySelector(".m-video");
const previousButton = document.querySelector(".gal-header");
const previousButton2 = document.querySelector(".video-header")

const mediaLayout = document.querySelector(".m-box");
const galleryLayout = document.querySelector(".gal-layout");
const videoLayout = document.querySelector(".video-layout");

galleryLayout.style.display = 'none';
videoLayout.style.display = 'none';

galleryButton.addEventListener("click", () => {
  galleryLayout.style.display = 'block';
  mediaLayout.style.display = 'none';
});

videoButton.addEventListener("click", () => {
  videoLayout.style.display = 'block';
  mediaLayout.style.display = 'none';
});

previousButton.addEventListener("click", () => {
  galleryLayout.style.display = 'none';
  mediaLayout.style.display = 'flex';
});

previousButton2.addEventListener("click", () => {
  videoLayout.style.display = 'none';
  mediaLayout.style.display = 'flex';
});