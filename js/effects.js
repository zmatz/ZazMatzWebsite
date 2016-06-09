$(document).ready(function () {
    $('.sobreMi').hide();
    $('.acordeonSobreMi').click(function(){
        $('.sobreMi').slideToggle('slow');
   });

    $('.proyectos').hide();
    $('.acordeonProyectos').click(function(){
        $('.proyectos').slideToggle('slow');
   });


    /*------------------------------------------------------------------*/

    $("a").hover(function(){
        $(this).stop().animate({"opacity": 0.5}, 200);
    },function(){
        $(this).stop().animate({"opacity": 1}, 200);
    });

    
    /*------------------------------------------------------------------*/
    /*Rotating Words*/

        var keywords = ["el caos detrás","el código detrás","las razones detrás", "la ciencia detrás", "la biología a través", "los sistemas detrás",  "las teorías detrás", "las mentes detrás","la ética detrás", "el arte a través", "la vida a través"];
        var count = 1;
        setInterval(function(){
            $("span.keyword").fadeOut(600, function(){
                $(this).html(keywords[count]);
                count++
                if(count == keywords.length)
                    count = 0;
                $(this).fadeIn(600);
            });
        }, 5000);

        /*var advervios = ["detrás","detrás","detrás", "a través", "detrás", "a través", "detrás",  
          "detrás", "detrás","detrás", "a través", "a través"];
        var count = 1;
        setInterval(function(){
            $("span.advervio").fadeOut(500, function(){
                $(this).html(advervios[count]);
                count++
                if(count == advervios.length)
                    count = 0;
                $(this).fadeIn(500);
            });
        }, 3250);*/

    /*------------------------------------------------------------------*/

    $('#site-description').hover(function(){
        $('#arrow-down').css('background-position', 'center 0px');
    }, function(){
        $('#arrow-down').css('background-position', 'center -16px');
    });

    /*------------------------------------------------------------------*/
    $('#site-description').click(function (e) {
    e.preventDefault();
    $('#menu').slideToggle('1000', "easeOutQuad", function () {
        if ($(this).is(':visible')) {
                 $('#header').addClass('active');
                 $('#header').removeClass('inactive');
                 $('#arrow-down').css("background-image", "url(/wp-content/themes/yeedor/_assets/icons/arrow-sprite-active.png)");

        } else {
             $('#header').addClass('inactive');
             $('#header').removeClass('active');
             $('#arrow-down').css("background-image", "url(/wp-content/themes/yeedor/_assets/icons/arrow-sprite.png)");
        }
    });

    /*------------------------------------------------------------------*/

});
});
