const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
const forwardBtn = document.querySelector('.horizontal-scroll-bar .foward');
const backwardBtn = document.querySelector('.horizontal-scroll-bar .backward');

const scrollAmount = 300; 

forwardBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

backwardBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}); 

const lenis = new Lenis({
    duration: 1.2,   
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
