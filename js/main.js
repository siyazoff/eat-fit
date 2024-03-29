$(document).ready(function () {
  const links = document.querySelectorAll(".header .popup nav a");

  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  function closeOnClick() {
    $(".header__burger").toggleClass("active");
    $(".popup").toggleClass("active");
  }

  $(".header__burger").click(function () {
    $(this).toggleClass("active");
    $(".popup").toggleClass("active");
  });

  let prevScrollPos = window.scrollY;
  const $header = $("#header");
  const $headerBox = $(".header__box");

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (currentScrollPos === 0) {
      $header.css("top", isMobile ? "3px" : "31px");
      $header.css("background", "transparent");
    } else {
      $header.css("top", prevScrollPos > currentScrollPos ? "0" : "-150px");
      $header.css("background", "white");
    }

    $header.removeClass("active");
    $(".burger").removeClass("active");
    prevScrollPos = currentScrollPos;
  });

  $(".tabby-link").on("click", function (e) {
    e.preventDefault();

    var tabId = $(this).attr("href");
    $(
      `.woman_wrp .wrapper-weight > h3, 
    .woman_wrp .wrapper-cost > h3`
    ).hide();

    $(tabId).show();
    $(tabId + "-cost").show();
    $(tabId + "-comp").show();
    $(tabId + "-food").show();
    $(tabId + "-squi").show();
    $(tabId + "-fat").show();
    $(tabId + "-carb").show();
  });

  $(".tabby-link[data-tabby-default]").click();

  $(".tabby-man-link").on("click", function (e) {
    e.preventDefault();

    var tabId = $(this).attr("href");
    $(
      `.man__card .wrapper-weight > h3,
    .man__card .wrapper-cost > h3`
    ).hide();

    $(tabId).show();
    $(tabId + "-cost").show();
    $(tabId + "-comp").show();
    $(tabId + "-food").show();
    $(tabId + "-squi").show();
    $(tabId + "-fat").show();
    $(tabId + "-carb").show();
  });

  $(".tabby-man-link[data-tabby-default]").click();
  $(".tabby-man-link[data-tabby-default]").click();

  $('input[type="radio"][name="activity"]').on("change", function () {
    var type = $(this).data("type");
    var text = "";

    switch (type) {
      case "easy":
        text = "* Текст для низкого уровня активности";
        break;
      case "medium":
        text = "* Текст для среднего уровня активности";
        break;
      case "hard":
        text = "* Текст для высокого уровня активности";
        break;
    }

    $(".desc-goal").text(text);
  });

  $(".faq").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find("p").slideToggle();
    } else {
      $(this).addClass("active");
      $(this).find("p").slideToggle();
    }
  });

  $(".country-change").click(function () {
    $("[food-tabs]").slideToggle();
  });

  function showModal() {
    $(".modal").css("display", "flex");
  }

  function hideModal() {
    $(".modal").css("display", "none");
  }

  setTimeout(function () {
    showModal();
  }, 15000);

  $(".modal__button_open").click();
  $(".modal__close").click(hideModal);

  $(window).click(function (event) {
    if ($(event.target).is(".modal")) {
      hideModal();
    }
  });

  $("input[type=tel]").mask("+7 (999) 999-9999");
});
