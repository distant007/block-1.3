new Swiper('.slider', {
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1.3,
  spaceBetween: 15,
  breakpoints: {
    350: {
      slidesPerView: 1.4
    },
    430: {
      slidesPerView: 1.7
    },
    500: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 2.3
    },
    640: {
      slidesPerView: 2.5
    },
    700:{
      slidesPerView: 2.8
    }

  }
});

let buttons = document.querySelector('.brands__buttons');
let showMore = document.querySelector('.brands__button-show');
let hidden = document.querySelector('.brands__button-hidden');

showMore.onclick = function () {
  buttons.classList.toggle('height');
  buttons.classList.toggle('height-more');
  showMore.classList.toggle('hidden');
  hidden.classList.toggle('show');
}
hidden.onclick = function () {
  buttons.classList.toggle('height');
  buttons.classList.toggle('height-more');
  hidden.classList.toggle('show');
  showMore.classList.toggle('hidden');
}


