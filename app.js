$(document).ready(function() {
    //$('#nav__inner_1').hide();
    $('#nav__inner_1').slideUp(0);
    $('#nav__inner_2').slideUp(0);
    $('#nav__inner_3').slideUp(0);

    $('#nav__item_1').mouseenter(function() {
        //$('#nav__inner_1').show();
        $('#nav__inner_1').slideToggle();
    });
    $('#nav__item_1').mouseleave(function() {
        //$('#nav__inner_1').show();
        $('#nav__inner_1').slideToggle();
    });

    $('#nav__item_2').mouseenter(function() {
        //$('#nav__inner_1').show();
        $('#nav__inner_2').slideToggle();
    });
    $('#nav__item_2').mouseleave(function() {
        //$('#nav__inner_1').show();
        $('#nav__inner_2').slideToggle();
    });

    $('#nav__item_3').mouseenter(function() {
        //$('#nav__inner_1').show();
        $('#nav__inner_3').slideToggle();
    });
    $('#nav__item_3').mouseleave(function() {
        $('#nav__inner_3').slideToggle();
    });


    $(".main-text__showmodels").hover(function() {
        $(".main-text__img").toggleClass('saturation_img');
        $(this).toggleClass('saturation');
        $(".new-price").toggleClass('saturation saturation_text');
        $(".old-price").toggleClass('saturation_text');
    });
});
