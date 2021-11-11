$(function () {
  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true
  });



  $('.product-slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../app/images/icons/arrow-left.png" alt=""></button>' ,
    nextArrow: '<button class="slick-arrow slick-next"><img src="../app/images/icons/arrow-right.png" alt=""></button>'
  });
  $('.followers__items').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../app/images/icons/arrow-left.png" alt=""></button>' ,
    nextArrow: '<button class="slick-arrow slick-next"><img src="../app/images/icons/arrow-right.png" alt=""></button>'
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



})

mixer = mixitup('.release__items');




