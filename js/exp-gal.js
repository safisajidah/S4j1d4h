const totalImages = 10;
const gallery = document.querySelector('#exp-gal'); 
const templateContainer = document.querySelector('.expg-container'); 

templateContainer.remove();

for (let i = 1; i <= totalImages; i++) {
  const newContainer = templateContainer.cloneNode(true); 
  const img = newContainer.querySelector('.expg-item .expg-image img'); 
  img.src = `../assets/img/exp/${i}.jpg`; 
  img.alt = `${i}`; 
  gallery.appendChild(newContainer); 
}