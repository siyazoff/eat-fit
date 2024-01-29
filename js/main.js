$(document).ready(function () {
  $(".burger").on("click", function () {
    $(".burger").toggleClass("active");
    $("#header").toggleClass("active");
  });

  let prevScrollPos = window.scrollY;
  const $header = $("#header");

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;
    $header.css(
      "top",
      prevScrollPos > currentScrollPos || currentScrollPos === 0
        ? "31px"
        : "-205px"
    );
    $header.removeClass("active");
    $(".burger").removeClass("active");
    prevScrollPos = currentScrollPos;
  });
});
