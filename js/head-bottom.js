var basePathUrl = "http://www.gamechain.world:81";

var headerText = 
    '<nav class="navbar navbar-inverse navbar-static-top" role="navigation" id="menu">' +
          '<div class="container">' +
              '<div class="w-col"><a href="' + basePathUrl + '/index.html" ><img class="logo" src="' + basePathUrl + '/img/logo.png" height="30px"></a></div>' +

              '<div>' +
                '<ul class="nav navbar-nav" id="translation">' +
                //   '<li  id="user-login" >' +
                //       '<div class="user-icon"><i class="fa fa-user"></i></div>' +
                //       '<div class="user-info">' +
                //         '<div>&nbsp</div>' +
                //         '<div id="user_reset"></div>' + 
                //       '</div> ' +
                //   '</li>' +
                  '<li><img src="' + basePathUrl + '/img/header/001.png" id="EN"></li>' +
                  '<li><img src="' + basePathUrl + '/img/header/002.png" id="CN"></li>' +
                  '<!--<li><img src="' + basePathUrl + '/img/header/003.png" id="JA"></li>-->' +
                '</ul>' +
                '<!--<div id="google_translate_element"></div>-->' +
              '</div>' +

              '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' +
                  '<span class="sr-only">Toggle navigation</span>' +
                  '<span class="icon-bar"></span>' +
                  '<span class="icon-bar"></span>' +
                  '<span class="icon-bar"></span>' +
                '</button>' +
              '</div>' +

              '<!-- MENU LINKS -->' +
              '<div class="navbar-collapse collapse">' +
                  '<ul class="nav navbar-nav" id="navigation">' +
                    '<li class="t"><a href="' + basePathUrl + '/index.html#about" id="navigation_item1">Introduction</a></li>' +
                    '<li class=""><a href="' + basePathUrl + '/index.html#service" id="navigation_item2">Background</a></li>' +
                    '<li class=""><a href="' + basePathUrl + '/index.html#community" id="navigation_item6">Ecology</a></li>' +
                    '<li class=""><a href="' + basePathUrl + '/index.html#advance" id="navigation_item4">Advantage</a></li>' +
                    '<li class=""><a href="' + basePathUrl + '/index.html#team" id="navigation_item5">Team</a></li>' +
                    '<li class=""><a href="' + basePathUrl + '/blog/bloglist.html" id="navigation_item7">Blog</a></li>' +
                    '<li class=""><a href="' + basePathUrl + '/download/download.html" id="navigation_item9">Download</a></li>' +
                    // '<li class=""><a href="' + basePathUrl + '/reward/reward.html" id="navigation_item8">Reward</a></li>' +
                  '</ul>' +

                  '<ul class="nav navbar-nav" id="registration">' +
                    '<!--<li><a href="' + basePathUrl + '/whitelist" target="_blank" id="registration_item_menu">Join whitelist</a></li>-->' +
                    '<li><span>NOW LIVE!</span></li>' +
                  '</ul>' +          
              '</div>' +
        '</div>' +
    '</nav>';

$("body").prepend(headerText);


var bottomText =
    '<!-- CONTACT -->' +
    '<div id="contact">' +
      '<div class="container" style="width: 90vw; height: 100%;">' +
        '<div class="row" style="height: 100%;">' +
        
          '<div class="center-block" style="height: 100%;">' +
          
            '<div class="col-lg-12 col-md-12 col-xs-12 total-content">' +
                '<div class="logo">' +
                    '<a href="#top-slider" ><img src="' + basePathUrl + '/img/contact/logo.png" alt=""></a>' +
                    '<!--<a href="' + basePathUrl + '/DamnSingle-testnet/mobile.html" target="_blank"><img class="dogLogo" src="' + basePathUrl + '/img/contact/dogLogo.png" alt=""></a>-->' +
                '</div>' +

                '<div class="content">' +
                    '<div class="content-left">' +
                        '<div class="content-left-left" style=" flex: 40%;">' +
                            '<div> <a href="' + basePathUrl + '/index.html#about"  id="contact_href_item1">简介</a> </div>' +
                            '<div> <a href="' + basePathUrl + '/index.html#service" id="contact_href_item2">背景及问题</a> </div>' +
                            '<div><a href="' + basePathUrl + '/index.html#community" id="contact_href_item4">社区生态</a></div>' +
                            '<div> <a href="' + basePathUrl + '/index.html#advance" id="contact_href_item5">竞争优势</a> </div>' +                           
                        '</div>' +
                        '<div class="content-left-right" style=" flex: 60%;">' +
                            '<div> <a href="' + basePathUrl + '/index.html#team" id="contact_href_item6">团队介绍</a> </div>' +
                            '<div><a href="' + basePathUrl + '/blog/bloglist.html" id="contact_href_item7">Blog</a></div>' +
                            '<div><a href="' + basePathUrl + '/download/download.html" id="contact_href_item9">Download</a></div>' +
                            // '<div><a href="' + basePathUrl + '/reward/reward.html" id="contact_href_item8">Reward</a></div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="content-right">' +
                        '<div class="contact-we" id="contact_we">Contact Us</div>' +
                        '<div class="chat-group">' +
                            '<span id="contact_chat_group">Telegram：</span>' +
                            '<a class="contact-right-text" href="https://t.me/gamechainworld"  target="_blank">https://t.me/gamechainworld</a>' +
                        '</div>'   +
                        '<div class="contact-twitter">' +
                            '<span id="contact_twitter">Twitter：</span>' +
                            '<a class="contact-right-text" href="https://twitter.com/GameChainWorld" target="_blank">https://twitter.com/GameChainWorld</a>' +
                        '</div>' +
                        '<div class="contact-github">' +
                            '<span id="contact_github">Github：</span>' +
                            '<a class="contact-right-text" href="https://github.com/GameChainWorld" target="_blank">https://github.com/GameChainWorld</a>' +
                        '</div>' +
                        '<div class="mail-group">' +
                            '<span id="contact_mail">Email：</span>' +
                            '<a class="contact-right-text" href="mailto:info@gamechain.world" target="_blank">info@gamechain.world</a>' +
                        '</div>' +
                    '</div>' +       
                '</div>' +

                '<div class="qr-code">' +
                    '<!--<div class="broadcast">' +
                        '<img src="' + basePathUrl + '/img/contact/broadcast.png" />' +
                        '<div id="broadcast_group">Broadcast Group</div>' +
                    '</div>-->' +
                    '<div class="chat" >' +
                        '<img src="' + basePathUrl + '/img/contact/chat.png" />' +
                        '<div id="chat_group">Chat Group</div>' +
                    '</div>' +         
                '</div>' +       
            '</div>' +
          
          '</div>' +
          
        '</div>' +
      '</div>' +
    '</div>' +
    '<!-- CONTACT END -->';

    $("body").append(bottomText);


    /**语言包  cn: 中文包；en：英文包；ja：日文包*/
    var cn = {
        //index.html
        navigation_item1: '简介',
        navigation_item2: '背景及问题',
        navigation_item3: '解决方案',
        navigation_item4: '竞争优势',
        navigation_item5: '团队介绍',
        navigation_item6: '社区生态',
        navigation_item7: '博客',
        navigation_item9: '下载',
        navigation_item8: '悬赏任务',
        registration_item: '加入白名单',

        //#contact
        contact_we: '联系我们',
        contact_broadcast_group: '公告地址：',
        contact_chat_group: '聊天群地址：',
        contact_mail: '邮箱地址：',
        broadcast_group: '广播群',
        chat_group: '聊天群',
    }

    //-----------------------------------------英文版
    var en = {
        //index.html
        navigation_item1: 'Introduction',
        navigation_item2: 'Background',
        navigation_item3: 'Solution',
        navigation_item4: 'Advantage',
        navigation_item5: 'Team',
        navigation_item6: 'Ecology',
        navigation_item7: 'Blog',
        navigation_item9: 'Download',
        navigation_item8: 'Reward',
        registration_item: 'Join whitelist',

        //#contact
        contact_we: 'Contact Us',
        contact_broadcast_group: 'Notice Address：',
        contact_chat_group: 'Chat Address：',
        contact_mail: 'E-mail：',
        broadcast_group: 'Broadcast Group',
        chat_group: 'Chat Group',
    }


    /*----------------------------------------------------*/
    /*	Sticky Nav
    /*----------------------------------------------------*/
    $(window).load(function(){
        $("#menu").sticky({ topSpacing: 0 });
    });

    //切换语言版本
    var language = localStorage.getItem("language", language);
    if(language == "null" || language == null){
        language = "en";
        localStorage.setItem("language", language);
    }
    $("#CN").click(function(){
        language = "cn";
        localStorage.setItem("language", language);
        window.location.reload();
    })
    $("#EN").click(function(){
        language = "en";
        localStorage.setItem("language", language);
        window.location.reload();
    })
    $("#JA").click(function(){
        language = "ja";
        localStorage.setItem("language", language);
        window.location.reload();
    })

    //调用翻译的内容
    translation();

    //计算三个国旗的宽度
    var transWidth = $(window).width()-175-60;
    if($(window).width() < 1051){
        $("#translation").css("width",  transWidth);
    }else{
        $("#translation").css("width",  "initial");
    }

    //根据不同语音版本和屏宽修改标签元素
    $(function(){
        var language = localStorage.getItem("language");        
        if(language == "en"){
            $(" body.body").removeClass();
            $(" body").addClass("body_en");
        
        }else if(language == "ja"){          

        }else{
            $(" body.body_en").removeClass();
            $(" body").addClass("body");
        }
    })

    $(window).resize(function(){
        var transWidth = $(window).width()-175-60;
        if($(window).width() < 1051){
            $("#translation").css("width",  transWidth);
        }else{
            $("#translation").css("width",  "initial");
        }

        var language = localStorage.getItem("language");
        if(language == "en"){
            
        }else if(language == "ja"){
      
        }
    })


    //翻译的内容
    function translation(){
        var language = localStorage.getItem("language");
        if(language == "cn"){
            console.log("cn1")
            //#menu
            $("#navigation_item1").html(cn.navigation_item1);
            $("#navigation_item2").html(cn.navigation_item2);
            $("#navigation_item3").html(cn.navigation_item3);
            $("#navigation_item4").html(cn.navigation_item4);
            $("#navigation_item5").html(cn.navigation_item5);
            $("#navigation_item6").html(cn.navigation_item6);
            $("#navigation_item7").html(cn.navigation_item7);
            $("#navigation_item8").html(cn.navigation_item8);
            $("#navigation_item9").html(cn.navigation_item9);
            $("#registration_item_menu").html(cn.registration_item);
            $("#registration_item").html(cn.registration_item);
            $("#registration_other_item").html(cn.registration_item);

            //contact_we 
            $("#contact_href_item1").html(cn.navigation_item1);
            $("#contact_href_item2").html(cn.navigation_item2);
            $("#contact_href_item3").html(cn.navigation_item3);
            $("#contact_href_item4").html(cn.navigation_item6);
            $("#contact_href_item5").html(cn.navigation_item4);
            $("#contact_href_item6").html(cn.navigation_item5);
            $("#contact_href_item7").html(cn.navigation_item7);
            $("#contact_href_item8").html(cn.navigation_item8);
            $("#contact_href_item9").html(cn.navigation_item9);
            $("#contact_we").html(cn.contact_we);
            $("#contact_broadcast_group").html(cn.contact_broadcast_group);
            // $("#contact_chat_group").html(cn.contact_chat_group);
            // $("#contact_mail").html(cn.contact_mail);
            $("#broadcast_group").html(cn.broadcast_group);
            $("#chat_group").html(cn.chat_group); 

            $("#user_reset").html("注销");          

        }else if(language == "en"){
            console.log("en")
            //#menu
            $("#navigation_item1").html(en.navigation_item1);
            $("#navigation_item2").html(en.navigation_item2);
            $("#navigation_item3").html(en.navigation_item3);
            $("#navigation_item4").html(en.navigation_item4);
            $("#navigation_item5").html(en.navigation_item5);
            $("#navigation_item6").html(en.navigation_item6);
            $("#navigation_item7").html(en.navigation_item7);
            $("#navigation_item8").html(en.navigation_item8);
            $("#navigation_item9").html(en.navigation_item9);
            $("#registration_item_menu").html(en.registration_item.toUpperCase());
            $("#registration_item").html(en.registration_item.toUpperCase());
            $("#registration_other_item").html(en.registration_item.toUpperCase());
            
            //contact_we 
            $("#contact_href_item1").html(en.navigation_item1);
            $("#contact_href_item2").html(en.navigation_item2);
            $("#contact_href_item3").html(en.navigation_item3);
            $("#contact_href_item4").html(en.navigation_item6);
            $("#contact_href_item5").html(en.navigation_item4);
            $("#contact_href_item6").html(en.navigation_item5);
            $("#contact_href_item7").html(en.navigation_item7);
            $("#contact_href_item8").html(en.navigation_item8);
            $("#contact_href_item9").html(en.navigation_item9);
            $("#contact_we").html(en.contact_we);
            $("#contact_broadcast_group").html(en.contact_broadcast_group);
            // $("#contact_chat_group").html(en.contact_chat_group);
            // $("#contact_mail").html(en.contact_mail);
            $("#broadcast_group").html(en.broadcast_group);
            $("#chat_group").html(en.chat_group);

            $("#user_reset").html("Log out"); 
            
        }else if(language == "ja"){
            console.log("ja")
            //#menu
            $("#navigation_item1").html(ja.navigation_item1);
            $("#navigation_item2").html(ja.navigation_item2);
            $("#navigation_item3").html(ja.navigation_item3);
            $("#navigation_item4").html(ja.navigation_item4);
            $("#navigation_item5").html(ja.navigation_item5);
            $("#navigation_item6").html(ja.navigation_item6);
            $("#navigation_item7").html(ja.navigation_item7);
            $("#navigation_item8").html(ja.navigation_item8);
            $("#navigation_item9").html(ja.navigation_item9);
            $("#registration_item_menu").html(ja.registration_item);
            $("#registration_item").html(ja.registration_item);
            $("#registration_other_item").html(ja.registration_item);
            //contact_we 
            $("#contact_href_item1").html(ja.navigation_item1);
            $("#contact_href_item2").html(ja.navigation_item2);
            $("#contact_href_item3").html(ja.navigation_item3);
            $("#contact_href_item4").html(ja.navigation_item6);
            $("#contact_href_item5").html(ja.navigation_item4);
            $("#contact_href_item6").html(ja.navigation_item5);
            $("#contact_href_item7").html(ja.navigation_item7);
            $("#contact_href_item8").html(ja.navigation_item8);
            $("#contact_href_item9").html(ja.navigation_item9);
            $("#contact_we").html(ja.contact_we);
            $("#contact_broadcast_group").html(ja.contact_broadcast_group);
            // $("#contact_chat_group").html(ja.contact_chat_group);
            // $("#contact_mail").html(ja.contact_mail);
            $("#broadcast_group").html(ja.broadcast_group);
            $("#chat_group").html(ja.chat_group);

            $("#user_reset").html("注销"); 
            
        }else{
            console.log("en2")
            //#menu
            $("#navigation_item1").html(en.navigation_item1);
            $("#navigation_item2").html(en.navigation_item2);
            $("#navigation_item3").html(en.navigation_item3);
            $("#navigation_item4").html(en.navigation_item4);
            $("#navigation_item5").html(en.navigation_item5);
            $("#navigation_item6").html(en.navigation_item6);
            $("#navigation_item7").html(en.navigation_item7);
            $("#navigation_item8").html(en.navigation_item8);
            $("#navigation_item9").html(en.navigation_item9);
            $("#registration_item_menu").html(en.registration_item.toUpperCase());
            $("#registration_item").html(en.registration_item.toUpperCase());
            $("#registration_other_item").html(en.registration_item.toUpperCase());
            //contact_we 
            $("#contact_href_item1").html(en.navigation_item1);
            $("#contact_href_item2").html(en.navigation_item2);
            $("#contact_href_item3").html(en.navigation_item3);
            $("#contact_href_item4").html(en.navigation_item6);
            $("#contact_href_item5").html(en.navigation_item4);
            $("#contact_href_item6").html(en.navigation_item5);
            $("#contact_href_item7").html(en.navigation_item7);
            $("#contact_href_item8").html(en.navigation_item8);
            $("#contact_href_item9").html(en.navigation_item9);
            $("#contact_we").html(en.contact_we);
            $("#contact_broadcast_group").html(en.contact_broadcast_group);
            // $("#contact_chat_group").html(en.contact_chat_group);
            // $("#contact_mail").html(en.contact_mail);
            $("#broadcast_group").html(en.broadcast_group);
            $("#chat_group").html(en.chat_group);

            $("#user_reset").html("Log out"); 
            
        }
    }



