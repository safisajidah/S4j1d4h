const scrollIndicator = document.getElementById('scroll-indicator');

scrollIndicator.style.display = 'none';
setTimeout(() => {
    scrollIndicator.style.display = 'block';
}, 1500);

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollIndicator.style.display = 'none';
    } else {
        scrollIndicator.style.display = 'block';
    }
});
