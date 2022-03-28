//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

// Smooth scrolling
$(function () {
  const headerEl = document.querySelector(".header");
  const allLinks = document.querySelectorAll("a:link");
  allLinks.forEach(link =>
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#"){
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other links
      if (href != "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // if(!href.startsWith("#")){
      //   window.open(href, "_blank");
      // }

      // Close mobile navigation
      if (link.classList.contains("main-nav__link")) {
        headerEl.classList.toggle("nav-open");
      }
    })
  );
});

// sider
$(function () {
  var slider = $('.mis-stage').miSlider({
      //  The height of the stage in px. Options: false or positive integer. false = height is calculated using maximum slide heights. Default: false
      stageHeight: 380,
      //  Number of slides visible at one time. Options: false or positive integer. false = Fit as many as possible.  Default: 1
      slidesOnStage: false,
      //  The location of the current slide on the stage. Options: 'left', 'right', 'center'. Defualt: 'left'
      slidePosition: 'center',
      //  The slide to start on. Options: 'beg', 'mid', 'end' or slide number starting at 1 - '1','2','3', etc. Defualt: 'beg'
      slideStart: 'mid',
      //  The relative percentage scaling factor of the current slide - other slides are scaled down. Options: positive number 100 or higher. 100 = No scaling. Defualt: 100
      slideScaling: 150,
      //  The vertical offset of the slide center as a percentage of slide height. Options:  positive or negative number. Neg value = up. Pos value = down. 0 = No offset. Default: 0
      offsetV: -5,
      //  Center slide contents vertically - Boolean. Default: false
      centerV: true,
      //  Opacity of the prev and next button navigation when not transitioning. Options: Number between 0 and 1. 0 (transparent) - 1 (opaque). Default: .5
      navButtonsOpacity: 1,
  })
})

var responsiveSlider = function () {
  var slider = document.getElementById("home");
  let images = ["background_1",'background_2','background_3']
  var count = 1;

  var nextSlide = function () {
    if(count < images.length){
      slider.classList.remove(images[-count])
      slider.classList.add(images[count])
      count ++
    }else if(count == images.length){
      images.forEach(image => {
        slider.classList.remove(image)
      }); 
      slider.classList.add(images[0])
      count = 1
    }
  };

  setInterval(function () {
    nextSlide();
  }, 4000);
};

window.onload = function () {
  responsiveSlider();
};
