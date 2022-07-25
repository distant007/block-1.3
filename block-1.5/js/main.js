
const slider = document.querySelector('.slider')
  let swiper
function mobileSlider() {
    if (window.innerWidth === 320) {
       swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      init: true
    })
    }
    if (window.innerWidth > 320 && slider.classList.contains("swiper-initialized")) {
        swiper.destroy();
    }
}
mobileSlider();
window.addEventListener("resize", () => {
 mobileSlider();
});

let swiperWrapper = document.querySelector('.swiper-wrapper');
let open = document.querySelector('.slider__button');


open.addEventListener('click', ()=>{
  open.classList.toggle('hidden')
  swiperWrapper.classList.toggle('swiper--opened')
  open.textContent = !swiperWrapper.classList.contains('swiper--opened') ? 'Показать все' : 'Скрыть'
})



