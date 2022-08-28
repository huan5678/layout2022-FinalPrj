$('[data-toggle="menuButton"]').on('click', () => {
  if (window.innerWidth > 768) return;
  $('[data-toggle="menuButton"]').toggleClass('text-primary');
  $('.fa-bars').toggleClass('fa-times');
  $('[data-target="menuList"]').toggleClass('-top-full top-full');
  $('[data-target="menuList"]').toggleClass('-translate-y-full translate-y-0');
});

$('[data-toggle="searchButton"]').on('click', () => {
  if (window.innerWidth > 768) return;
  $('[data-toggle="searchButton"]').addClass('ml-auto');
  $('[data-target="searchBar"]').removeClass('hidden');
  $('[data-target="logo"]').addClass('hidden');
});

$('[data-toggle="backButton"]').on('click', () => {
  if (window.innerWidth > 768) return;
  $('[data-toggle="searchButton"]').removeClass('ml-auto');
  $('[data-target="searchBar"]').addClass('hidden');
  $('[data-target="logo"]').removeClass('hidden');
});

const swiper = new Swiper('#artist-swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  grid: {
    rows: 1,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    scale: 1,
    slideShadows: false,
  },
});
