function adjustLayout() {
  if (!is_tax) {
    if (!$(".section-cities").length) return;
    $(".section-cities .cities").addClass("accordion");
    if ($(window).width() >= 768) {
      $(".section-cities .cities").removeClass("accordion");
      $(".cities li .exp").hide();
      $(".cities li ul").show();
    } else {
      $(".section-cities .cities").addClass("accordion");
      $(".cities li .exp").show();
    }
  } else {
    if (
      location.href.indexOf("/locale") > -1 ||
      location.href.indexOf("/strip-club") > -1
    ) {
      if ($(window).width() >= 768) {
        $(".section-cities .cities").removeClass("accordion");
        $(".cities li .exp").hide();
        $(".cities li ul").show();
        if ($(".browse").length) {
          $(".browse").show();
          $(".browse").fadeTo("fast", 1);
          $(".wrapper").removeClass("disable-scrol");
        }
      } else {
        $(".section-cities .cities").addClass("accordion");
        $(".cities li .exp").show();
        if ($(".browse").length) {
          $(".browse").hide();
          $(".wrapper").removeClass("disable-scrol");
        }
      }
    } else {
      $(".cities li .exp").show();
      if ($(".browse").length) {
        if ($(window).width() > 768) {
          $(".wrapper").removeClass("disable-scrol");
        } else {
          if ($(".browse").is(":visible")) {
            $(".wrapper").addClass("disable-scrol");
          } else {
            $(".wrapper").removeClass("disable-scrol");
          }
        }
      }
    }
  }
}
function openCat(id) {
  var el = $(".cat-item-" + id);
  if (id == "0") {
    $.each($(".cities > li, .accordion > li"), function () {
      if ($(this).find("a").next().text().indexOf("United States") > -1) {
        el = $(
          "." + $(this).attr("class").split(" ").join(".") + " > ul > li"
        ).first();
      }
    });
  }
  if (el == undefined) return;
  el.addClass("current-cat");
  var have_parent = false;
  if (el.parent().parent().parent().prop("tagName") == "UL") {
    have_parent = true;
    el.parent().parent().parent().show();
    el.parent()
      .prev()
      .find("i")
      .removeClass("fa-plus-square-o")
      .addClass("fa-minus-square-o");
    el.parent()
      .parent()
      .parent()
      .parent()
      .children("a")
      .find("i")
      .removeClass("fa-plus-square-o")
      .addClass("fa-minus-square-o");
    if (is_tax) {
      el.parent().parent().parent().parent().addClass("current-cat-ancestor");
      el.parent()
        .parent()
        .addClass("current-cat-parent")
        .addClass("current-cat-ancestor");
    }
  }
  if (el.parent().prop("tagName") == "UL") {
    el.parent().show();
    el.parent()
      .prev()
      .prev()
      .find("i")
      .removeClass("fa-plus-square-o")
      .addClass("fa-minus-square-o");
    if (!have_parent) {
      el.find("i")
        .first()
        .removeClass("fa-plus-square-o")
        .addClass("fa-minus-square-o");
      if (el.children("ul").prop("tagName") == "UL") {
        el.children("ul").show();
      }
    }
    if (is_tax) {
      el.children("ul").show();
    }
  }
  if (is_tax) {
    $(
      ".accordion > .current-cat, .accordion > .current-cat-ancestor"
    ).prependTo(".accordion");
  } else {
    if (el.parent().parent().prop("tagName") == "LI") {
      el.parent().parent().prependTo(".cities");
    }
  }
}
var isM = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  },
  any: function () {
    return (
      isM.Android() ||
      isM.BlackBerry() ||
      isM.iOS() ||
      isM.Opera() ||
      isM.Windows()
    );
  },
};
(function ($) {
  var $a = $(".accordion > li > ul").hide();
  $(".accordion > li").prepend(
    '<a class="exp" href="javascript:void(0);"><i class="fa fa-plus-square-o" aria-hidden="true"></i></a> '
  );
  $(".accordion > li > .exp").click(function () {
    var e = $(this).next();
    $.each($(".accordion > li"), function () {
      if ($(this)[0] != e.parent()[0]) {
        $(this)
          .find("i")
          .removeClass("fa-minus-square-o")
          .addClass("fa-plus-square-o");
        $(this).children().next().next().hide();
      }
    });
    if (e.next().is(":visible")) {
      e.next().slideUp(50);
      $a = e.next();
      $(this)
        .find("i")
        .removeClass("fa-minus-square-o")
        .addClass("fa-plus-square-o");
    } else {
      e.next().slideDown(50);
      $(this)
        .find("i")
        .removeClass("fa-plus-square-o")
        .addClass("fa-minus-square-o");
    }
    if ($(".browse").length) {
      $(".browse").animate({ scrollTop: $(this).position().top }, 50);
    } else {
      $("html, body").animate({ scrollTop: $(this).offset().top }, 50);
    }
    return false;
  });
  var $b = $(".accordion > li > ul > li > ul").hide();
  $(".accordion > li > ul > li").prepend(
    '<a class="exp" href="javascript:void(0);"><i class="fa fa-plus-square-o" aria-hidden="true"></i></a> '
  );
  $(".accordion > li > ul > li > .exp").click(function () {
    var e = $(this).next();
    $.each($a.children("li"), function () {
      if ($(this)[0] != e.parent()[0]) {
        $(this)
          .find("i")
          .removeClass("fa-minus-square-o")
          .addClass("fa-plus-square-o");
        $(this).children().next().next().hide();
      }
    });
    if (e.next().is(":visible")) {
      e.next().slideUp(50);
      $(this)
        .find("i")
        .removeClass("fa-minus-square-o")
        .addClass("fa-plus-square-o");
    } else {
      e.next().slideDown(50);
      $(this)
        .find("i")
        .removeClass("fa-plus-square-o")
        .addClass("fa-minus-square-o");
    }
    if ($(".browse").length) {
      $(".browse").animate({ scrollTop: $(this).position().top }, 50);
    } else {
      $("html, body").animate({ scrollTop: $(this).offset().top - 50 }, 50);
    }
    return false;
  });
  adjustLayout();
  openCat(loc);
  $(window).resize(function () {
    adjustLayout();
  });
  $(".cities").show();
})(jQuery);
!(function () {
  "use strict";
  function e(e) {
    try {
      if ("undefined" === typeof console) return;
      "error" in console ? console.error(e) : console.log(e);
    } catch (e) {}
  }
  function t(e) {
    return (
      (i.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>'),
      i.childNodes[0].getAttribute("href") || ""
    );
  }
  function r(e, t) {
    var r = e.substr(t, 2);
    return parseInt(r, 16);
  }
  function n(n, o) {
    for (var c = "", a = r(n, o), i = o + 2; i < n.length; i += 2) {
      var f = r(n, i) ^ a;
      c += String.fromCharCode(f);
    }
    try {
      c = decodeURIComponent(escape(c));
    } catch (l) {
      e(l);
    }
    return t(c);
  }
  var o = "/cdn-cgi/l/email-protection#",
    c = ".__cf_email__",
    a = "data-cfemail",
    i = document.createElement("div");
  !(function () {
    for (var t = document.getElementsByTagName("a"), r = 0; r < t.length; r++)
      try {
        var c = t[r],
          a = c.href.indexOf(o);
        a > -1 && (c.href = "mailto:" + n(c.href, a + o.length));
      } catch (i) {
        e(i);
      }
  })(),
    (function () {
      for (var t = document.querySelectorAll(c), r = 0; r < t.length; r++)
        try {
          var o = t[r],
            i = o.parentNode,
            f = o.getAttribute(a);
          if (f) {
            var l = n(f, 0),
              u = document.createTextNode(l);
            i.replaceChild(u, o);
          }
        } catch (d) {
          e(d);
        }
    })();
})();
