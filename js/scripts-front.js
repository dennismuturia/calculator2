//User Interface
var Calc = require('./../js/scripts.js').addModule;


$(document).ready(function(){
  $("form#forrm").submit(function(event){
    event.preventDefault();
    var one = parseInt($("#number").val());
    var two = parseInt($("#number1").val());
    var add1 = add(one, two);

    $("#output").text(add1);
  });
});
