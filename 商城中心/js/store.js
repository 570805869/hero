//以数组的方式获得元素的函数
function s(selected) {
    var ary = [];
    document.querySelectorAll(selected).forEach(function (v) {
        ary.push(v);
    })
    return ary;
}
// 动画函数
function animate( node, target ) {
    var direction = target > node.offsetLeft ? 1 : -1;
    var step = 10;
    var interval = 10;

    if ( target === node.offsetLeft ) return;

    clearInterval( node.intervalId );

    node.intervalId = setInterval(function () {
        var left = node.offsetLeft;
        left += direction * step;

        if ( Math.abs( left - target ) <= step ) {
            node.style.left = target + 'px';
            clearInterval( node.intervalId );
            return;
        }

        node.style.left = left + 'px';
    }, interval);
}
// 另一种动画函数
/*function animation(element, target, step) {
    //清空定时器
    clearInterval(element.timerId);

    var left = element.offsetLeft;
    //1 如果left > target  step为负
    if(left > target) {
        step = -step;
    }

    element.timerId = setInterval(function () {
        //2 判断的位置不能使用target >= left 如果800->400不适用
        //换成 判断left - target的绝对值  > step的绝对值
        if (Math.abs(left - target) > Math.abs(step)) {
            element.style.left = left + "px";
        }else{
            element.style.left = target + "px";
            //停止定时器
            clearInterval(element.timerId);
        }
        left += step;
    }, 15);
}*/

//轮播图
//1获得所需要的元素
var imgUl = s('#image')[0],
    //  小圆点的li
    lis = s('.screen .control li'),
    lunbo = s('.lunbo')[0],
    arr = s('.lunbo .arr')[0],
    left = s('.lunbo .left')[0],
    right = s('.lunbo .right')[0],
    //  存放图片的li
    lisImg = s('#image li');
var index = 1;
var intervalId = null;
//  获得可视窗口的宽度,设置给图片的li的宽度,因为轮播图是通栏的在不同电脑因分辨率不同会有差异,
//  所以宽度需要js动态控制
var wid = $(window).width();
imgUl.style.width = wid * 7 + 'px';
imgUl.style.left = -wid + 'px';
for (var k = 0; k < lisImg.length; k++) {
    lisImg[k].style.width = wid + 'px';
}
//当索引为6和0 的时候需要做跳转
function checkIndex() {
    if (index === 6) {
        imgUl.style.left = -wid + 'px';
        index = 1;
    }
    if(index === 0) {
        imgUl.style.left = -wid * 5 +'px';
        index = 5;
    }
}
//设置当前图片对应的圆点高亮
function updateLiIndex() {
    for (var i =0; i < lis.length; i++) {
        lis[i].className = '';
    }
    if ( index === 0 ) {
        lis[ 4 ].className = 'current';
    } else if( index === 6 ) {
        lis[ 0 ].className = 'current';
    } else {
        lis[ index - 1 ].className = 'current';
    }
}
//图片移动
function move(direction) {
    direction = direction || 1;
    checkIndex();
    index += direction;
    animate(imgUl,-wid * index);
    updateLiIndex();
}
intervalId = setInterval(move,3000);
//设置左右键
lunbo.onmouseover = function () {
    clearInterval(intervalId);
    arr.style.display = 'block';
}
lunbo.onmouseout = function () {
    intervalId = setInterval(move,3000);
    arr.style.display = 'none';
}
right.onclick = function () {
    move(1);
}
left.onclick = function () {
    move(-1);
}
//点击小圆点获得对应图片
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        index = this.dataset.value - 0;
        animate(imgUl, -wid * index);
        updateLiIndex();
    }
}