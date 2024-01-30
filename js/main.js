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

  $(".tabby-link").on("click", function (e) {
    e.preventDefault();

    var tabId = $(this).attr("href");
    $(
      `.woman_wrp .wrapper-weight > h3, 
      .woman_wrp .wrapper-cost > h3, 
      .woman_wrp .wrapper-info > p, 
      .woman_wrp .wrapper-info > .calculation > h4`
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
      .man__card .wrapper-cost > h3,
      .man__card .wrapper-info > p,
      .man__card .wrapper-info > .calculation > h4`
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

  $('input[type="radio"][name="activity"]').on("change", function () {
    var type = $(this).data("type");
    var text = "";

    switch (type) {
      case "easy":
        text = "Текст для низкого уровня активности";
        break;
      case "medium":
        text = "Текст для среднего уровня активности";
        break;
      case "hard":
        text = "Текст для высокого уровня активности";
        break;
    }

    $(".desc-goal").text(text);
  });
});
