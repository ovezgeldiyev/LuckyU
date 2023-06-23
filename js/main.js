// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  if (header.classList.contains("sticky")) {
  } else {
    header.classList.toggle("active");
  }
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end
// scroll start
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// sliders
$(".hero__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 1200,
    autoplay: false,
    fade: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
  });
});
/*mobile slider */
function mobileOnlySlider() {
  $(".slider").each(function (index, element) {
    let $slickElement = $(element);
    $slickElement.slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: $slickElement.next().find(".prev"),
      nextArrow: $slickElement.next().find(".next"),
      dots: false,
      fade: false,
    });
  });
}
if (window.innerWidth < 541) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 541) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);

// custom arrows
var $status = $(".pagingInfo");
$(".scenes__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");
  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}

const modal = document.getElementById("modal");
if (modal) {
  const modalBtn = document.getElementById("modalBtn");
  const modalClose = document.getElementById("modalClose");

  modalBtn.onclick = () => {
    modal.classList.add("active");
    body.classList.add("active");
  };
  modalClose.onclick = () => {
    modal.classList.remove("active");
    body.classList.remove("active");
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("active");
      body.classList.remove("active");
    }
  };
}
