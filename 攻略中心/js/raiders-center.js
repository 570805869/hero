(function(){

    // 右侧列表数据
    var weekdate = [
        {
            date:0,//日
            info:[
                {
                    mate:'video',
                    list:[
                        {title:'【一鹿上王者】第44集：契约之战-双英雄阵容奥义',pl:'24.4万'},
                        {title:'【英雄技谋】 第32集：国服最强雅典娜，荣耀王者花',pl:'24.4万'},
                        {title:'【鱼嘴滑舌】第88期：版本变迁李白依旧，剑仙李白',pl:'24.4万'},
                        {title:'【王者炸麦了2】eStar首胜QG，伪装花式摩擦小猫咪',pl:'24.4万'},
                        {title:'【快速上手英雄技能】刘邦',pl:'24.4万'},
                        {title:'【天下王者】第36期：如何甩狙？随心教你百里守约',pl:'24.4万'},
                        {title:'【快速上手英雄技能】孙悟空',pl:'24.4万'},
                    ],
                },
                {
                    mate:'img',
                    list:[
                        {title:'王者助手4月签到运动会，周周签到有好礼！',pl:'17万'},
                        {title:'快讯：QGhappy 3-1 AG超玩会，QG.Song一鸣惊人',pl:'17.4万'},
                        {title:'《零度实验室》：反甲的最新改动，效果如何？',pl:'24.4万'},
                        {title:'GK vs eStarPro 有何精彩之处？黄大仙：手都打麻了',pl:'11.5万'},
                        {title:'快讯：Hero久竞 3-1 XQ，久诚冷门女娲仍强势助队',pl:'12.4万'},
                        {title:'GK vs BA黑凤梨前瞻：东西部头名对决，老帅、居居',pl:'2万'},
                        {title:'KPL日报：Hero横扫XQ跃居西部第一，AG不敌QG惨',pl:'3.5万'},
                    ]
                }
                
            ]
        },
        {
            date:1,//周
            info:[
                {
                    mate:'video',
                    list:[
                        {title:'【上分拍档】第22期：马可刘邦 自由人体系的终极形',pl:'5.8万'},
                        {title:'【英雄技谋】 第32集：国服最强雅典娜，荣耀王者花',pl:'5.8万'},
                        {title:'【一鹿上王者】第44集：契约之战-双英雄阵容奥义',pl:'5万'},
                        {title:'【天下王者】第35期：国服最强雅典娜 越塔收割节奏',pl:'24.4万'},
                        {title:'【百星王者带你飞】第32期：王者局教学，最舒服的',pl:'24.4万'},
                        {title:'【快速上手英雄技能】弈星',pl:'24.4万'},
                        {title:'【鱼计可施】第27期：这个套路真的皮，狂暴流吕布',pl:'24.4万'},
                    ],
                },
                {
                    mate:'img',
                    list:[
                        {title:'王者助手4月签到运动会，周周签到有好礼！',pl:'8.4万'},
                        {title:'快讯：Hero久竞 3-1 XQ，久诚冷门女娲仍强势助队',pl:'24.4万'},
                        {title:'快讯：XQ 让一追三终结BA黑凤梨连胜，阿泰阿离、',pl:'23万'},
                        {title:'【COS少女集】第61期：颜值和技术一样强势 美貌刺',pl:'26万'},
                        {title:'鬼谷子摘下面具后长这个样子',pl:'24.4万'},
                        {title:'快讯：EDG.M 零封AG超玩会迎来首胜，无痕首发杨戬',pl:'24.4万'},
                        {title:'QGhappy该如何调整？Fly竟是关键人物',pl:'2.9万'},
                    ],
                }
                
            ]
        },
        {
            date:2,//月
            info:[
                {
                    mate:'video',
                    list:[
                        {title:'【快速上手英雄技能】弈星',pl:'24.4万'},
                        {title:'【快速上手英雄技能】裴擒虎',pl:'24.4万'},
                        {title:'【一鹿上王者】第41期：霸道御姐花木兰，光速五刀',pl:'24.4万'},
                        {title:'【上分拍档】第21期：玉环刘邦 以二敌五 威震峡谷',pl:'24.4万'},
                        {title:'【上分拍档】第19期：梦奇+苏烈 不屈坦克 锻造峡谷',pl:'24.4万'},
                        {title:'【天下王者】第33期：国服最强妲己 丢丢教你致命一',pl:'24.4万'},
                        {title:'【上分拍档】第22期：马可刘邦 自由人体系的终极形',pl:'24.4万'},
                    ],
                },
                {
                    mate:'img',
                    list:[
                        {title:'印记狂欢，7.15上线必得新英雄铠的稀有印记！',pl:'89.3万'},
                        {title:'S9调整抢先看，提前备战S9',pl:'63.9万'},
                        {title:'公孙离一图流教学',pl:'653万'},
                        {title:'“取经之路 就在脚下”——孙悟空新手攻略',pl:'26万'},
                        {title:'【诸葛亮技能解析】卧龙之智，计定江山',pl:'224.4万'},
                        {title:'王者助手4月签到运动会，周周签到有好礼！',pl:'24.9万'},
                        {title:'月下的女神—露娜新手攻略',pl:'8.4万'},
                    ],
                }
                
            ]
        }
    ];
    /* 轮播图开始 */
    // 动画函数
    function animate( node, target ) {
        var direction = target > node.offsetLeft ? 1 : -1;
        var step = 30;
        var interval = 5;
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
    // 轮播图ul列表
    var imgUl = $('.content .partone .main-show .left .adpic')[0];
    //按钮列表
    var btnLi = $('.content .partone .main-show .left .adBtn li');
    // 获取轮播图外层的盒子
    var lbbox = $('.content .partone .main-show .left');
    var intervalId = null;
    var index = 1;
    // 定时器轮播图片
    function move(){
        if(index==6){
            imgUl.style.left = '-716px';
            index = 1;
        }
        index++;
        animate(imgUl, -716 * index);
        // 按钮切换
        updateIndex();
    }
    function updateIndex(){
        for(var i = 0 ; i < btnLi.length; i++){
            $(btnLi[i]).removeClass();
            $(btnLi[i]).children().removeClass();
        }
        if(index === 0){
            $(btnLi[4]).addClass('lihover');
            $(btnLi[4]).children().addClass('ahover');
        }else if(index === 6){
            $(btnLi[0]).addClass('lihover');
            $(btnLi[0]).children().addClass('ahover');
        }else {
            $(btnLi[index - 1]).addClass('lihover');
            $(btnLi[index - 1]).children().addClass('ahover');
        }
    }
    intervalId = setInterval(move, 2000);
    lbbox.hover(function(){
        // 鼠标进入
        clearInterval(intervalId);
    },function(){
        // 鼠标移出
        intervalId = setInterval(move,2000);
    })
    // 给每个按钮设置点击事件，点击的时候调到对应的图片
    btnLi.mouseenter(function(){
        index = $(this).index()+1;
        animate(imgUl, -716 * index);
        updateIndex();
    });
    /* 轮播图结束*/

    /* 右侧列表展示 */
    // 图文视频
    var vidAndImg = $('.partone .main-show .right .top .video span');
    // 搜索框
    var inputText = $('.partone .main-show .right .input [type=text]');
    // 日周月
    var week = $(' .partone .main-show .right .top .day span');
    // 信息列表
    var infoList = $('.content .main-show .right .list li');
    // 日期标记
    var weekNum = 0;
    var vidAndImgNum = 0;
    vidAndImg.mouseenter(function(){

        var index = vidAndImgNum =  $(this).index();
        infoList = $('.content .main-show .right .list li');
        var infoListUl = infoList.parent();
        infoList.remove();
        var ary = [];
        $.each(weekdate[weekNum].info[index].list,function(i,item){
            ary.push('<li>');
            i<=2 ? ary.push('<span class="yel">' + (i+1) + '</span>'):
                ary.push('<span>' + (i+1) + '</span>');
            ary.push('<a href="#!">' + item.title + '</a>')
            ary.push('<i>'+ item.pl +'</i>')
            ary.push('</li>')
        });
        infoListUl.html(ary.join(''));
        
        if(index==0){
            $(this).addClass('shover').next().removeClass('shover');
            $(this).next().next().css({
                left: '0px',
            });
            inputText.attr('placeholder','输入关键字搜索更多视频');

        }else if(index==1){
            $(this).addClass('shover').prev().removeClass('shover');
            $(this).next().css({
                left: '60px',
            });
            inputText.attr('placeholder','输入关键字搜索更多图文攻略');
        }
        
    });
   
    week.mouseenter(function(){
        weekNum = $(this).index();
        // console.log(weekNum);
        $(this).addClass('dayhover').siblings().removeClass('dayhover');
        infoList = $('.content .main-show .right .list li');
        var infoListUl = infoList.parent();
        infoList.remove();
        var ary = [];
        $.each(weekdate[weekNum].info[vidAndImgNum].list,function(i,item){
            ary.push('<li>');
            i<=2 ? ary.push('<span class="yel">' + (i+1) + '</span>'):
                ary.push('<span>' + (i+1) + '</span>');
            ary.push('<a href="#!">' + item.title + '</a>')
            ary.push('<i>'+ item.pl +'</i>')
            ary.push('</li>')
        });
        infoListUl.html(ary.join(''));
    });

})();