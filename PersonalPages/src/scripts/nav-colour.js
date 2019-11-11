$(window).scroll(function(){
                 $('header').toggleClass('scrolled', $(this).scrollTop() > 200);
                 });