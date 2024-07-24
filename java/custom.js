// banner img change
$('.banner_slik').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});
// about section venobox
new VenoBox({
  selector: '.my-video-links',
});
// gallery part lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

$(function(){
  // back to top function
  $(window).scroll(function(){
    var scrolling = $(window).scrollTop()
    if(scrolling > 150){
      $(".back_to_top i").fadeIn()
    }
    else{
      $(".back_to_top i").fadeOut()
    }
    // navbar background add
    if(scrolling > 50){
      $(".menu_bg").addClass("bg")
    }
    else{
      $(".menu_bg").removeClass("bg")
    }
    // logo design change
    if(scrolling > 50){
      $(".img_inner").addClass("bac")
    }
    else{
      $(".img_inner").removeClass("bac")
    }
  })
  // back to top button
  $(".back_to_top i").click(function(){
    $('html,body').animate({
      scrollTop:0
    })
  })
})
// banner img change
$('.slik_cng').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});
// counter up part
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// class part
$(document).ready(function(){
        
  $("#colorful").colorfulTab();    
  
  $("#colorful-elliptic").colorfulTab({
      theme: "elliptic"
  }); 
 
 $("#colorful-flatline").colorfulTab({
      theme: "flatline"
  });    
  
  $("#colorful-background-image").colorfulTab({
      theme: "flatline",
      backgroundImage: "true",
      overlayColor: "#002F68",
      overlayOpacity: "0.8"
  });   

});
//  company part
$(function(){
  $('.compani').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
  });
})