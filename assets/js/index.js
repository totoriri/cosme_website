$(document).ready(function () {
  $(window).on("load resize", function () {
    var w = $(window).width();
    var x = 768;
    if (w < x) {
      //画面サイズが768px未満のときの処理
      $("#price-link").attr("href", "#price--sp");
    } else {
      //それ以外のときの処理
      $("#price-link").attr("href", "#price--pc");
    }
  });

  $(".gnav__item a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".gnav__list").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    if ($(".menu-btn i").hasClass("active")) {
      $(".mainvsl__txt--l").addClass("isBlack");
    } else {
      $(".mainvsl__txt--l").removeClass("isBlack");
    }
  });
});
