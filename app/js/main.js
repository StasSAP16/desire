$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    // активируем слайдер
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        // плавное изменение
        fade: true,
        // изменение картинки каждые 3 сек
        autoplay: true
    });
    // слайдер из странички contact
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });
    // mixitup
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})