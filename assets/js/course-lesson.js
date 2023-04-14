
$(document).ready(function(){


    $(".categories .menu li a").on("click" , function(e){
        e.preventDefault();
        $(".content").removeClass("active1");
        let target = $(this).data("target");
        $(target).addClass("active1");

        $(this).parent("li").siblings().removeClass("active1");

        $(this).parent("li").addClass("active1");

        let breadcrumb = $(this).text();
        $('.second-bread').text(breadcrumb);
    });
    $(" .categories .menu-item").on("click" , function(){
        if($(this).has("> .submenu").length > 0){
            $(this).find(" > .submenu > .submenu-item:first-child").click();
        }
        $(this).siblings(".menu-item").find(".submenu").hide();
    })

    $(".categories .submenu-item").on("click" , function(e){
        if($(this).has("> .submenu").length > 0){
            $(this).find(" > .submenu > .submenu-item:first-child").click();
        }
        $(this).siblings().find(".submenu").hide();
        e.stopPropagation();
    });

    $(".categories .submenu-key").on("click" , function(){
        $(this).parents(".submenu").find(".submenu").hide();
        $(this).next(".submenu").slideToggle(200);
    });

    $(".categories .menu-item .submenu-item").on("click" , function(){
        $(this).addClass("active1");
        $(this).siblings(".submenu-item").removeClass("active1");

    });

    $(" .categories .menu-item .submenu-item").on("click" , function(){
        $(this).addClass("active1");
        $(this).siblings(".submenu-item").removeClass("active1");

    });
    $(".categories .menu-item ").on("click" , function(){

        $(this).find('i.fas').toggleClass('fa-angle-down fa-angle-up');
    });

    $(".filter-icon").on("click" , function(){
        $(this).next(".filter-list").slideToggle(200);
    })

    $(".heart").click(function() {
        $(this).toggleClass(" far  fas ").animate({width: '25px'}, "pixelated");;
    });



    var x = 0;

    $(".video-play-link").click(function () {
        $(".vidFootX").get(0).play();
    })

    $("span.pause").click(function () {
        $(this).hide();
        $("span.play").show();
        $(".vidFootX").get(0).play();
    })

    $("span.play").click(function () {
        $(this).hide();
        $("span.pause").show();
        $(".vidFootX").get(0).pause();


        $(".date-appo").click(function(){
            $("date-appo-1").toggle();
        });
    })



    $(".cart").on("click" ,"li.menu-item:not(.active) a" , function(e){
        e.preventDefault();
        $(".content").fadeOut("active");
        let target = $(this).data("target");
        $(target).fadeIn("active");

        $("li.menu-item").removeClass("active");
        $(this).parent("li").addClass("active");

        // let breadcrumb = $(this).text();
        // $('.second-bread').text(breadcrumb)
    });




    $(".accordion .card .card-header").on("click" , function(e){
        e.preventDefault();
        $(".card-header").removeClass("actives");

        let target = $(this).data("target");
        $(target).addClass("actives");

        $(this).removeClass("actives");

        $(this).addClass("actives");



    });

});



