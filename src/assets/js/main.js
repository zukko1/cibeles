$(document).ready(function(){
    sliderHome();
    plains();
    details();
})
$(window).on('resize',function(){
    details();
})
function sliderHome(){
    $('.slider-home').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        mobileFirst: true,
        dots: false,
        pauseOnHover: false,
        arrows:true,
        adaptiveHeight: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow')
        
    });
}
function plains(){
    //$('.plains-content>div').empty()
    $('.plains-content>div').append($('.tr-cat-plan:nth-child(1)>ul.salidas-items').clone(true));
    $('.tr-cat-plan:nth-child(1)').addClass('plain-active')
    $('.tr-cat-plan').on('click',function(){
        $('.tr-cat-plan').removeClass('plain-active')
        $('.tr-cont-tit-cat').removeClass('plain-active')
        $(this).addClass('plain-active')
        $('.plains-content>div').empty();
        $('.plains-content>div').append($(this).find('ul.salidas-items').clone(true));
    })
}
function details(){
        $('ul.detail-content>li>h3').on('click',function(){
            $('ul.detail-content>li>h3').removeClass('detail-active');
            $('div.detail-item').removeClass('detail-item-active');
            $(this).addClass('detail-active');
            var thisHeight=$(this).next('div.detail-item').height();
            $(this).next('div.detail-item').addClass('detail-item-active');
            if ($(window).width()>1024){
            $(this).parent().parent().css('margin-bottom',thisHeight+100)
        }
        })
    
}