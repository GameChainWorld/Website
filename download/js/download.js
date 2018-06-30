
$(function(){
    
    //众筹时间倒计时
    var leftTimer = function(year, month, day, hour, minute, second){
        var leftTime = (new Date(year, month-1, day, hour, minute, second)) - (new Date());//计算剩余毫秒数
        var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余天数
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余小时数
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩分钟数
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余秒数

        days = checkTime(days).toString();
        hours = checkTime(hours).toString();
        minutes = checkTime(minutes).toString();
        seconds = checkTime(seconds).toString();

        $(".countdown-container .countdown-time .day div").eq(0).html(days.charAt(0));
        $(".countdown-container .countdown-time .day div").eq(1).html(days.charAt(1));
        $(".countdown-container .countdown-time .hour div").eq(0).html(hours.charAt(0));
        $(".countdown-container .countdown-time .hour div").eq(1).html(hours.charAt(1));
        $(".countdown-container .countdown-time .minute div").eq(0).html(minutes.charAt(0));
        $(".countdown-container .countdown-time .minute div").eq(1).html(minutes.charAt(1));
        $(".countdown-container .countdown-time .second div").eq(0).html(seconds.charAt(0));
        $(".countdown-container .countdown-time .second div").eq(1).html(seconds.charAt(1));
    }
    var checkTime = function(i){
        if(i < 10){
            i = "0" + i;
        }
        return i;
    }
    
    //众筹时间倒计时
    var startTime = (new Date(2018, 5-1, 18, 11, 0, 0)) - (new Date());
    var endTime = (new Date(2018, 6-1, 4, 11, 0, 0)) - (new Date());
    if(startTime < 0 && endTime > 0){
        $(".countdown-container").css("display", "flex");
        setInterval("leftTimer(2018, 6, 4, 11, 0, 0)", 1000);
        if(language == "cn"){
            $("#countdown-time-text").html("距离GameChain原型展示版本上线还有");
        }else{
            $("#countdown-time-text").html("GameChain prototype display version will go live in :");
        }
        $(".countdown-container .countdown-time-endTime p").html("2018.6.4&nbsp&nbsp&nbsp11:00");
    }else{
        //原型版本
        $(".version-container").show();
        showProtoVer();
    }

    //原型版本
    function showProtoVer(){
        if(language == "cn"){
            $("#button-version div").html("原型展示版");
            $("#version-content-text").html("原型展示版本仅供展示预览，非正式上线版本。");
            $("#version-content-title").html("Gamechain原型版本下载");
            $("#button-version").attr("href", "../gamefund_prototype_cn.apk");
        }else{
            $("#button-version div").html("Prototype display<br/> version");
            $("#version-content-text").html("Prototype display version is not a formal online live version, just for display and preview.");
            $("#version-content-title").html("Gamechain Prototype Version Download");

            $(".version-container .version-content .button-version>div").addClass("en-version").css({"line-height": "120%"});
            $(".version-container .version-content .version-content-text").addClass("en-version");
            $("#button-version").attr("href", "../gamefund_prototype_en.apk");
        }
    }

    //点击博客模块跳转
    $(".second-body .news-content-body1-img").click(function(){
        window.open("https://bcreator.io/");
    });
    $(".second-body .news-text-content2").click(function(){
        window.open("https://bcreator.io/");
    });
    
    //调用翻译的内容
    translation();

    //翻译的内容
    //  var translation = function(){
    function translation(){
        var language = localStorage.getItem("language");
        if(language == "cn"){
            console.log("cn1")
            $("html").attr("lang", "zh-cmn-Hans");
            //news_content
            $("#news_content_item7").html("2018-03-27-BY GameChain TEAM");
            $("#news_content_item8").html("BCreator.io引擎的Alpha测试版本可以在我们的网站上下载。欢迎加入我们来体验！");
            $("#news_content_item9").html("BCreator.io引擎的Alpha测试版本可以在我们的网站上下载。欢迎加入我们来体验！");

        }else if(language == "en"){
            console.log("en")
            $("html").attr("lang", "en");
            //news_content
            $("#news_content_item7").html("2018-03-27-BY GameChain TEAM");
            $("#news_content_item8").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
            $("#news_content_item9").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");

        }else if(language == "ja"){
            console.log("ja")
            $("html").attr("lang", "ja");
            //news_content
            $("#news_content_item7").html("2018-03-27-BY GameChain TEAM");
            $("#news_content_item8").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
            $("#news_content_item9").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");

        }else{
            console.log("en2")
            $("html").attr("lang", "en");
            //news_content
            $("#news_content_item7").html("2018-03-27-BY GameChain TEAM");
            $("#news_content_item8").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
            $("#news_content_item9").html("An alpha-test version of our engine tool BCreator.io is available to download on our website. Welcome to join us and experience it!");
        }
    }
});