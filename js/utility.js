
$(document).ready(function() {

	$("#changeNameButton").click(function() {
		$("#editorHeading").html( $(portfolioName).val() );
	})

	$("#MasterButton").click(function() {
		if($("#user").val() == "annFisher") {
			if($("#pass").val() == "3dog") {
				window.location.href = 'editor.html';
			}		
			else {
			window.alert( "Forgot your password?");
			}
		}
		else {
			window.alert( " Sorry, user / pass not recognized");
		}
	})
	
	$( "#user" ).keypress(function() {
		if ( event.which == 13 ) {
			if($("#user").val() == "annFisher") {
			if($("#pass").val() == "3dog") {
				window.location.href = 'editor.html';
			}		
			else {
			window.alert( "Forgot your password?");
			}
		}
		else {
			window.alert( " Sorry, user / pass not recognized");
		}
		}
	});
	
	$( "#pass" ).keypress(function() {
		if ( event.which == 13 ) {
			if($("#user").val() == "annFisher") {
			if($("#pass").val() == "3dog") {
				window.location.href = 'editor.html';
			}		
			else {
			window.alert( "Forgot your password?");
			}
		}
		else {
			window.alert( " Sorry, user / pass not recognized");
		}
		}
	});
	
   });
