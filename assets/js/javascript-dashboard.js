
$(document).ready(function(){

    $("#show-another-student").click(function(){
        $(".add-student").fadeIn();
    });
    $(".fa-times-circle").click(function(){
        $(".add-student").hide('.fa-times-circle');
    });

    //li assessments multi level /page assessments-pre
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next().toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $("#mymodel2").on('show.bs.modal', function (e) {
        $("#mymodel1").modal("hide").animate({top: '10px'},'slow');
    });
});
