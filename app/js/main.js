$(function(){




  $('.border__btn-open').on('click',function(){
    $('.border__menu>ul').slideToggle();
    $('.border__menu').addClass('open');
    $('.border__btn-open').slideToggle();
    $('.border__btn-close').slideToggle();
  });

    
  $('.border__btn-close').on('click',function(){
    $('.border__menu>ul').slideToggle();
    $('.border__menu').removeClass('open');
    $('.border__btn-open').slideToggle();
    $('.border__btn-close').slideToggle();
  });

  
    
  var mixer = mixitup('.portfolio__itembox');

  

});
