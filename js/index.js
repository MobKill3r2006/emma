$(function () {
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, "linear");
  });
});

(function () {
  var target = $("#section02");
  $("#wrapper").scroll(function () {
    target.prop("scrollTop", this.scrollTop).prop("scrollLeft", this.scrollLeft);
  });
})();
