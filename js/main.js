$(document).ready(function(){
    
     //animation for photos
    
    $("#button").click(function anja(){
        $('#anja').addClass('animated rotateIn');
        $('#anja').css('background-image',  'url(img/anja.jpg)');
        setTimeout(anisah, 2000)
    })
    
    function anisah(){
        $('#anisah').addClass('animated rotateIn');
        $('#anisah').css('background-image', 'url(img/Anisah.jpg)');
        setTimeout(luka, 2000)
    }
    
    function luka(){
        $('#luka').addClass('animated rotateIn');
        $('#luka').css('background-image', 'url(img/Luka.jpg)');
        setTimeout(title1, 2000)
    }
    
    //animation for text
    
    function title1(){
        $("h1").show();
        $(".title").addClass("animated flip");
        setTimeout(title2, 2000)
    }
    
    function title2(){
        $("h2").show();
        $(".title").addClass("animated flip");
        $("#button").hide();
    }

});
