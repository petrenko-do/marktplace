$(function () {
  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true
  });


  // $('.product-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // });


  // $('.followers__items').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // });




// $('.icon-th-large').on('click', function(){
//   $('.release__item').removeClass('list');
//   $('.icon-th-large').addClass('active');
//   $('.icon-list').removeClass('active');
// });

// $('.icon-list').on('click', function(){
//   $('.release__item').addClass('list');
//   $('.icon-list').addClass('active');
//   $('.icon-th-large').removeClass('active');
// });
// $('.icon-th-large').on('click', function(){
//   $('.favorit__item').removeClass('list');
//   $('.icon-th-large').addClass('active');
//   $('.icon-list').removeClass('active');
// });

// $('.icon-list').on('click', function(){
//   $('.favorit__item').addClass('list');
//   $('.icon-list').addClass('active');
//   $('.icon-th-large').removeClass('active');
// });

// $('.menu__btn').on('click', function(){
//   $('.menu__list').slideToggle();
// });

// $('.header__icon-menu').on('click', function(){
//   $('.header__box').toggleClass('active');
// });



// $('.js-range-slider').ionRangeSlider({
//   type: "double",
//   min: 0,
//   max: 350,
//   from: 30,
//   to: 300,
//   prefix: "$"
// });

$('.single-product__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-product__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });





})

// mixer = mixitup('.release__items');




