//click on the burger menu, change button style to "X"
function changeButton(){
//listen to the click
  $('.burger-menu-container').click( function(event) {
        $(this).toggleClass('change');
        $('.menu-container').fadeToggle().toggleClass('hide-menu');
  });

}

//close the mobile menu
function clearMobileMenu(){
    $('.menu-item').click( function(event){
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


//animate my photo in the about-me section
function changePhoto(){
  let images = ['img/me/me-4.jpg','img/me/me-9.jpg'];
  let i = 0;
  setInterval(function(){
    $('#change-photo').attr('src', images[i]);
    i = i + 1;
    if (i == images.length){
      i = 0;
    }
  }, 1500);
}


$(changeButton);
$(clearMobileMenu);
$(smoothScroll);
$(changePhoto);

