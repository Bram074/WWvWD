$(document).ready(function(){

    $('.small').hide()

    // Screen size
        // Initial
    const minWidth = 850
    const minHeight = 650

    if ($(window).width() < minWidth || $(window).height() < minHeight) {
        $('.large').hide()
        $('.small').show()
     }



        // On resize
    $(window).resize(function(){
        if ($(window).width() < minWidth) {
            $('.large').hide()
            $('.small').show()
         }


         if ($(window).height() < minHeight) {
            $('.large').hide()
            $('.small').show()
         }

    })

})