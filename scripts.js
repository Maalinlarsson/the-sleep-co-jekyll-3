 	// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle(500);

    });

    // Animate on scroll - activate
    AOS.init({

        duration: 600 // values from 0 to 3000, with step 50ms

    });

});

//This is the first popup gallery 
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
    
});


// This is the second popup gallery
lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
    
});