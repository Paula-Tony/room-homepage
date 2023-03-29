let backgroundsContainer = document.querySelectorAll('.backgrounds img');
let contentsContainer = document.querySelectorAll('.contents > div');
let nextBtn = document.querySelector('.right');
let prevBtn = document.querySelector('.left');
let menuBtn = document.querySelector('.menu-icon');

nextBtn.addEventListener('click', function () {
  if (backgroundsContainer.length - 1 === currSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  showSlides(currSlide);
});

prevBtn.addEventListener('click', function () {
  if (currSlide === 0) {
    currSlide = backgroundsContainer.length - 1;
  } else {
    currSlide--;
  }
  showSlides(currSlide);
});

let currSlide = 0;
function showSlides(currSlide) {
  backgroundsContainer.forEach((bg, i) => {
    bg.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
  contentsContainer.forEach((content, i) => {
    content.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
}
showSlides(currSlide);

menuBtn.addEventListener('click', function () {
  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  let menuHtml = `
  <div class="top-menu">
    <img class="close" src="images/icon-close.svg" />
    <ul class="nav-links">
      <li><a href="#">home</a></li>
      <li><a href="#">shop</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">contact</a></li>
    </ul>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', menuHtml);
  setTimeout(() => {
    document.body.appendChild(overlay);
    document.querySelector('.top-menu').classList.add('active');
  }, 0);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    document.querySelector('.top-menu').classList.remove('active');
    document.querySelector('.overlay').remove();
    setTimeout(() => {
      document.querySelector('.top-menu').remove();
    }, 500);
  }
});
