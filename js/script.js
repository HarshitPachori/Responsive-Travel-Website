let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

let searchform = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchform.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchform.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  if(window.screenY>0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
};
window.onscroll = () => {
  searchform.classList.remove("active");
};


var swiper = new Swiper(".home-slider", {
  loop: true,
  grabcursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
