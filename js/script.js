$('.owl-carousel').owlCarousel({
    items:8,
    loop:true,
    margin:10,
    dots:true,
    dotsEach:true,
    autoplay:true,
    autoplayTimeout:2200,
    autoplayHoverPause:true,
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    });
$(window).scroll(function(){

    if(this.scrollY >27){
        $(".navbar").addClass("sticky");
        $("#logo-addr").removeClass("crismon");
    }else{
        $(".navbar").removeClass("sticky");
        $("#logo-addr").addClass("crismon");
    }


});
function fun(){
    if($(window).width()>930){
        $("#menu-bars").addClass("hide");
        
        // $("#ul-links").removeClass("hide");
    }else{
        $("#menu-bars").removeClass("hide");
        // $("#ul-links").addClass("hide");
    }
}

$(document).ready(function(){
//     $('.navbar ul a').on('click', function (e) {
//           if (this.hash !== '') {
//             e.preventDefault();
            
//             const hash = this.hash;
//             $('html, body')
//               .animate({
//                 scrollTop: $(hash).offset().top
//               },600);
//           }
//         });
    $(window).resize(function() {
        if($(window).width()>960){
            
            $("#menu-bars").addClass("hide");
            $("#cancel-bar").addClass("hide");
            // $("#ul-links").removeClass("hide");
   
        }else{
        
                $("#menu-bars").removeClass("hide");

            
            $("#cancel-bar").addClass("hide");
            // $("#ul-links").addClass("hide");
        }
    });
    fun();
});
$(document).ready(function(){
    $("#menu-bars").click(function(){
        $("#ul-links").toggleClass("active");
        $(".menu-bars").toggleClass("change-color-menu-abrs");
        $("body").addClass("restrict-scroll");
        $("#cancel-bar").removeClass("hide");
        $("#menu-bars").addClass("hide");
    });
    $("#ul-links li").click(function(){
        $("#ul-links").toggleClass("active");
        $("body").removeClass("restrict-scroll");
        if($(window).width()<960){
            $("#cancel-bar").addClass("hide");
            $("#menu-bars").removeClass("hide change-color-menu-abrs");
            // $(".menu-bars").removeClass("change-color-menu-abrs");
        }
        
    });
    $("#cancel-bar").click(function(){
        $("#cancel-bar").addClass("hide");
        $("#menu-bars").removeClass("hide change-color-menu-abrs");
        $("#ul-links").toggleClass("active");
        // $(".menu-bars").removeClass("change-color-menu-abrs");
        $("body").removeClass("restrict-scroll");
    });

});





/*----------------------------------------------------------------*/

    const ar= [1,2,3,4,5,6,7];
    ar.forEach((i)=>{
        const htm = document.querySelector(".anim"+i);

        const newvar = new IntersectionObserver((entries)=>{
  
             if(entries[0].intersectionRatio >0){
               entries[0].target.style.animation = 'anim'+ i+' 2s';
             }else{
                entries[0].target.style.animation = "none";
             }
            
         
         });
     
        newvar.observe(htm)
    })
    

