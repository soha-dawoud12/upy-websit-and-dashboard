
$(document).ready(function(){
    $(".notBtn").click(function () {

        $(".box").toggle("300");

        // var cid = $(this).data("c");


    });



    $('#myModal').modal({
        keyboard: true
    });

    $(function(){
        $('.question input[type=radio]').change(function() {
            $('.selected').removeClass('selected').addClass('box-choice');
            $(this).closest('div').removeClass('box-choice').addClass('selected');
        });
    });




        //see course

    $(".lessons .menu li a").on("click" , function(e){
        e.preventDefault();
        // $(".content").removeClass("active1");
        // let target = $(this).data("target");
        // $(target).addClass("active1");
        //
        // $(this).parent("li").siblings().removeClass("active1");
        //
        // $(this).parent("li").addClass("active1");

        // let breadcrumb = $(this).text();
        // $('.second-bread').text(breadcrumb);
    });

    $(" .lessons .menu-item").on("click" , function(){
        if($(this).has("> .submenu").length > 0){
            $(this).find(" > .submenu > .submenu-item:first-child").click();
        }
        $(this).siblings(".menu-item").find(".submenu").hide();
    })

    $(".lessons .submenu-item").on("click" , function(e){
        if($(this).has("> .submenu").length > 0){
            $(this).find(" > .submenu > .submenu-item:first-child").click();
        }
        $(this).siblings().find(".submenu").hide();
        e.stopPropagation();
    });

    $(".lessons .submenu-key").on("click" , function(){
        $(this).parents(".submenu").find(".submenu").hide();
        $(this).next(".submenu").slideToggle(200);
    });

    $(".lessons .menu-item .submenu-item").on("click" , function(){
        $(this).addClass("active1");
        $(this).siblings(".submenu-item").removeClass("active1");
    });

    $(" .lessons .menu-item .submenu-item").on("click" , function(){
        $(this).addClass("active1");
        $(this).siblings(".submenu-item").removeClass("active1");
    });

        $(".lessons .menu-item ").on("click" , function(){

            $(this).find('i.fas').toggleClass('fa-angle-down fa-angle-up');
        });




});

$(" .search-icon .icon").click(function () {
    var icon = $(this),
        input = icon.parent().find("#search"),
        submit = icon.parent().find(".submit"),
        is_submit_clicked = false;

    // Animate the input field
    input.animate({
        "width": "165px",
        "padding": "10px",
        "opacity": 1
    }, 300, function () {
        input.focus();
    });

    submit.mousedown(function () {
        is_submit_clicked = true;
    });

    // Now, we need to hide the icon too
    icon.fadeOut(300);

    // Looks great, but what about hiding the input when it loses focus and doesnt contain any value? Lets do that too
    input.blur(function () {
        if (!input.val() && !is_submit_clicked) {
            input.animate({
                "width": "0",
                "padding": "0",
                "opacity": 0
            }, 200);

            // Get the icon back
            icon.fadeIn(200);
        }
        ;
    });
});



var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};


jQuery(document).ready(function($){
    $('.toggle-click').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).css('background-color', '#4468EC');
            $(this).text('  Available')
        }
        else {
            $(this).attr('data-click-state', 1);
            $(this).css('background-color', '#313653');
            $(this).text('Exit')
        }
    });
});



