jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 200) {
      $("#menu").addClass("mudar");
      $("#icon").addClass("n");

      $("ul li a").addClass("preto");
      $("#menu").addClass("bgDiferente");
    } else {
      $("#menu").removeClass("mudar");
      $("#icon").removeClass("navbar-toggler-icon2");
      $("ul li a").removeClass("preto");
      $("#menu").removeClass("bgDiferente");
      //$(".escondeMenu").show();
      //$(".mostraCollapse").hide();
    }
  });
});

$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
function sizeOfThings() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var screenWidth = screen.width;
  var screenHeight = screen.height;
}
sizeOfThings();

window.addEventListener("resize", function () {
  sizeOfThings();
});

$(document).ready(function () {
  $(".opentop, .closetop").on("click", function () {
    if ($(".areafechado").is(":visible")) {
      $(".areafechado").slideUp();
      $(".areaAberto").slideDown();
      $("#boxtopo").removeClass("fechado");
    } else {
      $(".areafechado").slideDown();
      $(".areaAberto").slideUp();
      $("#boxtopo").addClass("fechado");
    }
  });
});

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

$(document).ready(function () {
  // $(".areaformmail").hide();
  // $(".arearesposta").hide();
  $("#telefone").mask("(99) 9999-9999?9");
  $("#telefone2").mask("(99) 9999-9999?9");
});

(() => {
  if (!localStorage.pureJavaScriptCookies) {
    document.querySelector(".box-cookies").classList.remove("hide");
  }

  const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add("hide");
    localStorage.setItem("pureJavaScriptCookies", "accept");
  };

  const btnCookies = document.querySelector(".btn-cookies");

  btnCookies.addEventListener("click", acceptCookies);
})();
