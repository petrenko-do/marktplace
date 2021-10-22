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
    // infinite: true,
    // adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });


})





var mixer = mixitup('.release__items');

