//  ��Ʒ����
//  ����Ʒչʾ
//  ��꾭��СͼƬ����,����ʾ��Ӧ�Ĵ�ͼƬ
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


//  ����Ŵ󾵰�ť�����Ŵ��ͼƬ
//  ����Ŵ�ʱ���big�о�����block��ͼƬ,����div��̬��ӵ�ǰ��ͼƬ
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
    //  ���ͼƬ�����λ��ȡ��������,��ͼƬ�ص�ԭ����λ��
    $('#tanchuceng').click(function () {
        $('#tanchuceng').css({
            'width': 0,
            'height': 0
        });
        $img.removeClass('fangdaImg').addClass('block');
        $img.appendTo($li);
    });
});

//  �������ı���
//  ���- ,��value - ;���+ ��value+;  value��СֵΪ1

//  ������,��СΪ1
$('#minus').on('click', function () {
    var value = $('#sum').val();
    if(value > 1) {
        value -= 1;
        $('#sum').val(value);
    } else {
        $('#sum').val('1');
    }
});
//  ������
$('#add').on('click', function () {
    var value = $('#sum').val() - 0;
        value += 1;
        $('#sum').val(value);
});


// ��Ʒ����  �û����� �ۺ����
//  ��Ʒ����  �û����� �ۺ���� �ĵ���
//  ���li �ı���Ϊborder��span ����ʽ,����ʾ��Ӧ��div
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