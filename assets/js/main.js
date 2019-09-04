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

$(document).ready(function () {
    $('.loading-hide').removeClass('loading-hide');
    tabbingBehaviour();

    $(window).resize(function () {
        if ($('.hero-container').length)
            $('.hero-container')[0].slick.refresh();
    });

    // Below from https://stackoverflow.com/a/31410149
    var mobile = desktop = false;
    var resizeTimer, width;

    $(window).resize(function () {
        // clear the timeout
        clearTimeout(resizeTimer);

        // execute breakpointChange() once the viewport 
        // has stopped changing in size for 400ms
        resizeTimer = setTimeout(breakpointChange(), 400);
    });

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
    breakpointChange();


    enterClick($('a.project-inner'));
    $('a.project-inner').click(function (e) {
        var $this = $(this);
        var isTappable = $this.hasClass('tappable');
        if (mobile && !isTappable) {
            e.preventDefault();
            $this.addClass('tappable');
        }
    })
    $('a.project-inner').mouseout(function () {
        var $this = $(this);
        var isTappable = $this.hasClass('tappable');
        if (mobile && isTappable) {
            $this.removeClass("tappable")
        }
    })

    $('.nav-button').click(function() {
        $('.nav-button, .navbar ul').toggleClass('expanded');
    })
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

function enterClick(selector) {
    selector.keypress(function (e) {
        if (e.keyCode === 13) {
            this.click();
        }
    });
}