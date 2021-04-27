//fhide and show
$(document).ready(function(){
    let texte = $('#texte');
    hide = $('#hide');
    show = $('#show');

    $(hide).on('click', function(){
        $(texte).hide();
        $(this).hide();//I hide the hide button
        $(show).show();//the show button appears
    });
    $(show).on('click', function(){
        $(texte).show();
        $(this).hide();//I hide the show button
        $(hide).show(); //my hide button comes back
    });
 });
   
   