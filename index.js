$(document).ready(function () {
  const themeSwitch = document.querySelector("#toggle-theme");
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
  });

  $("#toggle-theme").on("click", function () {
    $(this).parent().toggleClass("checked");
  });
});
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
