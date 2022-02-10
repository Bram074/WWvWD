$(document).ready(function(){
    

    //  hide start stuff //
    
    $(".townMusic").trigger('load');

    setTimeout(function(){
        $(".townMusic").trigger('play')
    }, 1000)
    
    
    $('.arrowNight').hide()
    $('.night').hide()


    // set global variables //
    var time = 0;
    var timerInterval;

    // audio loading //
    
    $(".nightMusic").trigger('load');
    $(".nightMusic").prop("volume",0.3);
    $(".bells").trigger('load');
    $(".wolfHowl").trigger('load');
    $(".witch").trigger('load');
    $(".arrow").trigger('load');
    $(".giggle").trigger('load');
    $(".ziener").trigger('load');


    // arrows //
    $(".arrow").click(function(){
        $(".sun").animate({top: '150vh'}, 5000, function(){
            $(".moon").animate({top: '575px'}, 5000, function(){
                $(".arrowNight").fadeIn()
                $('.night').fadeIn()
            });
        }); 
        //music
        $(".townMusic").trigger('pause')
        $(".nightMusic").trigger('play')

        //background change
        $(".background").animate({backgroundPosition: "0 100%"}, 7000)

        // show and hide imediate
        $(".start").fadeOut()
        $(this).fadeOut()
    });

    $(".arrowNight").click(function(){
        $(".moon").animate({top: $(window).height() + 500}, 4000, function(){
            $(".sun").animate({top: '450px'}, 5000, function(){
                $(".arrow").fadeIn()
                $('.start').fadeIn()
            });
        }); 
        //music
        $(".townMusic").trigger('play')
        $(".nightMusic").trigger('pause')

        //background change
        $(".background").animate({backgroundPosition: "0 0%"}, 7000)

        // show and hide imediate
        $(".night").fadeOut()
        $(this).fadeOut()
    });


    // Timer //
    $('.t5').click(function(){
        time += (1*60);
        min = Math.floor(time/60)
        $('.timer').text(min + ':' + 0)
        return time
    });

    $('.t10').click(function(){
        time += (10*60)
        min = Math.floor(time/60);
        $('.timer').text(min + ':' + 0)
        return time
    });

    $('.reset').click(function(){
        time = 0
        $('.timer').text(0 + ':' + 0)
        clearInterval(timerInterval)
        return time
    })

    $('.stop').click(function() {
        $(".bells").trigger('pause');
        clearInterval(timerInterval)
    })

    $('.startBtn').click(function(){
        if(time === 0) return
        timerInterval = setInterval(timer, 1000)
        return timerInterval
    })

    function timer() {
        time -= 1
        min = Math.floor(time/60) 
        sec = time - (min*60)

        if (time == 0) {
            clearInterval(timerInterval)
            $(".bells").trigger('play');
        }

       $('.timer').text(min + ':' + sec)
    }

    
    // cards //
    $('#ziener').click(function(){
        $('.ziener').trigger('play')
    })

    $('#ziener').dblclick(function(){
        $(this).fadeOut()
    })

    $('#zienerInactive').dblclick(function(){
        $('#ziener').fadeIn()
    })



    $('#cupido').click(function(){
        $('.arrow').trigger('play')
    })

    $('#cupido').dblclick(function(){
        $(this).fadeOut()
    })

    $('#cupidoInactive').dblclick(function(){
        $('#cupido').fadeIn()
    })



    $('#stiekemeMeisje').click(function(){
        $('.giggle').trigger('play')
    })

    $('#stiekemeMeisje').dblclick(function(){
        $(this).fadeOut()
    })

    $('#stiekemeMeisjeInactive').dblclick(function(){
        $('#stiekemeMeisje').fadeIn()
    })


    
    $('#heks').click(function(){
        $(".witch").trigger('play');
    })

    $('#heks').dblclick(function(){
        $(this).fadeOut()
    })

    $('#heksInactive').dblclick(function(){
        $('#heks').fadeIn()
    })



    $('#weerwolf').click(function(){
        $(".wolfHowl").trigger('play');
    })

    

















  
  }); 