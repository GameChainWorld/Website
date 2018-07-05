
$(document).ready(function() {

    var language = localStorage.getItem("language", language);

    //调用翻译的内容
    translation();

    //给dAPP添加链接
    $("#team .team-support-content .team-support-item1 a").attr({"href": "http://ndapp.org", "target": "_blank"});


    /*----------------------------------------------------*/
    /*	Sequence Slider
    /*----------------------------------------------------*/
        
    $(function(){
        var options = {
            nextButton: true,
            prevButton: true,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 3000,
            preloader: true,
            preloadTheseFrames: [1],
        };
        
        var mySequence = $("#sequence").sequence(options).data("sequence");
    });

    /*----------------------------------------------------*/
    /*	Portfolio Hover Overlay
    /*----------------------------------------------------*/

    $('.overlay').hover(
            function(){
                $(this).find('.caption').fadeIn(550); 
            },
            function(){
                $(this).find('.caption').fadeOut(550); 
            }
    ); 

    /*----------------------------------------------------*/
    /*	Back to the Top Button
    /*----------------------------------------------------*/

    $(function(){
        $(window).scroll(function() { 
            if ($(this).scrollTop() > 1200) {
                $("#top-bt:hidden").css('visibility','visible');   
                $("#top-bt:hidden").fadeIn('550');  
            } 
            else {     
                $("#top-bt:visible").fadeOut("550"); 
            }  
        });
    });

    //根据不同语音版本和屏宽修改标签元素
    $(function(){
        var language = localStorage.getItem("language");        
        if(language == "en"){
            // $("#industry-status .container .prominent-characteristic").css("margin-top", "5vw");
            $("#industry-status .container .special-info div span").css("line-height", "20px");
            $("#industry-status .industry-status-intro").css("top", "12%");    

        }else if(language == "ja"){          

            $("#industry-status .industry-status-intro").css("top", "12%");     
            $("#sequence_item2_fourth").css({"position": "absolute"});
        }
    })


    //添加上普通成员
    for(var i in bigTeam){
        var currName =  localStorage.getItem("language")=="cn" ? bigTeam[i].cnName : bigTeam[i].enName;
        var currWork =  localStorage.getItem("language")=="cn" ? bigTeam[i].cnwork : bigTeam[i].enwork;
        $("#bigTeam").append(
            '<div class="big-team-item">' +   
                '<p class="name" id="team_name_item201">' + currName + '</p>' + 
                '<p class="name" id="team_work_item201">' + currWork + '</p>' +  
                '<a class="team-item-img-linkedin" href="' + bigTeam[i].linkedin + '"><i class="fa fa-linkedin"></i></a>' + 
            '</div>'
        )
    }
    
    //翻译的内容
    //  var translation = function(){
    function translation(){
        var language = localStorage.getItem("language");
        if(language == "cn"){
            console.log("cn1")
            $("html").attr("lang", "zh-cmn-Hans");
            //#top-slider
            $("#sequence_item1").html(cn.sequence_item1);
            $("#sequence_item2_fourth").html(cn.sequence_item2_fourth);

            $("#sequence_other_item1").html(cn.sequence_item1);
            $("#sequence_other_item2_fourth").html(cn.sequence_item2_fourth);
            //#industry_status
            $("#industry_status_feature").html(cn.industry_status_feature);
            $("#industry_status_item1").html(cn.industry_status_item1);
            $("#industry_status_item2").html(cn.industry_status_item2);
            $("#industry_status_item3").html(cn.industry_status_item3);
            $("#industry_status_item4").html(cn.industry_status_item4);
            // $("#industry_status_item5").html(cn.industry_status_item5);

            $("#industry_status_feature1").html(cn.industry_status_feature1);
            $("#industry_status_feature2").html(cn.industry_status_feature2);
            $("#industry_status_feature3").html(cn.industry_status_feature3);
            $("#industry_status_feature4").html(cn.industry_status_feature4);
            $("#industry_status_feature5").html(cn.industry_status_feature5);
            //#service
            $("#service_title1").html(cn.service_title1);
            $("#service_title2").html(cn.service_title2);
            $("#service_title_item1").html(cn.service_title_item1);
            $("#service_text_item1").html(cn.service_text_item1);
            $("#service_title_item2").html(cn.service_title_item2);
            $("#service_text_item2").html(cn.service_text_item2);
            $("#service_title_item3").html(cn.service_title_item3);
            $("#service_text_item3").html(cn.service_text_item3);
            //#portfolio
            $("#portfolio_title1").html(cn.portfolio_title1);
            $("#portfolio_title2").html(cn.portfolio_title2);
            $("#portfolio_title_item1").html(cn.portfolio_title_item1);
            $("#portfolio_title_item2").html(cn.portfolio_title_item2);
            $("#portfolio_title_item3").html(cn.portfolio_title_item3);
            $("#portfolio_title_item4").html(cn.portfolio_title_item4);
            $("#portfolio_title_item5").html(cn.portfolio_title_item5);

            $("#Grid_title_item1").html(cn.Grid_title_item1);
            $("#Grid_text_item1").html(cn.Grid_text_item1);
            $("#Grid_title_item2").html(cn.Grid_title_item2);
            $("#Grid_text_item2").html(cn.Grid_text_item2);
            $("#Grid_title_item3").html(cn.Grid_title_item3);
            $("#Grid_text_item3").html(cn.Grid_text_item3);
            $("#Grid_title_item4").html(cn.Grid_title_item4);
            $("#Grid_text_item4").html(cn.Grid_text_item4);

            $("#Grid_title_item5").html(cn.Grid_title_item5);
            $("#Grid_text_item5").html(cn.Grid_text_item5);
            $("#Grid_title_item6").html(cn.Grid_title_item6);
            $("#Grid_text_item6").html(cn.Grid_text_item6);
            $("#Grid_title_item7").html(cn.Grid_title_item7);
            $("#Grid_text_item7").html(cn.Grid_text_item7);
            $("#Grid_title_item8").html(cn.Grid_title_item8);
            $("#Grid_text_item8").html(cn.Grid_text_item8);

            $("#Grid_title_item9").html(cn.Grid_title_item9);
            $("#Grid_text_item9").html(cn.Grid_text_item9);
            $("#Grid_title_item10").html(cn.Grid_title_item10);
            $("#Grid_text_item10").html(cn.Grid_text_item10);
            $("#Grid_title_item11").html(cn.Grid_title_item11);
            $("#Grid_text_item11").html(cn.Grid_text_item11);
            $("#Grid_title_item12").html(cn.Grid_title_item12);
            $("#Grid_text_item12").html(cn.Grid_text_item12);
            //#competitive
            $("#competitive_title1").html(cn.competitive_title1);
            $("#competitive_title2").html(cn.competitive_title2);

            $("#competitive_title_item1").html(cn.competitive_title_item1);
            $("#competitive_text_item1").html(cn.competitive_text_item1);
            $("#competitive_title_item2").html(cn.competitive_title_item2);
            $("#competitive_text_item2").html(cn.competitive_text_item2);
            $("#competitive_title_item3").html(cn.competitive_title_item3);
            $("#competitive_text_item3").html(cn.competitive_text_item3);
            $("#competitive_title_item4").html(cn.competitive_title_item4);
            $("#competitive_text_item4").html(cn.competitive_text_item4);
            $("#competitive_title_item5").html(cn.competitive_title_item5);
            $("#competitive_text_item5").html(cn.competitive_text_item5);
            $("#competitive_title_item6").html(cn.competitive_title_item6);
            $("#competitive_text_item6").html(cn.competitive_text_item6);

            $("#competitive_other_title_item1").html(cn.competitive_title_item1);
            $("#competitive_other_text_item1").html(cn.competitive_text_item1);
            $("#competitive_other_title_item2").html(cn.competitive_title_item2);
            $("#competitive_other_text_item2").html(cn.competitive_text_item2);
            $("#competitive_other_title_item3").html(cn.competitive_title_item3);
            $("#competitive_other_text_item3").html(cn.competitive_text_item3);
            $("#competitive_other_title_item4").html(cn.competitive_title_item4);
            $("#competitive_other_text_item4").html(cn.competitive_text_item4);
            $("#competitive_other_title_item5").html(cn.competitive_title_item5);
            $("#competitive_other_text_item5").html(cn.competitive_text_item5);
            $("#competitive_other_title_item6").html(cn.competitive_title_item6);
            $("#competitive_other_text_item6").html(cn.competitive_text_item6);
            //price_title
            $("#price_title1").html(cn.price_title1);
            $("#price_title2").html(cn.price_title2);

            $("#price_item1").html(cn.price_item1);
            $("#price_item2").html(cn.price_item2);
            $("#price_item3").html(cn.price_item3);
            $("#price_item4").html(cn.price_item4);
            $("#price_item5").html(cn.price_item5);
            $("#price_item6").html(cn.price_item6);
            $("#price_item7").html(cn.price_item7);
            $("#price_item8").html(cn.price_item8);
            $("#price_item9").html(cn.price_item9);
            $("#price_item10").html(cn.price_item10);
            $("#price_item11").html(cn.price_item11);
            $("#price_item12").html(cn.price_item12);  
            //team_title
            $("#team_title").html(cn.team_title);
            $("#team_title_intro").html(cn.team_title_intro);
            $("#team-creative-title").html(cn.team_title1);
            $("#team-consultant-title").html(cn.team_title2);
            $("#team-investment-title").html(cn.team_title3);
            $("#team-cooperate-title").html(cn.team_title4);
            $("#team-members-title").html(cn.team_title5);
            
            var teamArr = ["01", "02", "03", "04", "05", "11", "12", "13", "14"]
            for(var i in teamArr){
                $("#team_name_item" + teamArr[i]).html(eval("cn.team_name_item" + teamArr[i]));
                $("#team_work_item" + teamArr[i]).html(eval("cn.team_work_item" + teamArr[i]));
                $("#team_text_item" + teamArr[i]).html(eval("cn.team_text_item" + teamArr[i]));
            }

            $("#team_support_item1").html(cn.team_support_item1);
            $("#team_support_item2").html(cn.team_support_item2);
            $("#team_support_item3").html(cn.team_support_item3);
            //comunity
            $("#community_title1").html(cn.community_title1);
            $("#community_title2").html(cn.community_title2);
            $("#community_img_title").html(cn.community_img_title);
            $("#community_title_item1").html(cn.community_title_item1);
            $("#community_text_item1").html(cn.community_text_item1);
            $("#community_title_item2").html(cn.community_title_item2);
            $("#community_text_item2").html(cn.community_text_item2);
            $("#community_title_item3").html(cn.community_title_item3);
            $("#community_text_item3").html(cn.community_text_item3);
            $("#community_title_item4").html(cn.community_title_item4);
            $("#community_text_item4").html(cn.community_text_item4);
            $("#community_title_item5").html(cn.community_title_item5);
            $("#community_text_item5").html(cn.community_text_item5);
            
            $("#total_content_item1").html(cn.total_content_item1);
            $("#total_content_item2").html(cn.total_content_item2);
            $("#total_content_item3").html(cn.total_content_item3);

            $("#community_video_title").html(cn.community_video_title);
            $("#video_tag_tip").html(cn.video_tag_tip);
            $("#community_video_text1").html(cn.community_video_text1);
            $("#community_video_text2").html(cn.community_video_text2);

        }else if(language == "en"){
            console.log("en")
            $("html").attr("lang", "en");
            //#top-slider
            $("#sequence_item1").html(en.sequence_item1);
            $("#sequence_item2_fourth").html(en.sequence_item2_fourth);

            $("#sequence_other_item1").html(en.sequence_item1);
            $("#sequence_other_item2_fourth").html(en.sequence_item2_fourth);
            //#industry_status
            $("#industry_status_feature").html(en.industry_status_feature);
            $("#industry_status_item1").html(en.industry_status_item1);
            $("#industry_status_item2").html(en.industry_status_item2);
            $("#industry_status_item3").html(en.industry_status_item3);
            $("#industry_status_item4").html(en.industry_status_item4);
            // $("#industry_status_item5").html(en.industry_status_item5);

            $("#industry_status_feature1").html(en.industry_status_feature1.toUpperCase());
            $("#industry_status_feature2").html(en.industry_status_feature2.toUpperCase());
            $("#industry_status_feature3").html(en.industry_status_feature3.toUpperCase());
            $("#industry_status_feature4").html(en.industry_status_feature4.toUpperCase());
            $("#industry_status_feature5").html(en.industry_status_feature5.toUpperCase());
            //#service
            $("#service_title1").html(en.service_title1);
            $("#service_title2").html(en.service_title2);
            $("#service_title_item1").html(en.service_title_item1);
            $("#service_text_item1").html(en.service_text_item1);
            $("#service_title_item2").html(en.service_title_item2);
            $("#service_text_item2").html(en.service_text_item2);
            $("#service_title_item3").html(en.service_title_item3);
            $("#service_text_item3").html(en.service_text_item3);
            //#portfolio
            $("#portfolio_title1").html(en.portfolio_title1);
            $("#portfolio_title2").html(en.portfolio_title2);
            $("#portfolio_title_item1").html(en.portfolio_title_item1);
            $("#portfolio_title_item2").html(en.portfolio_title_item2);
            $("#portfolio_title_item3").html(en.portfolio_title_item3);
            $("#portfolio_title_item4").html(en.portfolio_title_item4);
            $("#portfolio_title_item5").html(en.portfolio_title_item5);

            $("#Grid_title_item1").html(en.Grid_title_item1);
            $("#Grid_text_item1").html(en.Grid_text_item1);
            $("#Grid_title_item2").html(en.Grid_title_item2);
            $("#Grid_text_item2").html(en.Grid_text_item2);
            $("#Grid_title_item3").html(en.Grid_title_item3);
            $("#Grid_text_item3").html(en.Grid_text_item3);
            $("#Grid_title_item4").html(en.Grid_title_item4);
            $("#Grid_text_item4").html(en.Grid_text_item4);

            $("#Grid_title_item5").html(en.Grid_title_item5);
            $("#Grid_text_item5").html(en.Grid_text_item5);
            $("#Grid_title_item6").html(en.Grid_title_item6);
            $("#Grid_text_item6").html(en.Grid_text_item6);
            $("#Grid_title_item7").html(en.Grid_title_item7);
            $("#Grid_text_item7").html(en.Grid_text_item7);
            $("#Grid_title_item8").html(en.Grid_title_item8);
            $("#Grid_text_item8").html(en.Grid_text_item8);

            $("#Grid_title_item9").html(en.Grid_title_item9);
            $("#Grid_text_item9").html(en.Grid_text_item9);
            $("#Grid_title_item10").html(en.Grid_title_item10);
            $("#Grid_text_item10").html(en.Grid_text_item10);
            $("#Grid_title_item11").html(en.Grid_title_item11);
            $("#Grid_text_item11").html(en.Grid_text_item11);
            $("#Grid_title_item12").html(en.Grid_title_item12);
            $("#Grid_text_item12").html(en.Grid_text_item12);
            //#competitive
            $("#competitive_title1").html(en.competitive_title1);
            $("#competitive_title2").html(en.competitive_title2);

            $("#competitive_title_item1").html(en.competitive_title_item1);
            $("#competitive_text_item1").html(en.competitive_text_item1);
            $("#competitive_title_item2").html(en.competitive_title_item2);
            $("#competitive_text_item2").html(en.competitive_text_item2);
            $("#competitive_title_item3").html(en.competitive_title_item3);
            $("#competitive_text_item3").html(en.competitive_text_item3);
            $("#competitive_title_item4").html(en.competitive_title_item4);
            $("#competitive_text_item4").html(en.competitive_text_item4);
            $("#competitive_title_item5").html(en.competitive_title_item5);
            $("#competitive_text_item5").html(en.competitive_text_item5);
            $("#competitive_title_item6").html(en.competitive_title_item6);
            $("#competitive_text_item6").html(en.competitive_text_item6);

            $("#competitive_other_title_item1").html(en.competitive_title_item1);
            $("#competitive_other_text_item1").html(en.competitive_text_item1);
            $("#competitive_other_title_item2").html(en.competitive_title_item2);
            $("#competitive_other_text_item2").html(en.competitive_text_item2);
            $("#competitive_other_title_item3").html(en.competitive_title_item3);
            $("#competitive_other_text_item3").html(en.competitive_text_item3);
            $("#competitive_other_title_item4").html(en.competitive_title_item4);
            $("#competitive_other_text_item4").html(en.competitive_text_item4);
            $("#competitive_other_title_item5").html(en.competitive_title_item5);
            $("#competitive_other_text_item5").html(en.competitive_text_item5);
            $("#competitive_other_title_item6").html(en.competitive_title_item6);
            $("#competitive_other_text_item6").html(en.competitive_text_item6);
            //price_title
            $("#price_title1").html(en.price_title1);
            $("#price_title2").html(en.price_title2);

            $("#price_item1").html(en.price_item1);
            $("#price_item2").html(en.price_item2);
            $("#price_item3").html(en.price_item3);
            $("#price_item4").html(en.price_item4);
            $("#price_item5").html(en.price_item5);
            $("#price_item6").html(en.price_item6);
            $("#price_item7").html(en.price_item7);
            $("#price_item8").html(en.price_item8);
            $("#price_item9").html(en.price_item9);
            $("#price_item10").html(en.price_item10);
            $("#price_item11").html(en.price_item11);
            $("#price_item12").html(en.price_item12);  
            //team_title
            $("#team_title").html(en.team_title);
            $("#team_title_intro").html(en.team_title_intro);
            $("#team-creative-title").html(en.team_title1.toUpperCase());
            $("#team-consultant-title").html(en.team_title2.toUpperCase());
            $("#team-investment-title").html(en.team_title3.toUpperCase());
            $("#team-cooperate-title").html(en.team_title4.toUpperCase());
            $("#team-members-title").html(en.team_title5.toUpperCase());
            
            var teamArr = ["01", "02", "03", "04", "05", "11", "12", "13", "14"]
            for(var i in teamArr){
                $("#team_name_item" + teamArr[i]).html(eval("en.team_name_item" + teamArr[i]));
                $("#team_work_item" + teamArr[i]).html(eval("en.team_work_item" + teamArr[i]));
                $("#team_text_item" + teamArr[i]).html(eval("en.team_text_item" + teamArr[i]));
            }

            $("#team_support_item1").html(en.team_support_item1);
            $("#team_support_item2").html(en.team_support_item2);
            $("#team_support_item3").html(en.team_support_item3);
            //comunity
            $("#community_title1").html(en.community_title1);
            $("#community_title2").html(en.community_title2);
            $("#community_img_title").html(en.community_img_title.toUpperCase());
            $("#community_title_item1").html(en.community_title_item1);
            $("#community_text_item1").html(en.community_text_item1);
            $("#community_title_item2").html(en.community_title_item2);
            $("#community_text_item2").html(en.community_text_item2);
            $("#community_title_item3").html(en.community_title_item3);
            $("#community_text_item3").html(en.community_text_item3);
            $("#community_title_item4").html(en.community_title_item4);
            $("#community_text_item4").html(en.community_text_item4);
            $("#community_title_item5").html(en.community_title_item5);
            $("#community_text_item5").html(en.community_text_item5);
            
            $("#total_content_item1").html(en.total_content_item1);
            $("#total_content_item2").html(en.total_content_item2);
            $("#total_content_item3").html(en.total_content_item3);

            $("#community_video_title").html(en.community_video_title.toUpperCase());
            $("#video_tag_tip").html(en.video_tag_tip);
            $("#community_video_text1").html(en.community_video_text1);
            $("#community_video_text2").html(en.community_video_text2);

        }else{
            console.log("en2")
            $("html").attr("lang", "en");
            //#top-slider
            $("#sequence_item1").html(en.sequence_item1);
            $("#sequence_item2_fourth").html(en.sequence_item2_fourth);
            
            $("#sequence_other_item1").html(en.sequence_item1);
            $("#sequence_other_item2_fourth").html(en.sequence_item2_fourth);
            //#industry_status
            $("#industry_status_feature").html(en.industry_status_feature);
            $("#industry_status_item1").html(en.industry_status_item1);
            $("#industry_status_item2").html(en.industry_status_item2);
            $("#industry_status_item3").html(en.industry_status_item3);
            $("#industry_status_item4").html(en.industry_status_item4);
            // $("#industry_status_item5").html(en.industry_status_item5);

            $("#industry_status_feature1").html(en.industry_status_feature1.toUpperCase());
            $("#industry_status_feature2").html(en.industry_status_feature2.toUpperCase());
            $("#industry_status_feature3").html(en.industry_status_feature3.toUpperCase());
            $("#industry_status_feature4").html(en.industry_status_feature4.toUpperCase());
            $("#industry_status_feature5").html(en.industry_status_feature5.toUpperCase());
            //#service
            $("#service_title1").html(en.service_title1);
            $("#service_title2").html(en.service_title2);
            $("#service_title_item1").html(en.service_title_item1);
            $("#service_text_item1").html(en.service_text_item1);
            $("#service_title_item2").html(en.service_title_item2);
            $("#service_text_item2").html(en.service_text_item2);
            $("#service_title_item3").html(en.service_title_item3);
            $("#service_text_item3").html(en.service_text_item3);
            //#portfolio
            $("#portfolio_title1").html(en.portfolio_title1);
            $("#portfolio_title2").html(en.portfolio_title2);
            $("#portfolio_title_item1").html(en.portfolio_title_item1);
            $("#portfolio_title_item2").html(en.portfolio_title_item2);
            $("#portfolio_title_item3").html(en.portfolio_title_item3);
            $("#portfolio_title_item4").html(en.portfolio_title_item4);
            $("#portfolio_title_item5").html(en.portfolio_title_item5);

            $("#Grid_title_item1").html(en.Grid_title_item1);
            $("#Grid_text_item1").html(en.Grid_text_item1);
            $("#Grid_title_item2").html(en.Grid_title_item2);
            $("#Grid_text_item2").html(en.Grid_text_item2);
            $("#Grid_title_item3").html(en.Grid_title_item3);
            $("#Grid_text_item3").html(en.Grid_text_item3);
            $("#Grid_title_item4").html(en.Grid_title_item4);
            $("#Grid_text_item4").html(en.Grid_text_item4);

            $("#Grid_title_item5").html(en.Grid_title_item5);
            $("#Grid_text_item5").html(en.Grid_text_item5);
            $("#Grid_title_item6").html(en.Grid_title_item6);
            $("#Grid_text_item6").html(en.Grid_text_item6);
            $("#Grid_title_item7").html(en.Grid_title_item7);
            $("#Grid_text_item7").html(en.Grid_text_item7);
            $("#Grid_title_item8").html(en.Grid_title_item8);
            $("#Grid_text_item8").html(en.Grid_text_item8);

            $("#Grid_title_item9").html(en.Grid_title_item9);
            $("#Grid_text_item9").html(en.Grid_text_item9);
            $("#Grid_title_item10").html(en.Grid_title_item10);
            $("#Grid_text_item10").html(en.Grid_text_item10);
            $("#Grid_title_item11").html(en.Grid_title_item11);
            $("#Grid_text_item11").html(en.Grid_text_item11);
            $("#Grid_title_item12").html(en.Grid_title_item12);
            $("#Grid_text_item12").html(en.Grid_text_item12);
            //#competitive
            $("#competitive_title1").html(en.competitive_title1);
            $("#competitive_title2").html(en.competitive_title2);

            $("#competitive_title_item1").html(en.competitive_title_item1);
            $("#competitive_text_item1").html(en.competitive_text_item1);
            $("#competitive_title_item2").html(en.competitive_title_item2);
            $("#competitive_text_item2").html(en.competitive_text_item2);
            $("#competitive_title_item3").html(en.competitive_title_item3);
            $("#competitive_text_item3").html(en.competitive_text_item3);
            $("#competitive_title_item4").html(en.competitive_title_item4);
            $("#competitive_text_item4").html(en.competitive_text_item4);
            $("#competitive_title_item5").html(en.competitive_title_item5);
            $("#competitive_text_item5").html(en.competitive_text_item5);
            $("#competitive_title_item6").html(en.competitive_title_item6);
            $("#competitive_text_item6").html(en.competitive_text_item6);

            $("#competitive_other_title_item1").html(en.competitive_title_item1);
            $("#competitive_other_text_item1").html(en.competitive_text_item1);
            $("#competitive_other_title_item2").html(en.competitive_title_item2);
            $("#competitive_other_text_item2").html(en.competitive_text_item2);
            $("#competitive_other_title_item3").html(en.competitive_title_item3);
            $("#competitive_other_text_item3").html(en.competitive_text_item3);
            $("#competitive_other_title_item4").html(en.competitive_title_item4);
            $("#competitive_other_text_item4").html(en.competitive_text_item4);
            $("#competitive_other_title_item5").html(en.competitive_title_item5);
            $("#competitive_other_text_item5").html(en.competitive_text_item5);
            $("#competitive_other_title_item6").html(en.competitive_title_item6);
            $("#competitive_other_text_item6").html(en.competitive_text_item6);
            //price_title
            $("#price_title1").html(en.price_title1);
            $("#price_title2").html(en.price_title2);

            $("#price_item1").html(en.price_item1);
            $("#price_item2").html(en.price_item2);
            $("#price_item3").html(en.price_item3);
            $("#price_item4").html(en.price_item4);
            $("#price_item5").html(en.price_item5);
            $("#price_item6").html(en.price_item6);
            $("#price_item7").html(en.price_item7);
            $("#price_item8").html(en.price_item8);
            $("#price_item9").html(en.price_item9);
            $("#price_item10").html(en.price_item10);
            $("#price_item11").html(en.price_item11);
            $("#price_item12").html(en.price_item12);          
            //team_title
            $("#team_title").html(en.team_title);
            $("#team_title_intro").html(en.team_title_intro);
            $("#team-creative-title").html(en.team_title1.toUpperCase());
            $("#team-consultant-title").html(en.team_title2.toUpperCase());
            $("#team-investment-title").html(en.team_title3.toUpperCase());
            $("#team-cooperate-title").html(en.team_title4.toUpperCase());
            $("#team-members-title").html(en.team_title5.toUpperCase());
            
            var teamArr = ["01", "02", "03", "04", "05", "11", "12", "13", "14"]
            for(var i in teamArr){
                $("#team_name_item" + teamArr[i]).html(eval("en.team_name_item" + teamArr[i]));
                $("#team_work_item" + teamArr[i]).html(eval("en.team_work_item" + teamArr[i]));
                $("#team_text_item" + teamArr[i]).html(eval("en.team_text_item" + teamArr[i]));
            }

            $("#team_support_item1").html(en.team_support_item1);
            $("#team_support_item2").html(en.team_support_item2);
            $("#team_support_item3").html(en.team_support_item3);
            //comunity
            $("#community_title1").html(en.community_title1);
            $("#community_title2").html(en.community_title2);
            $("#community_img_title").html(en.community_img_title.toUpperCase());
            $("#community_title_item1").html(en.community_title_item1);
            $("#community_text_item1").html(en.community_text_item1);
            $("#community_title_item2").html(en.community_title_item2);
            $("#community_text_item2").html(en.community_text_item2);
            $("#community_title_item3").html(en.community_title_item3);
            $("#community_text_item3").html(en.community_text_item3);
            $("#community_title_item4").html(en.community_title_item4);
            $("#community_text_item4").html(en.community_text_item4);
            $("#community_title_item5").html(en.community_title_item5);
            $("#community_text_item5").html(en.community_text_item5);
            
            $("#total_content_item1").html(en.total_content_item1);
            $("#total_content_item2").html(en.total_content_item2);
            $("#total_content_item3").html(en.total_content_item3);

            $("#community_video_title").html(en.community_video_title.toUpperCase());
            $("#video_tag_tip").html(en.video_tag_tip);
            $("#community_video_text1").html(en.community_video_text1);
            $("#community_video_text2").html(en.community_video_text2);
        }
    }
    
});