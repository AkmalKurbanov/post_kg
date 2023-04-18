import Swiper from 'swiper/bundle';

var swiper = new Swiper(".hero-slider-js", {
  loop: true,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: -100,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
      autoplay: false
    },
  }
});

var swiper = new Swiper(".compare-slider-desk-js", {
  speed: 2000,
  slidesPerGroupSkip: 5,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
      autoplay: false
    },
  }
});

var swiper = new Swiper(".example-js", {
  loop: true,
  speed: 10000,
  autoplay: {
    delay: -100,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 15,
    },
  }
});
var swiper = new Swiper(".popular-js", {
  loop: true,
  speed: 2000,
  spaceBetween: 15,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    }
  }
});

var swiper = new Swiper(".prohibited-js", {
  loop: true,
  speed: 4000,
  spaceBetween: 15,
  allowTouchMove: false,
  autoplay: {
    delay: -100,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
    }
  }
});