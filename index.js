
$("document").ready(function(){


var selectedInput = null;
$(document).ready(function() {
    $('button').focus(function() {
        this.blur();
    });
});


$("form").submit(formSubmit);



});

function formSubmit(event){

	event.preventDefault();

	
	var formSubmitted = $(".submit-button").addClass("form-submitted");

	setTimeout(function() {
  		formSubmitted.removeClass("form-submitted");
		}, 200);

		console.log("form submit");
};
