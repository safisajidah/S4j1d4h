const galleryContainer = document.querySelector('.gal-container');

for (let i = 1; i <= 70; i++) {
  const galItem = document.createElement('div');
  galItem.className = 'gal-item';

  const galImage = document.createElement('div');
  galImage.className = 'gal-image';

  const img = document.createElement('img');
  img.src = `../assets/img/media/${i}.jpg`;
  img.alt = `${i}`; 

  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    const lightboxImg = document.createElement('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxImg.style = `
      max-width: 90%;
      max-height: 70%;
      border: 2px solid white;
      border-radius: 5px;
    `;

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(lightbox);
        }, 300); 
      }
    });

    lightbox.appendChild(lightboxImg);

    document.body.appendChild(lightbox);

    setTimeout(() => {
      lightbox.style.opacity = '1';
    }, 10);
  });

  galImage.appendChild(img);
  galItem.appendChild(galImage);
  galleryContainer.appendChild(galItem);
}
