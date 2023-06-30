var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 1200) {
    if (!init) {
      init = true;
      var swiper = new Swiper(".service .slide-content", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        centerSlide: 'true',
        initialSlide: 1,
        fade: 'true',
        dragCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  
  else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);