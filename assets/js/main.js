$('.hero-container').slick({
    arrows: false,
    cssEase: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    vertical: false,
    mobileFirst: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            vertical: true,
        }
    }]
})

var mobile = desktop = false;

$(document).ready(function () {
    var resizeTimer, width;

    $(window).resize(function () {
        // clear the timeout
        clearTimeout(resizeTimer);

        // execute breakpointChange() once the viewport
        // has stopped changing in size for 400ms
        resizeTimer = setTimeout(breakpointChange(), 400);


        if ($('.hero-container').length)
            $('.hero-container')[0].slick.refresh();
    });

    $('.loading-hide').removeClass('loading-hide');
    tabbingBehaviour();
    breakpointChange();
    darkModeToggle();


    enterClick($('a.project-inner'));

    $('a.project-inner').on("click mouseleave", function (e) {
        var $this = $(this);
        var isTappable = $this.hasClass('tappable');
        if (mobile) {
            if (!isTappable) {
                e.preventDefault();
            }
            $this.toggleClass('tappable');
        }
    });

    $('.nav-button').click(function () {
        $('.nav-button, .navbar ul').toggleClass('expanded');
    })

    $("body").addClass("dark-mode");
});

function tabbingBehaviour() {

    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');

            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    }

    function handleMouseDownOnce() {
        document.body.classList.remove('user-is-tabbing');

        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    }

    window.addEventListener('keydown', handleFirstTab);
}

// Below from https://stackoverflow.com/a/31410149
function breakpointChange() {
    width = window.innerWidth;
    if (!mobile && width < 992) {
        desktop = false;
        mobile = true;
        $("body").removeClass("desktop");
        $("body").addClass("mobile");
        console.log("mobile")
    }
    if (!desktop && width >= 992) {
        mobile = false;
        desktop = true;
        $("body").removeClass("mobile");
        $("body").addClass("desktop");
        console.log("desktop")
    }
}

function enterClick(selector) {
    selector.keypress(function (e) {
        if (e.keyCode === 13) {
            this.click();
        }
    });
}

function darkModeToggle() {
    if (localStorage.getItem("theme") == "dark")
        $(".dark-mode-button").toggleClass("on");

    $(".dark-mode-button").click(toggleTheme);
}

function toggleTheme() {
    let $this = $(this);
    $(this).toggleClass("on");
    switch ($this.attr("aria-checked")) {
        case "false":
            $this.attr("aria-checked", "true");
            break;
        case "true":
            $this.attr("aria-checked", "false");
            break;
        default:
            $this.attr("aria-checked", "true");
    }

    let theme = localStorage.getItem("theme");
    console.log("Current theme: " + theme);
    if (theme == "light" || theme == 'undefined' || theme == undefined)
        localStorage.setItem("theme", "dark");
    else if (theme == "dark")
        localStorage.setItem("theme", "light");
    console.log("New theme: " + localStorage.getItem("theme"));

    document.dispatchEvent(new CustomEvent("stylesheetToggle"))
}