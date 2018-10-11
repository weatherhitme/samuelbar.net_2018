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
    vertical: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            vertical: false,
        }
    }]
})

$(document).ready(function () {
    $('.loading-hide').removeClass('loading-hide');
    tabbingBehaviour();
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