/*
 *   Author: beshleyua
 *   Author URL: http://themeforest.net/user/beshleyua
 */

/*
    Preloader
*/

// $(window).on("load", function () {
$(document).ready(function () {
    var preload = $(".preloader");
    preload.find(".spinner").fadeOut(function () {
        preload.fadeOut();
    });
});

$(window).on("load", function () {
    // Set a timeout to allow everything else to load.
    setTimeout(function () {
        var hash = window.location.hash;
        if (hash) {
            // Trigger the click event after a short delay.
            $('.top-menu a[href="' + hash + '"]').trigger('click');
        }
    }, 500); // The delay in milliseconds. Adjust if necessary.
});


$(function () {
    "use strict";

    /*
          Vars
      */

    var width = $(window).width();
    var height = $(window).height();

    /*
          Header Menu Desktop
      */

    var container = $(".container");
    var card_items = $(".card-inner");
    var animation_in = container.data("animation-in");
    var animation_out = container.data("animation-out");

    $(".top-menu").on("click", "a", function () {
        /* vars */
        var width = $(window).width();
        var id = $(this).attr("href");
        var h = parseFloat($(id).offset().top);
        var card_item = $(id);
        var menu_items = $(".top-menu li");
        var menu_item = $(this).closest("li");
        var d_lnk = $(".lnks .lnk.discover");

        if (width >= 1024) {
            /* if desktop */
            if (
                !menu_item.hasClass("active") &
                (width > 1023) &
                $("#home-card").length
            ) {
                /* close card items */
                menu_items.removeClass("active");
                container.find(card_items).removeClass("animated " + animation_in);

                if ($(container).hasClass("opened")) {
                    container.find(card_items).addClass("animated " + animation_out);
                }

                /* open card item */
                menu_item.addClass("active");
                container.addClass("opened");
                container.find(card_item).removeClass("animated " + animation_out);
                container.find(card_item).addClass("animated " + animation_in);

                $(card_items).addClass("hidden");

                $(card_item).removeClass("hidden");
                $(card_item).addClass("active");
            }
        }
        /* if mobile */
        if ((width < 1024) & $("#home-card").length) {
            /* scroll to section */
            $("body,html").animate(
                {
                    scrollTop: h - 76,
                },
                800
            );
        }
        return false;
    });
    $(".0xhrsh-link").on("click", "a", function () {
        /* vars */
        var width = $(window).width();
        var id = $(this).attr("href");
        var h = parseFloat($(id).offset().top);
        var card_item = $(id);
        var menu_items = $(".top-menu li");
        var menu_item = $(this).closest("li");
        var d_lnk = $(".lnks .lnk.discover");

        if (width >= 1024) {
            /* if desktop */
            if (
                !menu_item.hasClass("active") &
                (width > 1023) &
                $("#home-card").length
            ) {
                /* close card items */
                menu_items.removeClass("active");
                container.find(card_items).removeClass("animated " + animation_in);

                if ($(container).hasClass("opened")) {
                    container.find(card_items).addClass("animated " + animation_out);
                }

                /* open card item */
                menu_item.addClass("active");
                container.addClass("opened");
                container.find(card_item).removeClass("animated " + animation_out);
                container.find(card_item).addClass("animated " + animation_in);

                $(card_items).addClass("hidden");

                $(card_item).removeClass("hidden");
                $(card_item).addClass("active");
            }
        }
        /* if mobile */
        if ((width < 1024) & $("#home-card").length) {
            /* scroll to section */
            $("body,html").animate(
                {
                    scrollTop: h - 76,
                },
                800
            );
        }
        return false;
    });


    $(window).on("resize", function () {
        var width = $(window).width();
        var height = $(window).height();

        if (width < 1024) {
            $(".card-inner").removeClass("hidden");
            $(".card-inner").removeClass("fadeOutLeft");
            $(".card-inner").removeClass("rotateOutUpLeft");
            $(".card-inner").removeClass("rollOut");
            $(".card-inner").removeClass("jackOutTheBox");
            $(".card-inner").removeClass("fadeOut");
            $(".card-inner").removeClass("fadeOutUp");
            $(".card-inner").removeClass("animated");

            $(window).on("scroll", function () {
                var scrollPos = $(window).scrollTop();
                $(".top-menu ul li a").each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.offset().top - 76 <= scrollPos) {
                        $(".top-menu ul li").removeClass("active");
                        currLink.closest("li").addClass("active");
                    }
                });
            });

            $(".card-inner .card-wrap").slimScroll({ destroy: true });
            $(".card-inner .card-wrap").attr("style", "");
        } else {
            $($(".top-menu li.active a").attr("href")).addClass("active");
            if (!$(".page").hasClass("new-skin") && width > 1024) {
                $(".card-inner .card-wrap").slimScroll({
                    height: "570px",
                });
            }
        }
    });

    /*
          Smoothscroll
      */

    if ((width < 1024) & $("#home-card").length) {
        $(window).on("scroll", function () {
            var scrollPos = $(window).scrollTop();
            $(".top-menu ul li a").each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.offset().top - 76 <= scrollPos) {
                    $(".top-menu ul li").removeClass("active");
                    currLink.closest("li").addClass("active");
                }
            });
        });
    }

    /*
          slimScroll
      */

    if (!$(".page").hasClass("new-skin") && width > 1024) {
        $(".card-inner .card-wrap").slimScroll({
            height: "570px",
        });
    }

    /*
          Hire Button
      */

    $(".lnks").on("click", ".lnk.discover", function () {
        $('.top-menu a[href="#contact"]').trigger("click");
    });

    /*
          Initialize Portfolio
      */
    var $container = $(".grid-items");
    $container.imagesLoaded(function () {
        $container.isotope({
            percentPosition: true,
            itemSelector: ".grid-item",
        });
    });

    /*
          Filter items on button click
      */
    $(".filter-button-group").on("click", ".f_btn", function () {
        var filterValue = $(this).find("input").val();
        $container.isotope({ filter: "." + filterValue });
        $(".filter-button-group .f_btn").removeClass("active");
        $(this).addClass("active");
    });

    /*
          Gallery popup
      */
    if (
        /\.(?:jpg|jpeg|gif|png)$/i.test($(".gallery-item:first a").attr("href"))
    ) {
        $(".gallery-item a").magnificPopup({
            gallery: {
                enabled: true,
            },
            type: "image",
            closeBtnInside: false,
            mainClass: "mfp-fade",
        });
    }

    /*
          Media popup
      */
    $(".has-popup-media").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: true,
        mainClass: "mfp-fade popup-box-inline",
    });

    /*
          Image popup
      */
    $(".has-popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-fade",
        image: {
            verticalFit: true,
        },
    });

    /*
          Video popup
      */
    $(".has-popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        iframe: {
            patterns: {
                youtube_short: {
                    index: "youtu.be/",
                    id: "youtu.be/",
                    src: "https://www.youtube.com/embed/%id%?autoplay=1",
                },
            },
        },
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-fade",
        callbacks: {
            markupParse: function (template, values, item) {
                template.find("iframe").attr("allow", "autoplay");
            },
        },
    });

    /*
          Music popup
      */
    $(".has-popup-music").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-fade",
    });

    /*
          Gallery popup
      */
    $(".has-popup-gallery").on("click", function () {
        var gallery = $(this).attr("href");

        $(gallery)
            .magnificPopup({
                delegate: "a",
                type: "image",
                closeOnContentClick: false,
                mainClass: "mfp-fade",
                removalDelay: 160,
                fixedContentPos: false,
                gallery: {
                    enabled: true,
                },
            })
            .magnificPopup("open");

        return false;
    });

    /*
          Tesimonials Carousel
      */
    var revs_slider = $(".revs-carousel.default-revs .owl-carousel");

    revs_slider.owlCarousel({
        margin: 0,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        rewind: false,
        nav: false,
        dots: true,
    });

    var rtl_revs_slider = $(".revs-carousel.rtl-revs .owl-carousel");

    rtl_revs_slider.owlCarousel({
        margin: 0,
        items: 1,
        rtl: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        rewind: false,
        nav: false,
        dots: true,
    });

    /*
          New JS
      */

    $(window).on("resize", function () {
        /*
                Dotted Skills Line On Resize Window
            */

        var skills_dotted = $(".skills-list.dotted .progress");
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.find(".percentage .da").css({ width: skills_dotted_w + 1 });
        }

        /*
                Testimonials Carousel On Resize Window
            */

        var revs_slider = $(".revs-carousel .owl-carousel");
        revs_slider.find(".revs-item").css({ "max-width": revs_slider.width() });
    });

    /*
          Dotted Skills Line
      */

    function skills() {
        var skills_dotted = $(".skills-list.dotted .progress");
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.append(
                '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
            );
            skills_dotted
                .find(".percentage")
                .append(
                    '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
                );
            skills_dotted.find(".percentage .da").css({ width: skills_dotted_w });
        }
    }
    setTimeout(skills, 1000);

    /*
          Circle Skills Line
      */

    var skills_circles = $(".skills-list.circles .progress");
    if (skills_circles.length) {
        skills_circles.append(
            '<div class="slice"><div class="bar"></div><div class="fill"></div></div>'
        );
    }

    /*
          Wrap First Title Word
      */

    $(".content .title").each(function (index) {
        var title = $(this).text().split(" ");
        if (title.length > 1) {
            var firstWord = title[0];
            var replaceWord = '<span class="first-word">' + firstWord + "</span>";
            var newString = $(this).html().replace(firstWord, replaceWord);
            $(this).html(newString);
        } else {
            $(this).html('<div class="first-letter">' + $(this).html() + "</div>");
        }
    });
});

/*
        Fixed Plugin
  */

let plugin = document.getElementById("plugin");
let pluginText = document.getElementById("plugin-text");
let text = "Dark Mode";
let color = 0;

console.log(localStorage.getItem("colorMode"));
if (localStorage.getItem("colorMode") == null)
    localStorage.setItem("colorMode", "dark");
else {
    color = localStorage.getItem("colorMode") == "dark" ? 0 : 1;
    text =
        localStorage.getItem("colorMode") == "dark" ? "Dark Mode" : "Light Mode";
    if (color == 1) {
        setLightMode();
    } else {
        setDarkMode();
    }
}
console.log(localStorage.getItem("colorMode"));

plugin.addEventListener("mouseover", () => {
    plugin.style.backgroundColor = "#0856C1";
    plugin.style.cursor = "pointer";
    plugin.style.right = "-38px";
    pluginText.innerHTML = text;
});

plugin.addEventListener("mouseout", () => {
    plugin.style.backgroundColor = "#555";
    plugin.style.right = "-43px";
    pluginText.innerHTML = "";
});

plugin.addEventListener("click", () => {
    if (color == 0) {
        setLightMode();
    } else {
        setDarkMode();
    }
});

function setLightMode() {
    console.log("Light Mode");
    plugin.style.color = "#222";
    plugin.style.backgroundColor = "#a9a9a9";
    if (document.getElementById("dark") != null)
        document.getElementById("dark").remove();
    text = "Dark Mode";
    pluginText.innerHTML = text;
    localStorage.setItem("colorMode", "light");
    color = 1;
}

function setDarkMode() {
    console.log("Dark Mode");
    plugin.style.color = "#a9a9a9";
    plugin.style.backgroundColor = "#222";
    var css = document.createElement("link");
    css.setAttribute("id", "dark");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "./css/template-dark/dark.css");
    if (document.getElementById("dark") == null)
        document.getElementsByTagName("head")[0].appendChild(css);
    text = "Light Mode";
    pluginText.innerHTML = text;
    localStorage.setItem("colorMode", "dark");
    color = 0;
}
