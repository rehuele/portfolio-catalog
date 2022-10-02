import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'

let videoCards = document.querySelectorAll('.card-video');

videoCards.forEach(videoCard => {
  videoCard.addEventListener('click', e => {

    const videoBtn = e.currentTarget.querySelector('.icon-play'),
      videoPoster = e.currentTarget.querySelector('.card-video__placeholder'),
      iframe = e.currentTarget.querySelector('iframe'),
      player = new Vimeo.Player(iframe);

    videoBtn.style.cssText = 'z-index: 0; opacity: 0;';
    videoPoster.style.cssText = 'z-index: 0; opacity: 0;';
    player.play();
  });
});

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Pagination],
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper.on('slideChange', function() {
//   console.log('slide changed');

  // let carouselIframes = document.querySelectorAll('.stories iframe');
  // let currentSlide = document.querySelector('.swiper-slide-active'),
  //   prevSlide = document.querySelector('.swiper-slide-prev'),
  //   nextSlide = document.querySelector('.swiper-slide-next');
// })
