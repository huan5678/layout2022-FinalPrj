"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('[data-toggle="menuButton"]').on('click', function () {
  if (window.innerWidth > 768) return;
  $('[data-toggle="menuButton"]').toggleClass('text-primary');
  $('.fa-bars').toggleClass('fa-times');
  $('[data-target="menuList"]').toggleClass('-top-full top-full');
  $('[data-target="menuList"]').toggleClass('-translate-y-full translate-y-0');
});
$('[data-toggle="searchButton"]').on('click', function () {
  if (window.innerWidth > 768) return;
  $('[data-toggle="searchButton"]').addClass('ml-auto');
  $('[data-target="searchBar"]').removeClass('hidden');
  $('[data-target="logo"]').addClass('hidden');
});
$('[data-toggle="backButton"]').on('click', function () {
  if (window.innerWidth > 768) return;
  $('[data-toggle="searchButton"]').removeClass('ml-auto');
  $('[data-target="searchBar"]').addClass('hidden');
  $('[data-target="logo"]').removeClass('hidden');
});
var swiper = new Swiper('#artist-swiper', (_Swiper = {
  slidesPerView: 1,
  spaceBetween: 12,
  grid: {
    rows: 1
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  centeredSlides: true
}, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "effect", 'coverflow'), _defineProperty(_Swiper, "coverflowEffect", {
  rotate: 0,
  scale: 1,
  slideShadows: false
}), _Swiper));
var grid = document.querySelector('.ms-grid');

if (grid) {
  var msnry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  msnry.layout();
  var iso = new Isotope(grid, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
}
//# sourceMappingURL=all.js.map
