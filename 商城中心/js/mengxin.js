//  产品详情
//  左侧产品展示
//  鼠标经过小图片高亮,并显示对应的大图片
$('#small li').on('mouseenter', function () {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    console.log($('#big li img').eq(index));
    $('#big li img')
        .eq(index)
        .addClass('block')
        .parent()
        .siblings()
        .children()
        .removeClass('block');
});


//  点击放大镜按钮弹出放大的图片
//  点击放大镜时获得big中具有类block的图片,给父div动态添加当前的图片
$('#fangda').click(function () {
    var $img = $('#big li img[class=block]');
    var $li = $img.parent();
    $img.appendTo($('#tancengBox'));
    $img.removeClass('block').addClass('fangdaImg');
    var width = $(window).width();
    var height = $(window).height();
    $('#tanchuceng').css({
        'width': width,
        'height': height
    });
    //  点击图片以外的位置取消弹出层,让图片回到原来的位置
    $('#tanchuceng').click(function () {
        $('#tanchuceng').css({
            'width': 0,
            'height': 0
        });
        $img.removeClass('fangdaImg').addClass('block');
        $img.appendTo($li);
    });
});

//  数量的文本框
//  点击- ,让value - ;点击+ 让value+;  value最小值为1

//  数量减,最小为1
$('#minus').on('click', function () {
    var value = $('#sum').val();
    if(value > 1) {
        value -= 1;
        $('#sum').val(value);
    } else {
        $('#sum').val('1');
    }
});
//  数量加
$('#add').on('click', function () {
    var value = $('#sum').val() - 0;
        value += 1;
        $('#sum').val(value);
});


// 商品详情  用户评论 售后服务
//  商品详情  用户评论 售后服务 的导航
//  点击li 改变类为border的span 的样式,并显示对应的div
$('.productCenternav ul li').on('click', function () {
    //console.log($(this).find('.border'));
    $(this)
        .find('.border')
        .addClass('borderCurrent')
        .parent()
        .siblings()
        .find('.border')
        .removeClass('borderCurrent');
    var index = $(this).index();
    $('#productCenter>div').eq(index).show().siblings().hide();

});