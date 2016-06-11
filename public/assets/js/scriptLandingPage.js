$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbarLanding').css('background-color', '#f0f0f0');
          $('.nav-menu-text').css('color', 'gray');
          var url = $('#nav-logo-landing').attr("src");
          var res = url.split("/icon");
          $('#nav-logo-landing').attr("src",res[0]+"/icon/logo.png")
          //console.log(url);
       } else {
          $('#navbarLanding').css('background-color', 'transparent');
          $('.nav-menu-text').css('color', 'white');
          var url = $('#nav-logo-landing').attr("src");
          var res = url.split("/icon");
          $('#nav-logo-landing').attr("src",res[0]+"/icon/logo-white.png")
          //console.log(url);
       }
   });
});