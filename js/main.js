$(document).ready(function(){
  // NAV
  $("#GNB-main, #GNB-sub ul li").hover(function(){
    $("#GNB-sub").stop().slideDown(200);
  },function(){
    $("#GNB-sub").stop().slideUp(200);
  });

  $("#GNB-main a").removeClass('on');
  $("#GNB-main a").hover(function(){
    $(this).addClass('on');
  },function(){
    $("#GNB-main a").removeClass('on');
  });

  $("#GNB-sub ul").hover(function(){
    var gnbmove=$(this).index();
    $("#GNB-main ul li a").eq(gnbmove).addClass('on');
  },function(){
    $("#GNB-main ul li a").removeClass('on');
  })

  // slide
  function slidemove(){
    let slidemv=$(".slide-con").height();
    $(".slide-box2").animate({
      top:-slidemv
    },function(){
      $(".slide-con:first-child").appendTo(".slide-box2");
      $(".slide-box2").css({
        top:0
      })
    });    
  }    
  setInterval(slidemove,3000);

  // pop
  $("#pop").hide();
  $(".not-box ul li:first-child").click(function(){
    $("#pop").show();
  });
  $("#pop button").click(function(){
    $("#pop").hide();
  });




});