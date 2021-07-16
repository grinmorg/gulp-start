$(function () {
  // menu
  $(".burder-menu").click(function () {
    $(this).toggleClass("burger--active");
    $('.nav').toggleClass("nav--active");
    $('body').toggleClass("body--overflow");

  });

  // Закрывать меню по клику вне меню
  $(document).click( function(e){
    if ( $(e.target).closest('.nav').length || $(e.target).closest('.burder-menu').length) {
        // клик внутри элемента 
        return;
    }
    // клик снаружи элемента 
    $(".burder-menu").removeClass("burger--active");
    $('.nav').removeClass("nav--active");
});

  // Табы
  $(".tabs-wrapper").each(function () {
    let ths = $(this);
    ths.find(".tab-item").not(":first").hide();
    ths
      .find(".tab")
      .click(function () {
        ths
          .find(".tab")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
        $(".tasks__btn").removeClass("tasks__btn--active");
        ths.find(".tab-item").hide().eq($(this).index()).fadeIn();
      })
      .eq(0)
      .addClass("active");
  });

  // Скрыть / показать пароль в инпуте 
  $(".input--password__icon").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".input--password__icon img").attr(
        "src",
        "./assets/images/Iconly/inputs/Hide.png"
      );
      $(".input--password input").attr("type", "text");
    } else {
      $(".input--password__icon img").attr(
        "src",
        "./assets/images/Iconly/inputs/Show.png"
      );
      $(".input--password input").attr("type", "password");
    }
  });

  // Стандартные маски
  $(".js-input-email").on("input", function () {
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (!testEmail.test($(this).val())) {
      $(this).siblings(".input__error").css("display", "block");
    } else {
      $(this).siblings(".input__error").css("display", "none");
    }
  });

  $(".js-input-num").on("input", function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, "");
  });

  // Аккордион
  $(".accordion-item-title").click(function () {
    var $item = $(this).parents(".accordion-item");

    $item.toggleClass("active").siblings("active").removeClass("active");
  });




  // Слайдеры
  $(".js-our-works-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 7.5,
    center: true,
    autoplay: true,
    responsive: {
      1200: {
        items: 7.5,
      },
      768: {
        items: 4,
      },
      480: {
        items: 4,
      },
      0: {
        items: 2,
      },
    },
  });

  // /Слайдеры


  // "Показать еще"
  $(".js-product-info-showmore").on("click", function () {
    if ($(this).hasClass("active")) {
      $(".product-info__row--visible")
        .removeClass("product-info__row--visible")
        .addClass("product-info__row--hidden");
      $(this).removeClass("active");
    } else {
      $(".product-info__row--hidden")
        .removeClass("product-info__row--hidden")
        .addClass("product-info__row--visible");
      $(this).addClass("active");
    }
  });

  // FIXME: <Удалить в prod build>

  // fake modal open
  // if ($('#modal-auth')){
  // 	$.fancybox.open({
  // 		src  : '#modal-auth'
  // 	});
  // }

  // FIXME: </Удалить в prod build>
});
