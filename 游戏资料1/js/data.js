/**
 * Created by Administrator on 2018/4/5.
 */
/*************************************top***************************************/
$(function(){
    $('#imgs').mouseover(function(){
    $('#boxs').show();
    // console.log("aaa");
    });
    $('#boxs').mouseout(function(){
       $("#boxs").hide();
    });

 /*************************************video*********************************/
     var i = $(".video .left li").length - 1;
    //   console.log(i);
     $(".video .myLb").click(function () {
     myAnimate();
    });
     $(".video .myLb").mouseenter(function () {
     clearInterval(timer);
     $(this).css("border", "1px solid #111727");
     });
     $(".video .myLb").mouseleave(function () {
     timer = setInterval(function () {
         myAnimate();
     }, 1700);
     $(this).css("border", "1px solid #1b0000");
    });
     timer = setInterval(function () {
     myAnimate();
    }, 1700)
    function myAnimate() {
     if (i === 0) {
         for (var j = 0; j < $(".video .left li").length; j++) {
             $(".video .left li").eq(j).animate({left: "0px"}, (300 * j), "swing");
             $(".video .right li").eq(j).animate({right: "0px"}, (300 * j), "swing");
             $(".video .bigBg li").eq(j).show().siblings().hide();
             $(".video .text li").eq(j).show().siblings().hide();
         }
         i = $(".video .left li").length - 1;
     } else {
         $(".video .bigBg li").eq(i - 1).show().siblings().hide();
         $(".video .left li").eq(i).animate({left: "-600px"}, 1200, "swing");
         $(".video .right li").eq(i).animate({right: "-600px"}, 1200, "swing");
         $(".video .text li").eq(i - 1).show().siblings().hide();
         i--;
     }
    }

/*************************************nav***************************************/
    $('.image_nav').mouseover(function(){
       $('.list').show();
    //    console.log("sss")
    });
    $('.image_nav').mouseout(function(){
        $('.list').hide();
     });
     $('.list').mouseover(function(){
        $('.list').show();
        // console.log("sss")
     });
     $('.list').mouseout(function(){
         $('.list').hide();
      });

/*************************************img_list***************************************/
    // var oldSrc=null;
    // $('.img_list>li').hover(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     // $('.block_img').each(function(index,item){
    //     //     // console.log(index);
    //     //     console.log(item);
    //     //    $(item).attr({
    //     //       src:'imgs/11'+(index+1)+'-freehover.png',
    //     //     width:224
    //     //    })
    //     // })
    //     oldSrc=$(this).find('img').attr('src');
    //     console.log(oldSrc);
    //     var src=$(this).find('a').attr('href');
    //     console.log(src);
    //     $(this).find("img").attr('src',src).css('width',224).siblings().css('width',69);
    //     //.attr('src','imgs/01.jpg')
    //     // console.log("aaa")
    // },function(){
    //     $(this).find('img').attr('src',oldSrc).css('width',69);
    // });

    var deta = [0,78,155,235,315,395,475];
    $.each(deta,function(i,v){
        
    $('#Ul2 img').eq(i).css('left',v);
    })


    $('#Ul img:eq(0)').mouseover(function(){
    // 当前小图隐藏
    $(this).hide().parent().siblings().animate({
        left: 140
    });
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    $(this).hide().parent().prevAll().children().stop().animate({
        left: -0
    })
    // 别的小图显示
    $(this).hide().parent().nextAll().children().show();
    // 大图显示其他大图隐藏
    $('#Ul2 img').eq(0).show().parent().siblings().children().hide();
    // $('#Ul img:eq(1)').off()
    });
//----------
    $('#Ul img:eq(1)').mouseover(function(){
    // 隐藏当前小图
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    // 显示前边的小图
    $(this).hide().parent().nextAll().children().show();
    // 显示后边的小图
    $(this).hide().parent().prevAll().children().show();
    // 显示当前大图并隐藏前边的大图
    $('#Ul2 img').eq(1).show().parent().prevAll().children().hide()
    // 显示当前大图并隐藏后边的大图
    $('#Ul2 img').eq(1).show().parent().nextAll().children().hide()
    });
//----------
    $('#Ul img:eq(2)').mouseover(function(){
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    $(this).hide().parent().prevAll().children().stop().animate({
        left: -0
    })
    $(this).hide().parent().nextAll().children().show();
    $(this).hide().parent().prevAll().children().show();
    $('#Ul2 img').eq(2).show().parent().prevAll().children().hide();
    $('#Ul2 img').eq(2).show().parent().nextAll().children().hide()
    });
//----------
    $('#Ul img:eq(3)').mouseover(function(){
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    $(this).hide().parent().prevAll().children().stop().animate({
        left: -0
    })
    $(this).hide().parent().nextAll().children().show();
    $(this).hide().parent().prevAll().children().show();
    $('#Ul2 img').eq(3).show().parent().prevAll().children().hide();
    $('#Ul2 img').eq(3).show().parent().nextAll().children().hide()
    });
//----------
    $('#Ul img:eq(4)').mouseover(function(){
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    $(this).hide().parent().prevAll().children().stop().animate({
        left: -0
    })
    $(this).hide().parent().nextAll().children().show();
    $(this).hide().parent().prevAll().children().show();
    $('#Ul2 img').eq(4).show().parent().prevAll().children().hide();
    $('#Ul2 img').eq(4).show().parent().nextAll().children().hide()
    });
//----------
    $('#Ul img:eq(5)').mouseover(function(){
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    $(this).hide().parent().prevAll().children().stop().animate({
        left: -0
    })
    $(this).hide().parent().nextAll().children().show();
    $(this).hide().parent().prevAll().children().show();
    $('#Ul2 img').eq(5).show().parent().prevAll().children().hide();
    $('#Ul2 img').eq(5).show().parent().nextAll().children().hide()
    });
//----------
    $('#Ul img:eq(6)').mouseover(function(){
    $(this).hide().parent().nextAll().children().stop().animate({
        left: 140
    })
    $(this).hide().parent().prevAll().children().stop().animate({
        left: -0
    })
    $(this).hide().parent().nextAll().children().show();
    $(this).hide().parent().prevAll().children().show();
    $('#Ul2 img').eq(6).show().parent().prevAll().children().hide();
    $('#Ul2 img').eq(6).show().parent().nextAll().children().hide()
    });

/*************************************hero_list***************************************/
    // $(".span-i").click(function(){
    //     $(this).children('i').addClass('current_i').end().parent().siblings().find('i').removeClass('current_i');
    // });
    
    $('.type_rights .ms_radio').click(function(){
        var index=$(this).parent().index();
        console.log(index);
        $(this).children('i').addClass('current_ic').end().parent().siblings().find('i').removeClass('current_ic');
        $(this).parent().parent().siblings().find('i').removeClass('current_ic');
        var imgs=$('#ul_liss img');
        if(index===0){
            imgs.each(function(i,value){  
                $(value).parent().parent().show();
            });
        }else if(index===1){
            imgs.each(function(i,value){
                if(i%10==0){
                $(this).parent().parent().hide();
                };
            });
        }else if(index===2){
            imgs.each(function(i,value){
                if(i%15==0){
                $(this).parent().parent().hide();
                };
            });
        }else if(index===3){
            imgs.each(function(i,value){
                if(i%8==0){
                $(this).parent().parent().hide();
                };
            });
        }else if(index===4){
            imgs.each(function(i,value){
                if(i%4==0){
                $(this).parent().parent().hide();
                };
            });
        }else if(index===5){
            imgs.each(function(i,value){
                if(i%5==0){
                $(this).parent().parent().hide();
                };
            });
        }else if(index===6){
            imgs.each(function(i,value){
                if(i%6==0){
                $(this).parent().parent().hide();
                };
            });
        }else if(index===7){
            imgs.each(function(i,value){
                if(i%20==0){
                $(this).parent().parent().hide();
                };
            });
        }
        else if(index===8){
            imgs.each(function(i,value){
                if(i%6==0){
                $(this).parent().parent().hide();
                };
            });
        }

        
    });
    $('.type_contents .ms_radio').click(function(){
        var index=$(this).parent().index();
        // console.log(index);
        $(this).children('i').addClass('current_ic').end().parent().siblings().find('i').removeClass('current_ic');
        $(this).parent().parent().siblings().find('i').removeClass('current_ic');
        var imgs=$('#ul_liss img');
        if(index===0){
            imgs.each(function(i,value){
                if(i>5 && i<170){
                    $(this).parent().parent().hide();
                    console.log(this);
                    console.log(i);
                } 
               
            });
        }else if(index===1){
            imgs.each(function(i,value){
                if(i%10==0){
                $(this).parent().parent().hide();
                };
            });
        }
        
    });
/*************************************hero_list***************************************/



  $('#case').mouseover(function(){
      console.log('aa')
      $('#yy_wss').show();
    $('#yy_wss').animate({
        top:80,
        left:150
    },1000)
  });
  $('#case1').mouseover(function(){
    console.log('aa')
    $('#yy_ll').show();
  $('#yy_ll').animate({
      top:240,
      left:150
  },1000)
});
$('#case2').mouseover(function(){
    console.log('aa')
    $('#yy_zd').show();
  $('#yy_zd').animate({
      top:400,
      left:150
  },1000)
});
$('#case3').mouseover(function(){
    console.log('aa')
    $('#yy_ff').show();
  $('#yy_ff').animate({
      top:560,
      left:150
  },1000)
});


 });
