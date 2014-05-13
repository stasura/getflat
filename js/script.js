$(document).ready(function(){
    
    // Prevent closing the sign in form on click
    $('.dropdown-menu').find('input').click(function(e) {
       e.stopPropagation();
    })
    
    $('.selectpicker').selectpicker();

})    