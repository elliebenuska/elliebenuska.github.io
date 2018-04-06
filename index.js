
var selectedInput = null;
$(document).ready(function() {
    $('button').focus(function() {
        this.blur();
    });
});


$(".submit-button").click(function(event){
    event.preventDefault();
    $(".submit-button").css("background-color", "#e6e6e6");
    console.log("working")
});

