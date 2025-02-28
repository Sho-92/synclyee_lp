document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // メニューのリンクをクリックしたら閉じる
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
