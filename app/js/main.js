$(function () {
  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true
  });


  $('.product-slider').slick({
    // infinite: true,
    // adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  $('.followers__items').slick({
    // infinite: true,
    // adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });


  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300,
    prefix: "$"
  });

$('.icon-th-large').on('click', function(){
  $('.release__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-list').removeClass('active');
});

$('.icon-list').on('click', function(){
  $('.release__item').addClass('list');
  $('.icon-list').addClass('active');
  $('.icon-th-large').removeClass('active');
});
$('.icon-th-large').on('click', function(){
  $('.favorit__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-list').removeClass('active');
});

$('.icon-list').on('click', function(){
  $('.favorit__item').addClass('list');
  $('.icon-list').addClass('active');
  $('.icon-th-large').removeClass('active');
});


})

mixer = mixitup('.release__items');




