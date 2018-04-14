// 英雄攻略
(function(window){
    var herotype = [
        {type:'remen',
        list:[
            {name:'后羿',url:'imgs/17.jpg'},
            {name:'妲己',url:'imgs/18.jpg'},
            {name:'李白',url:'imgs/19.jpg'},
            {name:'程咬金',url:'imgs/20.jpg'},
            {name:'安琪拉',url:'imgs/21.jpg'},
        ]},
        {type:'tanke',
        list:[
            {name:'亚瑟',url:'imgs/1.jpg'},
            {name:'亚瑟张飞',url:'imgs/2.jpg'},
            {name:'亚瑟',url:'imgs/2.jpg'},
            {name:'张亚瑟飞',url:'imgs/3.jpg'},
            {name:'亚瑟',url:'imgs/1.jpg'},
            {name:'亚瑟',url:'imgs/7.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'孟子',url:'imgs/12.jpg'},
            {name:'亚瑟',url:'imgs/8.jpg'},
            {name:'亚瑟',url:'imgs/6.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'孟子',url:'imgs/12.jpg'},
        ]},
        {type:'tanke',
        list:[
            {name:'亚瑟',url:'imgs/1.jpg'},
            {name:'栾星',url:'imgs/21.jpg'},
            {name:'亚瑟',url:'imgs/22.jpg'},
            {name:'张亚瑟飞',url:'imgs/3.jpg'},
            {name:'亚瑟',url:'imgs/1.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'孟子',url:'imgs/12.jpg'},
            {name:'亚瑟',url:'imgs/25.jpg'},
            {name:'亚瑟',url:'imgs/10.jpg'},
            {name:'亚瑟',url:'imgs/6.jpg'},
        ]},
        {type:'tanke',
        list:[
            {name:'诸葛亮',url:'imgs/11.jpg'},
            {name:'亚瑟张飞',url:'imgs/22.jpg'},
            {name:'亚瑟',url:'imgs/1.jpg'},
            {name:'貂蝉',url:'imgs/13.jpg'},
            {name:'虞姬',url:'imgs/1.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'孟子',url:'imgs/12.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'狄仁杰',url:'imgs/21.jpg'},
            {name:'亚瑟',url:'imgs/16.jpg'},
            {name:'诸葛亮',url:'imgs/11.jpg'},
            {name:'诸葛亮',url:'imgs/11.jpg'},
        ]},
        {type:'tanke',
        list:[
            {name:'瑟',url:'imgs/18.jpg'},
            {name:'飞',url:'imgs/24.jpg'},
            {name:'亚瑟',url:'imgs/16.jpg'},
            {name:'亚瑟飞',url:'imgs/3.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'孟子',url:'imgs/12.jpg'},
            {name:'亚瑟',url:'imgs/13.jpg'},
            {name:'亚瑟',url:'imgs/6.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'孟子',url:'imgs/12.jpg'},
        ]},
        {type:'tanke',
        list:[
            {name:'张飞',url:'imgs/13.jpg'},
            {name:'亚张飞',url:'imgs/2.jpg'},
            {name:'亚瑟',url:'imgs/11.jpg'},
            {name:'瑟飞',url:'imgs/3.jpg'},
            {name:'妲己',url:'imgs/1.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'李白',url:'imgs/8.jpg'},
            {name:'亚瑟',url:'imgs/6.jpg'},
            {name:'瑟飞',url:'imgs/3.jpg'},
            {name:'妲己',url:'imgs/1.jpg'},
            {name:'亚瑟',url:'imgs/14.jpg'},
            {name:'李白',url:'imgs/8.jpg'},
            {name:'亚瑟',url:'imgs/6.jpg'},
        ]},
        {type:'tanke',
        list:[
            {name:'孙悟空',url:'imgs/10.jpg'},
            {name:'后羿',url:'imgs/21.jpg'},
            {name:'亚瑟',url:'imgs/1.jpg'},
            {name:'瑟飞',url:'imgs/3.jpg'},
            {name:'亚瑟',url:'imgs/12.jpg'},
            {name:'妲己',url:'imgs/15.jpg'},
            {name:'亚瑟',url:'imgs/19.jpg'},
            {name:'庄周',url:'imgs/6.jpg'},
            {name:'亚瑟',url:'imgs/12.jpg'},
            {name:'妲己',url:'imgs/15.jpg'},
            {name:'亚瑟',url:'imgs/19.jpg'},
        ]},
    ];
    //英雄推荐视频列表数据
    var herovideolist = [
        {
            list:[
                {imgurl : 'imgs/50.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
                {imgurl : 'imgs/51.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
                {imgurl : 'imgs/52.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
                {imgurl : 'imgs/53.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
                {imgurl : 'imgs/54.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
                {imgurl : 'imgs/55.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/56.jpg',pl:'2.8万',date:'11天以前',title:'零度带你飞54：围棋少年立志向前，弈星的天元之弈'},
                {imgurl : 'imgs/57.jpg',pl:'2.8万',date:'11天以前',title:'零度带你飞54：围棋少年立志向前，弈星的天元之弈'},
                {imgurl : 'imgs/58.jpg',pl:'3.8万',date:'11天以前',title:'零度带你飞54：围棋少年立志向前，弈星的天元之弈'},
                {imgurl : 'imgs/59.jpg',pl:'1.8万',date:'11天以前',title:'零度带你飞54：围棋少年立志向前，弈星的天元之弈'},
                {imgurl : 'imgs/60.jpg',pl:'2.8万',date:'11天以前',title:'零度带你飞54：围棋少年立志向前，弈星的天元之弈'},
                {imgurl : 'imgs/61.jpg',pl:'2.8万',date:'11天以前',title:'零度带你飞54：围棋少年立志向前，弈星的天元之弈'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/62.jpg',pl:'5.8万',date:'18天以前',title:'【王者之歌】：《弈魂》 弈星原创同人歌曲'},
                {imgurl : 'imgs/63.jpg',pl:'5.8万',date:'18天以前',title:'【王者之歌】：《弈魂》 弈星原创同人歌曲'},
                {imgurl : 'imgs/64.jpg',pl:'5.8万',date:'18天以前',title:'【王者之歌】：《弈魂》 弈星原创同人歌曲'},
                {imgurl : 'imgs/65.jpg',pl:'5.8万',date:'18天以前',title:'【王者之歌】：《弈魂》 弈星原创同人歌曲'},
                {imgurl : 'imgs/66.jpg',pl:'5.8万',date:'18天以前',title:'【王者之歌】：《弈魂》 弈星原创同人歌曲'},
                {imgurl : 'imgs/67.jpg',pl:'5.8万',date:'18天以前',title:'【王者之歌】：《弈魂》 弈星原创同人歌曲'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/68.jpg',pl:'15.8万',date:'1个月以前',title:'嗜血战士典韦，真实伤害势不可挡'},
                {imgurl : 'imgs/69.jpg',pl:'15.8万',date:'1个月以前',title:'嗜血战士典韦，真实伤害势不可挡'},
                {imgurl : 'imgs/70.jpg',pl:'15.8万',date:'1个月以前',title:'嗜血战士典韦，真实伤害势不可挡'},
                {imgurl : 'imgs/71.jpg',pl:'15.8万',date:'1个月以前',title:'嗜血战士典韦，真实伤害势不可挡'},
                {imgurl : 'imgs/72.jpg',pl:'15.8万',date:'1个月以前',title:'嗜血战士典韦，真实伤害势不可挡'},
                {imgurl : 'imgs/73.jpg',pl:'15.8万',date:'1个月以前',title:'嗜血战士典韦，真实伤害势不可挡'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/74.jpg',pl:'1.8万',date:'18天以前',title:'团战之王16杀高渐离轻松三杀拿到手软'},
                {imgurl : 'imgs/75.jpg',pl:'1.8万',date:'18天以前',title:'团战之王16杀高渐离轻松三杀拿到手软'},
                {imgurl : 'imgs/76.jpg',pl:'1.8万',date:'18天以前',title:'团战之王16杀高渐离轻松三杀拿到手软'},
                {imgurl : 'imgs/77.jpg',pl:'1.8万',date:'18天以前',title:'团战之王16杀高渐离轻松三杀拿到手软'},
                {imgurl : 'imgs/78.jpg',pl:'1.8万',date:'18天以前',title:'团战之王16杀高渐离轻松三杀拿到手软'},
                {imgurl : 'imgs/79.jpg',pl:'1.8万',date:'18天以前',title:'团战之王16杀高渐离轻松三杀拿到手软'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x11.jpg',pl:'5.8万',date:'8天以前',title:'【白果解说】金牌庄周全程不死，完美解控助友杀敌'},
                {imgurl : 'imgs/x12.jpg',pl:'5.8万',date:'8天以前',title:'【白果解说】金牌庄周全程不死，完美解控助友杀敌'},
                {imgurl : 'imgs/x13.jpg',pl:'5.8万',date:'8天以前',title:'【白果解说】金牌庄周全程不死，完美解控助友杀敌'},
                {imgurl : 'imgs/x14.jpg',pl:'5.8万',date:'8天以前',title:'【白果解说】金牌庄周全程不死，完美解控助友杀敌'},
                {imgurl : 'imgs/x15.jpg',pl:'5.8万',date:'8天以前',title:'【白果解说】金牌庄周全程不死，完美解控助友杀敌'},
                {imgurl : 'imgs/x16.jpg',pl:'5.8万',date:'8天以前',title:'【白果解说】金牌庄周全程不死，完美解控助友杀敌'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x17.jpg',pl:'5.8万',date:'18天以前',title:'圣光骑士亚瑟，终极裁决强势控场'},
                {imgurl : 'imgs/x18.jpg',pl:'5.8万',date:'18天以前',title:'圣光骑士亚瑟，终极裁决强势控场'},
                {imgurl : 'imgs/x19.jpg',pl:'5.8万',date:'18天以前',title:'圣光骑士亚瑟，终极裁决强势控场'},
                {imgurl : 'imgs/x20.jpg',pl:'5.8万',date:'18天以前',title:'圣光骑士亚瑟，终极裁决强势控场'},
                {imgurl : 'imgs/x21.jpg',pl:'5.8万',date:'18天以前',title:'圣光骑士亚瑟，终极裁决强势控场'},
                {imgurl : 'imgs/x22.jpg',pl:'5.8万',date:'18天以前',title:'圣光骑士亚瑟，终极裁决强势控场'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x24.jpg',pl:'5.8万',date:'18天以前',title:'【弈星背景故事】弈星，一个让武则天刮目相看的棋士'},
                {imgurl : 'imgs/x26.jpg',pl:'5.8万',date:'18天以前',title:'【弈星背景故事】弈星，一个让武则天刮目相看的棋士'},
                {imgurl : 'imgs/x27.jpg',pl:'5.8万',date:'18天以前',title:'【弈星背景故事】弈星，一个让武则天刮目相看的棋士'},
                {imgurl : 'imgs/x28.jpg',pl:'5.8万',date:'18天以前',title:'【弈星背景故事】弈星，一个让武则天刮目相看的棋士'},
                {imgurl : 'imgs/x29.jpg',pl:'5.8万',date:'18天以前',title:'【弈星背景故事】弈星，一个让武则天刮目相看的棋士'},
                {imgurl : 'imgs/x30.jpg',pl:'5.8万',date:'18天以前',title:'【弈星背景故事】弈星，一个让武则天刮目相看的棋士'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x31.jpg',pl:'5.8万',date:'18天以前',title:'铸剑师的愤怒，你驾驭不住-干将莫邪进阶攻略'},
                {imgurl : 'imgs/x32.jpg',pl:'5.8万',date:'18天以前',title:'铸剑师的愤怒，你驾驭不住-干将莫邪进阶攻略'},
                {imgurl : 'imgs/x33.jpg',pl:'5.8万',date:'18天以前',title:'铸剑师的愤怒，你驾驭不住-干将莫邪进阶攻略'},
                {imgurl : 'imgs/x34.jpg',pl:'5.8万',date:'18天以前',title:'铸剑师的愤怒，你驾驭不住-干将莫邪进阶攻略'},
                {imgurl : 'imgs/x35.jpg',pl:'5.8万',date:'18天以前',title:'铸剑师的愤怒，你驾驭不住-干将莫邪进阶攻略'},
                {imgurl : 'imgs/x22.jpg',pl:'5.8万',date:'18天以前',title:'铸剑师的愤怒，你驾驭不住-干将莫邪进阶攻略'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x55.jpg',pl:'5.8万',date:'18天以前',title:'暴力中单决胜战场！干将莫邪出装分析'},
                {imgurl : 'imgs/x55.jpg',pl:'5.8万',date:'18天以前',title:'暴力中单决胜战场！干将莫邪出装分析'},
                {imgurl : 'imgs/x56.jpg',pl:'5.8万',date:'18天以前',title:'暴力中单决胜战场！干将莫邪出装分析'},
                {imgurl : 'imgs/x57.jpg',pl:'5.8万',date:'18天以前',title:'暴力中单决胜战场！干将莫邪出装分析'},
                {imgurl : 'imgs/x58.jpg',pl:'5.8万',date:'18天以前',title:'暴力中单决胜战场！干将莫邪出装分析'},
                {imgurl : 'imgs/x59.jpg',pl:'5.8万',date:'18天以前',title:'暴力中单决胜战场！干将莫邪出装分析'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x60.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
                {imgurl : 'imgs/x61.jpg',pl:'5.8万',date:'18天以前',title:'嗜血战士典韦，狂暴跳斩疯狂收割'},
                {imgurl : 'imgs/x62.jpg',pl:'5.8万',date:'18天以前',title:'嗜血战士典韦，狂暴跳斩疯狂收割'},
                {imgurl : 'imgs/x20.jpg',pl:'5.8万',date:'18天以前',title:'嗜血战士典韦，狂暴跳斩疯狂收割'},
                {imgurl : 'imgs/x21.jpg',pl:'5.8万',date:'18天以前',title:'嗜血战士典韦，狂暴跳斩疯狂收割'},
                {imgurl : 'imgs/x22.jpg',pl:'5.8万',date:'18天以前',title:'野区一姐露娜，无限连招惊艳全场'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x24.jpg',pl:'5.8万',date:'18天以前',title:'真实伤害无解！前排最大克星典韦'},
                {imgurl : 'imgs/x26.jpg',pl:'5.8万',date:'18天以前',title:'真实伤害无解！前排最大克星典韦'},
                {imgurl : 'imgs/x27.jpg',pl:'5.8万',date:'18天以前',title:'真实伤害无解！前排最大克星典韦'},
                {imgurl : 'imgs/x28.jpg',pl:'5.8万',date:'18天以前',title:'真实伤害无解！前排最大克星典韦'},
                {imgurl : 'imgs/x29.jpg',pl:'5.8万',date:'18天以前',title:'真实伤害无解！前排最大克星典韦'},
                {imgurl : 'imgs/x30.jpg',pl:'5.8万',date:'18天以前',title:'真实伤害无解！前排最大克星典韦'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x31.jpg',pl:'5.8万',date:'18天以前',title:'淬命双剑干将莫邪，万剑齐出取敌首级'},
                {imgurl : 'imgs/x32.jpg',pl:'5.8万',date:'18天以前',title:'淬命双剑干将莫邪，万剑齐出取敌首级'},
                {imgurl : 'imgs/x33.jpg',pl:'5.8万',date:'18天以前',title:'淬命双剑干将莫邪，万剑齐出取敌首级'},
                {imgurl : 'imgs/x34.jpg',pl:'5.8万',date:'18天以前',title:'淬命双剑干将莫邪，万剑齐出取敌首级'},
                {imgurl : 'imgs/x35.jpg',pl:'5.8万',date:'18天以前',title:'淬命双剑干将莫邪，万剑齐出取敌首级'},
                {imgurl : 'imgs/x36.jpg',pl:'5.8万',date:'18天以前',title:'淬命双剑干将莫邪，万剑齐出取敌首级'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x37.jpg',pl:'5.8万',date:'18天以前',title:'干将莫邪入场远程疯狂输出，暴力三杀'},
                {imgurl : 'imgs/x38.jpg',pl:'5.8万',date:'18天以前',title:'干将莫邪入场远程疯狂输出，暴力三杀'},
                {imgurl : 'imgs/x39.jpg',pl:'5.8万',date:'18天以前',title:'干将莫邪入场远程疯狂输出，暴力三杀'},
                {imgurl : 'imgs/x40.jpg',pl:'5.8万',date:'18天以前',title:'干将莫邪入场远程疯狂输出，暴力三杀'},
                {imgurl : 'imgs/x41.jpg',pl:'5.8万',date:'18天以前',title:'干将莫邪入场远程疯狂输出，暴力三杀'},
                {imgurl : 'imgs/x42.jpg',pl:'5.8万',date:'18天以前',title:'干将莫邪入场远程疯狂输出，暴力三杀'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x43.jpg',pl:'5.8万',date:'18天以前',title:'萌新的荣耀EP369 安琪拉神级闪现预判秒杀塔下貂蝉'},
                {imgurl : 'imgs/x44.jpg',pl:'5.8万',date:'18天以前',title:'萌新的荣耀EP369 安琪拉神级闪现预判秒杀塔下貂蝉'},
                {imgurl : 'imgs/x45.jpg',pl:'5.8万',date:'18天以前',title:'萌新的荣耀EP369 安琪拉神级闪现预判秒杀塔下貂蝉'},
                {imgurl : 'imgs/x46.jpg',pl:'5.8万',date:'18天以前',title:'萌新的荣耀EP369 安琪拉神级闪现预判秒杀塔下貂蝉'},
                {imgurl : 'imgs/x47.jpg',pl:'5.8万',date:'18天以前',title:'萌新的荣耀EP369 安琪拉神级闪现预判秒杀塔下貂蝉'},
                {imgurl : 'imgs/x48.jpg',pl:'5.8万',date:'18天以前',title:'萌新的荣耀EP369 安琪拉神级闪现预判秒杀塔下貂蝉'},
            ]
        },
        {
            list:[
                {imgurl : 'imgs/x49.jpg',pl:'5.8万',date:'18天以前',title:'【清风解说】干将莫邪逆风爆发，强悍输出不死超神'},
                {imgurl : 'imgs/x50.jpg',pl:'5.8万',date:'18天以前',title:'【清风解说】干将莫邪逆风爆发，强悍输出不死超神'},
                {imgurl : 'imgs/x51.jpg',pl:'5.8万',date:'18天以前',title:'【清风解说】干将莫邪逆风爆发，强悍输出不死超神'},
                {imgurl : 'imgs/x52.jpg',pl:'5.8万',date:'18天以前',title:'【清风解说】干将莫邪逆风爆发，强悍输出不死超神'},
                {imgurl : 'imgs/x53.jpg',pl:'5.8万',date:'18天以前',title:'【清风解说】干将莫邪逆风爆发，强悍输出不死超神'},
                {imgurl : 'imgs/x54.jpg',pl:'5.8万',date:'18天以前',title:'【清风解说】干将莫邪逆风爆发，强悍输出不死超神'},
            ]
        },
        
    ];
    // 英雄推荐信息列表数据
    var heroinfolist = [
        {
            list:[
                {type:'射手',des:'感谢！成长路上一直有你——妲己进阶攻略',adate:'20天以前'},
                {type:'射手',des:'感谢！成长路上一直有你——妲己进阶攻略',adate:'12天以前'},
                {type:'射手',des:'半神后羿极致输出，箭无虚发掌控峡谷',adate:'2天前'},
                {type:'射手',des:'感谢！成长路上一直有你——妲己进阶攻略',adate:'21天以前'},
                {type:'射手',des:'被后羿的大招命中是什么原因？',adate:'2天前'},
                {type:'射手',des:'感谢！成长路上一直有你——妲己进阶攻略',adate:'21天以前'},
                {type:'射手',des:'万箭齐发火力全开，射手后羿新手入门',adate:'12天前'},
                {type:'射手',des:'感谢！成长路上一直有你——妲己进阶攻略',adate:'2天前'},
                {type:'射手',des:'半神之弓，万箭齐发——后羿进阶攻略',adate:'2天前'},
                {type:'射手',des:'感谢！成长路上一直有你——妲己进阶攻略',adate:'2天前'},
        ]},
        {
            list:[
                {type:'战士',des:'后期强大的典韦该如何苟活过前期？',adate:'2天前'},
                {type:'战士',des:'以绝望挥剑，从此为修罗——铠进阶攻略',adate:'21天前'},
                {type:'战士',des:'后期强大的典韦该如何苟活过前期？',adate:'2天前'},
                {type:'战士',des:'以绝望挥剑，从此为修罗——铠进阶攻略',adate:'2天前'},
                {type:'战士',des:'圣光照耀永生不灭-亚瑟高阶攻略',adate:'2天前'},
                {type:'战士',des:'以绝望挥剑，从此为修罗——铠进阶攻略',adate:'1个月前'},
                {type:'战士',des:'圣骑士霸气亚瑟，沉默控制制霸全场',adate:'2天前'},
                {type:'战士',des:'冲锋狂战士典韦，嗜血战斧无情杀戮',adate:'2天前'},
                {type:'战士',des:'以绝望挥剑，从此为修罗——铠进阶攻略',adate:'2天前'},
                {type:'战士',des:'每个人都拥有的老亚瑟实力究竟如何？',adate:'10小时前'},
        ]},
        {
            list:[
                {type:'战士',des:'机关造物 智商二百五——鲁班七号新手攻略',adate:'2天前'},
                {type:'战士',des:'每个人都拥有的老亚瑟实力究竟如何？',adate:'1个月以前'},
                {type:'战士',des:'亡灵召唤亚瑟本色，圣剑裁决沉默克敌',adate:'2天前'},
                {type:'战士',des:'机关造物 智商二百五——鲁班七号新手攻略',adate:'1个月以前'},
                {type:'战士',des:'每个人都拥有的老亚瑟实力究竟如何？',adate:'1个月以前'},
                {type:'战士',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'战士',des:'亡灵召唤亚瑟本色，圣剑裁决沉默克敌',adate:'2天前'},
                {type:'战士',des:'小个子火力全开，鲁班七号冲击最强射手',adate:'1个月以前'},
                {type:'战士',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'战士',des:'小个子火力全开，鲁班七号冲击最强射手',adate:'1个月以前'},
        ]},
        {
            list:[
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'1个月以前'},
                {type:'射手',des:'机关造物 智商二百五——鲁班七号新手攻略',adate:'2天前'},
                {type:'射手',des:'亡灵召唤亚瑟本色，圣剑裁决沉默克敌',adate:'2天前'},
                {type:'射手',des:'每个人都拥有的老亚瑟实力究竟如何？',adate:'1个月以前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'1个月以前'},
                {type:'射手',des:'机关造物 智商二百五——鲁班七号新手攻略',adate:'2天前'},
                {type:'射手',des:'亡灵召唤亚瑟本色，圣剑裁决沉默克敌',adate:'2天前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'1个月以前'},
                {type:'射手',des:'每个人都拥有的老亚瑟实力究竟如何？',adate:'1个月以前'},
                {type:'射手',des:'机关造物 智商二百五——鲁班七号新手攻略',adate:'2天前'},
        ]},
        
        {
            list:[
                {type:'坦克',des:'吸血女王芈月，单挑带线无人能挡',adate:'2天前'},
                {type:'坦克',des:'暗影之月芈月，吸血抗压无所不能',adate:'2天前'},
                {type:'坦克',des:'法坦芈月，让敌人的鲜血染红峡谷',adate:'2天前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'坦克',des:'亡灵召唤亚瑟本色，圣剑裁决沉默克敌',adate:'2天前'},
                {type:'坦克',des:'“渴求青春美貌，并愿意付出一切代价。”——芈月新手攻略',adate:'2天前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'坦克',des:'吸血女王芈月，单挑带线无人能挡',adate:'2天前'},
                {type:'坦克',des:'徐福居然在芈月的命令下做了这种事',adate:'2天前'},
                {type:'坦克',des:'“渴求青春美貌，并愿意付出一切代价。”——芈月新手攻略',adate:'2天前'},
        ]},
        
        {
            list:[
                {type:'坦克',des:'法坦芈月，让敌人的鲜血染红峡谷',adate:'21天前'},
                {type:'坦克',des:'亡灵召唤亚瑟本色，圣剑裁决沉默克敌',adate:'12天前'},
                {type:'坦克',des:'关于芈月的人设，你不知道的都在这',adate:'4天前'},
                {type:'坦克',des:'噬血女王芈月，暗影之月照耀全场',adate:'8天前'},
                {type:'坦克',des:'法坦芈月，让敌人的鲜血染红峡谷',adate:'12天前'},
                {type:'坦克',des:'暗影之月芈月，吸血抗压无所不能',adate:'22天前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2个月前'},
                {type:'坦克',des:'关于芈月的人设，你不知道的都在这',adate:'1天前'},
                {type:'坦克',des:'徐福居然在芈月的命令下做了这种事',adate:'2天前'},
        ]},
        
        {
            list:[
                {type:'射手',des:'以绝望挥剑，从此为修罗——铠进阶攻略',adate:'12天前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'22天前'},
                {type:'射手',des:'无限接近死亡，更能醒悟生存的真谛——铠新手攻略',adate:'2天前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'12天前'},
                {type:'射手',des:'八秒真男人，转瞬便超神——铠高阶攻略',adate:'4天以前'},
                {type:'射手',des:'铠单挑能力超强，极限抗压屠戮全场',adate:'2天以前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'射手',des:'暴力战士铠疯狂输出，不灭魔躯虐翻全场',adate:'19个小时前'},
                {type:'射手',des:'【一图识英雄】峡谷人气王，铠的身份大揭秘',adate:'2天前'},
                {type:'射手',des:'不灭魔躯脆皮杀手，战士铠战无不胜',adate:'8个小时前'},
        ]},
        
        {
            list:[
                {type:'坦克',des:'真正的世界应当有色彩--安琪拉新手攻略',adate:'1天前'},
                {type:'坦克',des:'切入敌阵，后发制人——铠进阶攻略',adate:'6天前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'坦克',des:'唯一的烦恼就是比所有对手都强——铠新手攻略',adate:'2天前'},
                {type:'坦克',des:'切入敌阵，后发制人——铠进阶攻略',adate:'5天前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'12天前'},
                {type:'坦克',des:'小身材，大能量——安琪拉进阶攻略',adate:'2天前'},
                {type:'坦克',des:'华丽连招瞬间爆炸，安琪拉瑕不掩瑜',adate:'3小时前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'坦克',des:'敢惹本仙女？烧死你！—安琪拉新手攻略',adate:'2个小时前'},
        ]},
        
        {
            list:[
                {type:'战士',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'2天前'},
                {type:'战士',des:'机关大师鲁班七号，千里之外巧收人头',adate:'21天前'},
                {type:'战士',des:'金箍一棒乾坤再造，孙悟空上分阵容推荐',adate:'12天前'},
                {type:'战士',des:'金箍一棒乾坤再造，孙悟空上分阵容推荐',adate:'2天前'},
                {type:'战士',des:'孙悟空爆发能力强，一波流打法称霸峡谷',adate:'23天前'},
                {type:'战士',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'2天前'},
                {type:'战士',des:'专业敲闷棍——孙悟空进阶攻略',adate:'2天前'},
                {type:'战士',des:'机关大师鲁班七号，千里之外巧收人头',adate:'26天前'},
                {type:'战士',des:'专业敲闷棍——孙悟空进阶攻略',adate:'2天前'},
                {type:'战士',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'28天前'},
        ]},
        
        {
            list:[
                {type:'坦克',des:'取经之路，就在脚下！——孙悟空新手攻略',adate:'1天前'},
                {type:'坦克',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'2个月前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'坦克',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'3个月前'},
                {type:'坦克',des:'专业敲闷棍——孙悟空进阶攻略',adate:'2天前'},
                {type:'坦克',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'1个月前'},
                {type:'坦克',des:'取经之路，就在脚下！——孙悟空新手攻略',adate:'2天前'},
                {type:'坦克',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2天前'},
                {type:'坦克',des:'孙悟空一秒三棒技巧，四套新连招助你Carry全场',adate:'1个月前'},
                {type:'坦克',des:'孙悟空怒显威严，三棒一出脆皮皆亡',adate:'1个月前'},
        ]},
        
        {
            list:[
                {type:'射手',des:'孙悟空暴力出装，极限伤害秒杀全场',adate:'12天前'},
                {type:'射手',des:'孙悟空怒显威严，三棒一出脆皮皆亡',adate:'22天前'},
                {type:'射手',des:'打野猴三棍，脆皮收割机——孙悟空进阶攻略',adate:'23天前'},
                {type:'射手',des:'打野猴三棍，脆皮收割机——孙悟空进阶攻略',adate:'25天前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'26天前'},
                {type:'射手',des:'孙悟空怒显威严，三棒一出脆皮皆亡',adate:'27天前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'28天前'},
                {type:'射手',des:'孙悟空暴力出装，极限伤害秒杀全场',adate:'12天前'},
                {type:'射手',des:'孙悟空暴力出装，极限伤害秒杀全场',adate:'2个月前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'2个月前'},
        ]},
        
        {
            list:[
                {type:'刺客',des:'机关大师鲁班七号，千里之外巧收人头',adate:'12天前'},
                {type:'刺客',des:'超高人气孙悟空，三棒一个小脆皮',adate:'22天前'},
                {type:'刺客',des:'机关大师鲁班七号，千里之外巧收人头',adate:'32天前'},
                {type:'刺客',des:'机关大师鲁班七号，千里之外巧收人头',adate:'4天前'},
                {type:'刺客',des:'打野猴三棍，脆皮收割机——孙悟空进阶攻略',adate:'4天前'},
                {type:'刺客',des:'机关大师鲁班七号，千里之外巧收人头',adate:'5天前'},
                {type:'刺客',des:'超高人气孙悟空，三棒一个小脆皮',adate:'5天前'},
                {type:'刺客',des:'孙长老，快收了神通吧！——孙悟空新手入门攻略',adate:'2天前'},
                {type:'刺客',des:'孙长老，快收了神通吧！——孙悟空新手入门攻略',adate:'2天前'},
                {type:'刺客',des:'超高人气孙悟空，三棒一个小脆皮',adate:'1个月前'},
        ]},
        
        {
            list:[
                {type:'战士',des:'隐于虚无的射手，百里守约的狙击流打法',adate:'12个小时前'},
                {type:'战士',des:'不灭魔躯脆皮杀手，战士铠战无不胜',adate:'12个小时前'},
                {type:'战士',des:'铠单挑能力超强，极限抗压屠戮全场',adate:'2天前'},
                {type:'战士',des:'铠单挑能力超强，极限抗压屠戮全场',adate:'1个小时前'},
                {type:'战士',des:'隐于虚无的射手，百里守约的狙击流打法',adate:'2天前'},
                {type:'战士',des:'机关大师鲁班七号，千里之外巧收人头',adate:'34个小时前'},
                {type:'战士',des:'无限接近死亡，更能醒悟生存的真谛——铠新手攻略',adate:'2天前'},
                {type:'战士',des:'切入敌阵，后发制人——铠进阶攻略',adate:'4个小时前'},
                {type:'战士',des:'【一图识英雄】峡谷人气王，铠的身份大揭秘',adate:'2天前'},
                {type:'战士',des:'切入收割十分轻松！铠进阶打法',adate:'2天前'},
        ]},
        
        {
            list:[
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'22天前'},
                {type:'射手',des:'五排必备套路—速推流攻略教学',adate:'2天前'},
                {type:'射手',des:'机关大师鲁班七号，千里之外巧收人头',adate:'22天前'},
                {type:'射手',des:'团控推进两不误，辅助刘禅上分秘籍',adate:'12个小时前'},
                {type:'射手',des:'拆塔快控制强，全能辅助刘禅轻松上分',adate:'2个小时前'},
                {type:'射手',des:'团控推进两不误，辅助刘禅上分秘籍',adate:'1个小时前'},
                {type:'射手',des:'推塔王子刘禅，能控能抗完美辅助',adate:'3个小时前'},
                {type:'射手',des:'【一图识英雄】可别小看他，刘禅也能玩转高端局',adate:'2天前'},
                {type:'射手',des:'拆迁小分队坦克刘禅，能打能抗能拆塔',adate:'2天前'},
                {type:'射手',des:'拆塔小霸王刘禅，五秒一个防御塔',adate:'3个小时前'},
        ]},
        
        {
            list:[
                {type:'法师',des:'小霸王刘禅的心上人大揭秘',adate:'2天前'},
                {type:'法师',des:'真相只有一个——狄仁杰新手入门攻略',adate:'12天前'},
                {type:'法师',des:'迅捷射手狄仁杰，强势收割万无一失',adate:'12天前'},
                {type:'法师',des:'持续输出掌控全场，狄仁杰无情风筝敌人',adate:'32天前'},
                {type:'法师',des:'朝廷密探狄仁杰，极限输出掌控全场',adate:'22天前'},
                {type:'法师',des:'令牌在手，天下我有——狄仁杰新手攻略',adate:'23天前'},
                {type:'法师',des:'令牌一出，谁与争锋！——狄仁杰新手攻略',adate:'23天前'},
                {type:'法师',des:'令牌在手，天下我有——狄仁杰新手攻略',adate:'23天前'},
                {type:'法师',des:'学会这招，狄仁杰成为峡谷的走A大神！',adate:'23个小时前'},
                {type:'法师',des:'狄仁杰令牌先声夺人，灵活走位玩弄敌军',adate:'23个小时前'},
        ]},
        
        {
            list:[
                {type:'射手',des:'风，会带走你曾经存在过的证明——虞姬新手攻略',adate:'3天前'},
                {type:'射手',des:'脆皮杀手，玩转poke流虞姬',adate:'2天前'},
                {type:'射手',des:'四面楚歌泣，剑挑月痕开——虞姬进阶攻略',adate:'4天前'},
                {type:'射手',des:'风之轻语虞姬，远程收割带动全场',adate:'6天前'},
                {type:'射手',des:'最强射手虞姬，轻松带你上分',adate:'2天前'},
                {type:'射手',des:'夏天虞姬强势收割，二连击破技惊四座',adate:'2天前'},
                {type:'射手',des:'森林之灵的轻语——虞姬进阶攻略',adate:'27天前'},
                {type:'射手',des:'虞姬一支穿云箭，千军万马来相见',adate:'42天前'},
                {type:'射手',des:'森林之女虞姬，千里之外远程收割',adate:'6天前'},
                {type:'射手',des:'明媚如风轻盈似箭，射手中的刺客——虞姬进阶攻略',adate:'2天前'},
        ]},
        
        
    ];
    // 横向英雄列表li
    var $herolist = $('.hero-raiders .bd .herolist .hero_list_ul li');
    //英雄列表弹出层
    var $dropdown = $('.hero-raiders .bd .herolist .hero_radiers_dropdown');
    // 弹出层右侧列表
    var $droprightlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .right li')
    // 弹出层左侧列表
    var $dropleftlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .left ul li');

    $herolist.mouseenter(function(){
        var index = $(this).index();
        if(index == 16){
            $dropleftlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .left li');
            // var index = $(this).index();
            var ul = $dropleftlist.parent();
            var ary = [];
            $.each(herotype[0].list,function(i,value){
                ary.push('<li>');
                ary.push('<a><img src = '+value.url+'>'+value.name+'</a>');
                ary.push('</li>');
                
            });
            ul.html(ary.join(''));
            // 当鼠标滑动到更多英雄的时候显示英雄列表下拉框；
            $dropdown.css('display','block');
            
            $dropleftlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .left li');
            $dropleftlist.mouseenter(function(){
                var index = $(this).index();
                console.log(index);
                // 当鼠标滑动到每个英雄的时候更换推荐视频和文字信息
                // 更新视频列表
                var $videolist = $('.hero-raiders .bd .hero-inbox .left li');
                var videoul = $videolist.parent();
                $videolist.remove();
                var videoary = [];
                $.each(herovideolist[index].list,function(i,item){
                    videoary.push('<li> <a href="#">');
                    videoary.push('<img src='+ item.imgurl + ' alt="">');
                    videoary.push('<span class="play_bar">');
                    videoary.push('<em class="icon-play fl">' + item.pl + '</em>');
                    videoary.push('<em class="fr">' + item.date + '</em>');
                    videoary.push('</span>')
                    videoary.push('<span class="title">' + item.title + '</span>');
                    videoary.push('<span class="video-mask">');
                    videoary.push('<em class="play"></em>');
                    videoary.push('</span>')
                    videoary.push('</a></li>');
                });
                videoul.html(videoary.join(''));

                // 更新文本列表
                var $infolist = $('.hero-raiders .bd .hero-inbox .right li');
                var infoul = $infolist.parent();
                $infolist.remove();
                var infoary = [];
                $.each(heroinfolist[index].list,function(i,item){
                    infoary.push('<li>');
                    infoary.push('<em class="type">' + item.type + '</em>');
                    infoary.push('<a href="#">' + item.des + '</a>');
                    infoary.push('<em class="adate">' + item.adate + '</em>');
                    infoary.push('</li>')
                });
                // console.log(infoary)
                infoul.html(infoary.join(''));
            });

            return ;
        }
        // 当鼠标滑动到每个英雄的时候突出显示
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('.li_info')
            .removeClass('info')
            .parent()
            .siblings().children('div')
            .addClass('info');


        // 当鼠标滑动到每个英雄的时候更换推荐视频和文字信息
        // 更新视频列表
        var $videolist = $('.hero-raiders .bd .hero-inbox .left li');
        var videoul = $videolist.parent();
        $videolist.remove();
        var videoary = [];
        $.each(herovideolist[index].list,function(i,item){
            videoary.push('<li> <a href="#">');
            videoary.push('<img src='+ item.imgurl + ' alt="">');
            videoary.push('<span class="play_bar">');
            videoary.push('<em class="icon-play fl">' + item.pl + '</em>');
            videoary.push('<em class="fr">' + item.date + '</em>');
            videoary.push('</span>')
            videoary.push('<span class="title">' + item.title + '</span>');
            videoary.push('<span class="video-mask">');
            videoary.push('<em class="play"></em>');
            videoary.push('</span>')
            videoary.push('</a></li>');
        });
        videoul.html(videoary.join(''));

        // 更新文本列表
        var $infolist = $('.hero-raiders .bd .hero-inbox .right li');
        var infoul = $infolist.parent();
        $infolist.remove();
        var infoary = [];
        $.each(heroinfolist[index].list,function(i,item){
            infoary.push('<li>');
            infoary.push('<em class="type">' + item.type + '</em>');
            infoary.push('<a href="#">' + item.des + '</a>');
            infoary.push('<em class="adate">' + item.adate + '</em>');
            infoary.push('</li>')
        });
        infoul.html(infoary.join(''));


    });
    $herolist.mouseleave(function(){
        $(this).removeClass('active');
        $herolist.children('.li_info')
            .addClass('info');
        $dropdown.css('display','none');
    });
    $dropdown.hover(function(){
        $dropdown.css('display','block');
    },function(){
        $dropdown.css('display','none');
        $($droprightlist[0]).addClass('hover').siblings().removeClass('hover');
    });

    // 纵向英雄列表
    // 纵向英雄列表右边mouseover事件
    $droprightlist.mouseenter(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
        $dropleftlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .left li');
        var index = $(this).index();
        var ul = $dropleftlist.parent();
        var ary = [];
        $.each(herotype[index].list,function(i,value){
            ary.push('<li>');
            ary.push('<a><img src = '+value.url+'>'+value.name+'</a>');
            ary.push('</li>');
            
        });
        ul.html(ary.join(''));

        $dropleftlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .left li');
        $dropleftlist.mouseenter(function(){
            var index = $(this).index();
            // 当鼠标滑动到每个英雄的时候更换推荐视频和文字信息
            // 更新视频列表
            var $videolist = $('.hero-raiders .bd .hero-inbox .left li');
            var videoul = $videolist.parent();
            $videolist.remove();
            var videoary = [];
            $.each(herovideolist[index].list,function(i,item){
                videoary.push('<li> <a href="#">');
                videoary.push('<img src='+ item.imgurl + ' alt="">');
                videoary.push('<span class="play_bar">');
                videoary.push('<em class="icon-play fl">' + item.pl + '</em>');
                videoary.push('<em class="fr">' + item.date + '</em>');
                videoary.push('</span>')
                videoary.push('<span class="title">' + item.title + '</span>');
                videoary.push('<span class="video-mask">');
                videoary.push('<em class="play"></em>');
                videoary.push('</span>')
                videoary.push('</a></li>');
            });
            videoul.html(videoary.join(''));
    
            // 更新文本列表
            var $infolist = $('.hero-raiders .bd .hero-inbox .right li');
            var infoul = $infolist.parent();
            $infolist.remove();
            var infoary = [];
            $.each(heroinfolist[index].list,function(i,item){
                infoary.push('<li>');
                infoary.push('<em class="type">' + item.type + '</em>');
                infoary.push('<a href="#">' + item.des + '</a>');
                infoary.push('<em class="adate">' + item.adate + '</em>');
                infoary.push('</li>')
            });
            infoul.html(infoary.join(''));
        });
    });
    // $droprightlist.mouseleave(function(){
    //     $($droprightlist[0]).addClass('hover').siblings().removeClass('hover');
    // });
    
    $dropleftlist = $('.hero-raiders .bd .herolist .hero_radiers_dropdown .left li');
    $dropleftlist.mouseenter(function(){
        var index = $(this).index();
        console.log(index);
        // 当鼠标滑动到每个英雄的时候更换推荐视频和文字信息
        // 更新视频列表
        var $videolist = $('.hero-raiders .bd .hero-inbox .left li');
        var videoul = $videolist.parent();
        $videolist.remove();
        var videoary = [];
        $.each(herovideolist[index].list,function(i,item){
            videoary.push('<li> <a href="#">');
            videoary.push('<img src='+ item.imgurl + ' alt="">');
            videoary.push('<span class="play_bar">');
            videoary.push('<em class="icon-play fl">' + item.pl + '</em>');
            videoary.push('<em class="fr">' + item.date + '</em>');
            videoary.push('</span>')
            videoary.push('<span class="title">' + item.title + '</span>');
            videoary.push('<span class="video-mask">');
            videoary.push('<em class="play"></em>');
            videoary.push('</span>')
            videoary.push('</a></li>');
        });
        videoul.html(videoary.join(''));

        // 更新文本列表
        var $infolist = $('.hero-raiders .bd .hero-inbox .right li');
        var infoul = $infolist.parent();
        $infolist.remove();
        var infoary = [];
        $.each(heroinfolist[index].list,function(i,item){
            infoary.push('<li>');
            infoary.push('<em class="type">' + item.type + '</em>');
            infoary.push('<a href="#">' + item.des + '</a>');
            infoary.push('<em class="adate">' + item.adate + '</em>');
            infoary.push('</li>')
        });
        infoul.html(infoary.join(''));
    });


    
})(window);