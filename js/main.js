window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const swiper = new Swiper('.swiper', {
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
}
let swiper = document.querySelector('.swiper-wrapper');
let open = document.querySelector('.slider__button');


open.addEventListener('click', ()=>{
  open.classList.toggle('hidden')
  swiper.classList.toggle('opened')
  open.textContent = !swiper.classList.contains('opened') ? 'Показать все' : 'Скрыть'
})



