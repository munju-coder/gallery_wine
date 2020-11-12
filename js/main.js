$(document).ready( function(){
    /**
     * @bref menu click event
     */
    $('#menu_btn').click( function(){
        // $('aside,.modal_background').toggle();
        $('.modal_background').toggle();
        $('aside').css('right','0');
    });

    $('.close_btn,.modal_background').click( function(){
        $('.modal_background').toggle();
        $('aside').css('right','-520px');

    });
}); 