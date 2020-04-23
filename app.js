$('.header__navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header__navbar').toggleClass('is-open');

$(window).scroll(function(){
    var sc=$(this).scrollTop();
    if (sc>100){
        $('header').addClass('sticky');
    }
    else{
        $('header').removeClass('sticky');
    }
})
})

