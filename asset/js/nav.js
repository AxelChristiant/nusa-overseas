// A $( document ).ready() block.
$( document ).ready(function() {

    // initContact();
    // $("#contact-button").click(()=>{
    //     let width = $(window).width();
    //     if(width >= 975){
    //     if($("#popup-contact").css("visibility") === "hidden"){
    //     $("#popup-contact").css("visibility", "visible");
    //     $("#contact-button").parent().addClass("active");
    //     }else{
    //         $("#popup-contact").css("visibility", "hidden");
    //         $("#contact-button").parent().removeClass("active");
    //     }
    // }
    
    // });

    $(window).resize(function() {
        var width = $(window).width();
        if((width  < 975)){
            // $("#popup-contact").css("visibility", "hidden");
            $(".contact-item").css("display", "block");
            $("#contact-button").parent().addClass("active");
        }else{
            $(".contact-item").css("display", "none");
            $("#contact-button").parent().removeClass("active");     
        }



      });

      $('#navbarNav').on("show.bs.collapse", function(e){
        $(".contact-item").css("display", "block");
        $("#contact-button").parent().addClass("active");
        
      })

      $('#navbarNav').on("hide.bs.collapse", function(e){
        $(".contact-item").css("display", "none");
        $("#contact-button").parent().removeClass("active");
      })

  });


    



