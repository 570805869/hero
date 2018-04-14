
    /**
     * 鼠标进入顶部列表，显示下边导航栏
     */
    var $nav_list = $('.myinner .nav_list');
    var $topone = $('.myinner .image_nav .one').mouseover(function(){
        $nav_list.show();
    });
    var $topul = $('.myinner .image_nav .w > ul').mouseover(function(){
        $nav_list.show();
    });
    $nav_list.mouseover(function(){
        $nav_list.show();
    });
    $nav_list.mouseout(function(){
        $nav_list.hide();
    });
    var $topone = $('.myinner .image_nav .one').mouseout(function(){
        $nav_list.hide();
    });
    var $topul = $('.myinner .image_nav .w > ul').mouseout(function(){
        $nav_list.hide();
    });

//英雄列表动画效果



