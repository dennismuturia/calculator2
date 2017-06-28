
$(document).ready(function(){
  $('form#sign').submit(function(event){
    event.preventDefault();
    //Helllo
    var sign1 = $('#email').val();
    $('#output').text(sign1);
  });
});
