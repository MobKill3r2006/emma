$(function () {
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("href") == "#section01" || $(this).attr("href") == "#section01-desk") $("html, body").animate({ scrollTop: 0 }, 500, "linear");
    else if ($(this).attr("href") == "#section02" || $(this).attr("href") == "#section02-desk")
      $("html, body").animate({ scrollTop: $($(this).attr("href")).height() }, 500, "linear");
    else if ($(this).attr("href") == "#section03")
      $("html, body").animate({ scrollTop: $("#section02").height() + $($(this).attr("href")).height() }, 500, "linear");
    else if ($(this).attr("href") == "#section03-desk")
      $("html, body").animate({ scrollTop: $("#section02-desk").height() + $($(this).attr("href")).height() }, 500, "linear");
  });
});
