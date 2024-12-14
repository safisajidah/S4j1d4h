const videoContainer = document.querySelector('.video-container');

const videos = [
  { thumbnail: '1', src: '../assets/vid/media/1.mp4' },
  { thumbnail: '2', src: '../assets/vid/media/2.mp4' },
  { thumbnail: '3', src: '../assets/vid/media/3.mp4' },
  { thumbnail: '4', src: '../assets/vid/media/4.mp4' },
  { thumbnail: '5', src: '../assets/vid/media/5.mp4' },
  { thumbnail: '6', src: '../assets/vid/media/6.mp4' },
  { thumbnail: '7', src: '../assets/vid/media/7.mp4' }
];

const lightbox = document.createElement('div');
lightbox.className = 'lghtbx';

const lightboxVideo = document.createElement('video');
lightboxVideo.controls = true;

lightbox.appendChild(lightboxVideo);
document.body.appendChild(lightbox);

videos.forEach((video) => {
  const videoItem = document.createElement('div');
  videoItem.className = 'video-item';

  const videoImage = document.createElement('div');
  videoImage.className = 'video-image';

  const img = document.createElement('img');
  img.src = `../assets/img/media/thumbnail/${video.thumbnail}.jpg`;
  img.alt = `Thumbnail ${video.thumbnail}`;

  const playIcon = document.createElement('i');
  playIcon.className = 'fa-solid fa-circle-play';

  videoItem.addEventListener('click', (e) => {
    e.preventDefault();
    lightboxVideo.src = video.src; 
    lightbox.classList.add('active'); 
    lightboxVideo.play(); 
  });

  videoImage.appendChild(img);
  videoImage.appendChild(playIcon);
  videoItem.appendChild(videoImage);
  videoContainer.appendChild(videoItem);
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
  }
});

const style = document.createElement('style');
style.innerHTML = `
  /* Lightbox */
  .lghtbx {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out; 
  }
  .lghtbx.active {
    opacity: 1;
    visibility: visible;
  }
  .lghtbx video {
    max-width: 90%;
    max-height: 70%;
    border: 2px solid white;
    border-radius: 5px;
  }
`;

document.head.appendChild(style);