$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    // для header__btn-menu при 540px (копируем 1 верхний абзац кода)
    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open');
    });

    // переопределяем элементы для раздела 
    if($(window).width() < 651){
        $('.works-path__item--measuring').appendTo($('.works-path__items--box'));
    }
    

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
    // слайдер из странички blog
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>'
    });
    // mixitup
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})