//wheel event

window.addEventListener("wheel", function (e) {
  e.preventDefault();
}, { passive: false });


const mHtml = $("html");
let page = 1;


mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 6) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop }, 1000, "easeOutCubic");

  if (page == 1) {
    $(".circle").removeClass("C_active");
    $(".page p").removeClass("active");
    $(".bags_c").addClass("C_active");
    $(".bags_bx p").addClass("active");
  } else if (page == 2) {
    $(".circle").removeClass("C_active");
    $(".page p").removeClass("active");
    $(".RtW_c").addClass("C_active");
    $(".RtW_bx p").addClass("active");
  } else if (page == 3) {
    $(".circle").removeClass("C_active");
    $(".page p").removeClass("active");
    $(".shoes_c").addClass("C_active");
    $(".shoes_bx p").addClass("active");
  }
  else if (page == 4) {
    $(".circle").removeClass("C_active");
    $(".page p").removeClass("active");
    $(".galleria_c").addClass("C_active");
    $(".galleria_bx p").addClass("active");
  }
  else if (page == 5) {
    $(".circle").removeClass("C_active");
    $(".page p").removeClass("active");
    $(".news_c").addClass("C_active");
    $(".news_bx p").addClass("active");
    $("#pagination").css("display", "flex");
    $("#header").css("display", "block");
  }
  else {
    $("#pagination").css("display", "none");
    $("#header").css("display", "none");
  }
});

//wheel event

//aos

AOS.init();


// aos

//swiper

var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  speed: 300
});

//swiper

//menu

$(window).resize(function () {
  if (window.innerWidth > 1060) {
    $(document).on("click", "#bars", (function () {
      $("#bars .line:nth-child(1)").addClass("line_ani1");
      $("#bars .line:nth-child(2)").css("opacity", 0);
      $("#bars .line:nth-child(3)").addClass("line_ani2");
      $("#bars").addClass("bars_on");
      $("#menu").addClass("menu_on");
    }));
    $(document).on("click", ".bars_on", (function () {
      $("#bars .line:nth-child(1)").removeClass("line_ani1");
      $("#bars .line:nth-child(2)").css("opacity", 1);
      $("#bars .line:nth-child(3)").removeClass("line_ani2");
      $("#bars").removeClass("bars_on");
      $("#menu").removeClass("menu_on");
    }));
  } else {
    $(document).on("click", "#bars", (function () {
      $("#bars .line:nth-child(1)").addClass("line_ani1");
      $("#bars .line:nth-child(2)").css("opacity", 0);
      $("#bars .line:nth-child(3)").addClass("line_ani2");
      $("#bars").addClass("bars_on");
      $("#m_menu").addClass("menu_on");
      if ($("#m_menu").hasClass("menu_on")) {
        $("html").on('scroll touchmove mousewheel', function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        })
      }
    }));
    $(document).on("click", ".bars_on", (function () {
      $("#bars .line:nth-child(1)").removeClass("line_ani1");
      $("#bars .line:nth-child(2)").css("opacity", 1);
      $("#bars .line:nth-child(3)").removeClass("line_ani2");
      $("#bars").removeClass("bars_on");
      $("#m_menu").removeClass("menu_on");
      $("html").off('scroll touchmove mousewheel')
    }));
  }
}).resize();


$(window).resize(function () { document.location.reload(); })


$("#menu .Left .content li:nth-child(1)").click(function () {
  $("#menu .Left .content li").removeClass("fw_bold");
  $("#menu .Left .content li span").removeClass("bb_2sw");
  $(".R_menu").removeClass("R_menu_on");
  $(".R_menu:nth-child(1)").addClass("R_menu_on");
  $("#menu .Left .content li:nth-child(1)").addClass("fw_bold");
  $("#menu .Left .content li:nth-child(1) span").addClass("bb_2sw");
});

$("#menu .Left .content li:nth-child(2)").click(function () {
  $("#menu .Left .content li").removeClass("fw_bold");
  $("#menu .Left .content li span").removeClass("bb_2sw");
  $(".R_menu").removeClass("R_menu_on");
  $(".R_menu:nth-child(2)").addClass("R_menu_on");
  $("#menu .Left .content li:nth-child(2)").addClass("fw_bold");
  $("#menu .Left .content li:nth-child(2) span").addClass("bb_2sw");
});

$("#menu .Left .content li:nth-child(3)").click(function () {
  $("#menu .Left .content li").removeClass("fw_bold");
  $("#menu .Left .content li span").removeClass("bb_2sw");
  $(".R_menu").removeClass("R_menu_on");
  $(".R_menu:nth-child(3)").addClass("R_menu_on");
  $("#menu .Left .content li:nth-child(3)").addClass("fw_bold");
  $("#menu .Left .content li:nth-child(3) span").addClass("bb_2sw");
});

$("#menu .Left .content li:nth-child(4)").click(function () {
  $("#menu .Left .content li").removeClass("fw_bold");
  $("#menu .Left .content li span").removeClass("bb_2sw");
  $(".R_menu").removeClass("R_menu_on");
  $(".R_menu:nth-child(4)").addClass("R_menu_on");
  $("#menu .Left .content li:nth-child(4)").addClass("fw_bold");
  $("#menu .Left .content li:nth-child(4) span").addClass("bb_2sw");
});

$("#menu .Left .content li:nth-child(5)").click(function () {
  $("#menu .Left .content li").removeClass("fw_bold");
  $("#menu .Left .content li span").removeClass("bb_2sw");
  $(".R_menu").removeClass("R_menu_on");
  $(".R_menu:nth-child(5)").addClass("R_menu_on");
  $("#menu .Left .content li:nth-child(5)").addClass("fw_bold");
  $("#menu .Left .content li:nth-child(5) span").addClass("bb_2sw");
});

//menu

//search

$(".search_bx .search_icon").on("click", function () {
  $(".search_bx").css("padding", "4px 12px");
  $(".search_icon").css("filter", "none");
  $(".search_bx input").css("width", "200px");
  $(".search_bx input").css("opacity", "1");
  $(".search_bx").css("background-color", "white");
});

$('html').click(function (e) {
  if ($(e.target).parents('.search_bx').length < 1) {
    $(".search_bx").css("padding", "0");
    $(".search_icon").css("filter", "brightness(0) invert(1)");
    $(".search_bx input").css("width", "0");
    $(".search_bx input").css("opacity", "0");
    $(".search_bx").css("background-color", "transparent");
  }
});

//search

//login
$(".person_bx span").on("click", function () {
  $("#login").css("opacity", 1);
  $("#login").css("z-index", 998);
})
$(".login_close").on("click", function () {
  $("#login").css("opacity", 0);
  $("#login").css("z-index", "-1");
})

//login

//mobile_menu

$(".mPerson_bx").on("click", function () {
  $("#login").css("opacity", 1);
  $("#login").css("z-index", 998);
});
$(".login_close").on("click", function () {
  $("#login").css("opacity", 0);
  $("#login").css("z-index", "-1");
});

$(".tit_menu>li:nth-child(1)>p").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 63px)");
  }
})

$(".tit_menu>li:nth-child(2)>p").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 63px)");
  }
})

$(".tit_menu>li:nth-child(3)>p").click(function () {
  if ($(".tit_menu>li:nth-child(3)>.sub_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(3)>.sub_menu").removeClass("block");
    $(".tit_menu>li:nth-child(3)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(3)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(3)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(3)>.sub_menu").addClass("block");
    $(".tit_menu>li:nth-child(3)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(3)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(3)>.arrow").css("left", "calc(100% - 63px)");
  }
})

$(".tit_menu>li:nth-child(4)>p").click(function () {
  if ($(".tit_menu>li:nth-child(4)>.sub_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(4)>.sub_menu").removeClass("block");
    $(".tit_menu>li:nth-child(4)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(4)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(4)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(4)>.sub_menu").addClass("block");
    $(".tit_menu>li:nth-child(4)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(4)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(4)>.arrow").css("left", "calc(100% - 63px)");
  }
})

$(".tit_menu>li:nth-child(5)>p").click(function () {
  if ($(".tit_menu>li:nth-child(5)>.sub_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(5)>.sub_menu").removeClass("block");
    $(".tit_menu>li:nth-child(5)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(5)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(5)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(5)>.sub_menu").addClass("block");
    $(".tit_menu>li:nth-child(5)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(5)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(5)>.arrow").css("left", "calc(100% - 63px)");
  }
})


if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(3)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(4)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(5)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(6)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(7)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(1)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)").click(function () {
  if ($(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(1)>.sub_menu>li:nth-child(8)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(3)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(4)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(5)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(6)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(7)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(2)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)").click(function () {
  if ($(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(2)>.sub_menu>li:nth-child(8)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(3)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)").click(function () {
  if ($(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(3)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)").click(function () {
  if ($(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(3)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(4)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)").click(function () {
  if ($(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(4)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)").click(function () {
  if ($(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(4)>.sub_menu>li:nth-child(2)>.arrow").css("left", "calc(100% - 63px)");
  }
})

if ($(".tit_menu>li:nth-child(5)>.sub_menu").hasClass("block")) { }
$(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)").click(function () {
  if ($(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.detail_menu").hasClass("block")) {
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.detail_menu").removeClass("block");
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(0)");
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.arrow").css("top", "30px");
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 60px)");
  } else {
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.detail_menu").addClass("block");
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.arrow").css("transform", "rotate(180deg)");
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.arrow").css("top", "0");
    $(".tit_menu>li:nth-child(5)>.sub_menu>li:nth-child(1)>.arrow").css("left", "calc(100% - 63px)");
  }
})

//mobile_menu



