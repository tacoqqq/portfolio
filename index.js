//click on the burger menu, change button style to "X"
function changeButton(){
//listen to the click
  $('.burger-menu-container').click( function() {
        $(this).toggleClass('change');
        $('.menu-container').fadeToggle().toggleClass('hide-menu');
  });

}

//close the mobile menu
function clearMobileMenu(){
    $('.menu-item').click(function(){
        $('.burger-menu-container').toggleClass('change');
        $('.menu-container').fadeToggle().toggleClass('hide-menu');        
    })
}

//Add smooth scrolling to all links
function smoothScroll(){
    $('a').on('click',function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
              });
        }
    });
}



$(changeButton);
$(clearMobileMenu);
$(smoothScroll);



