  const responsive ={
      0:{
        items:1
      },
      320:{
          items:1
      },
      590:{
          items:2
      },
      960:{
          items:3
      }
  }
  
  $(document).ready(function(){
      $nav = $('.navigation');
      $btn = $('.collapse-icon');
      $btn.click(function(){
          $nav.toggleClass('collapse');
      })
    //   carousel script
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

    // scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
    AOS.init();
  });