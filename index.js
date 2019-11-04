//click on the burger menu, change button style to "X"
function changeButton(){
//listen to the click
  $('.burger-menu-container').click( function() {
        $(this).toggleClass('change');
        $('.menu-container').fadeToggle().toggleClass('hide-menu');
  });

}

function clearMobileMenu(){
    $('.menu-item').click(function(){
        $('.burger-menu-container').toggleClass('change');
        $('.menu-container').fadeToggle().toggleClass('hide-menu');        
    })
}



$(changeButton);
$(clearMobileMenu);



