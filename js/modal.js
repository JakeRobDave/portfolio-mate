var CANVAS_ROTATION = 0; // current rotation angle 
var isGreyscale = 0, isInverted = 0;

$(document).ready(function() {
		
	$('#landingModal').on('show.bs.modal', function (event) {
		var anchor = $(event.relatedTarget); // Button that triggered the modal
		var picture = anchor.data('image'); // Extract info from data-* attributes
        var title = anchor.data('title');

		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		modal.find('.modal-title').text(title);
		modal.find('.modal-body img').attr('src', picture);
		
		//For Download anchor
		var downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", picture);
		downloadAnchor.setAttribute("id", "downloadLink");
		downloadAnchor.download = picture;
		
		//For Download Button
		var downloadButton = document.createElement("button");
		downloadButton.setAttribute("class", "btn btn-secondary");
		downloadButton.setAttribute("content", "Download");
		downloadButton.innerHTML = 'Download';
		
		//Check if there is one method
		var sizeCheck = modal.find('.modal-footer a#downloadLink');
		if(sizeCheck.length > 0) {
			modal.find('.modal-footer a#downloadLink').replaceWith(downloadAnchor);	
			modal.find('.modal-footer a#downloadLink').append(downloadButton);			
		}
		else {			
			modal.find('.modal-footer').prepend(downloadAnchor);
			modal.find('.modal-footer a#downloadLink').append(downloadButton);
			modal.find('.modal-footer a#downloadLink').prepend(" ");				
		}
				
		//For Twitter Share Anchor
		var twitterAnchor = document.createElement("a");
		twitterAnchor.setAttribute("class", "twitter-share-button");
		twitterAnchor.setAttribute("href","https://twitter.com/share"); //https://twitter.com/share
		twitterAnchor.setAttribute("data-href", picture);
		twitterAnchor.setAttribute("data-size", "large");
		twitterAnchor.setAttribute("data-text", "Check out this Cool picture by Ann Fisher!!!");
		twitterAnchor.setAttribute("data-href", picture);
		twitterAnchor.innerHTML = 'Tweet';
		//Check if there is one method
		sizeCheck = modal.find('.modal-footer a.twitter-share-button');
		if(sizeCheck.length > 0) {
			modal.find('.modal-footer a.twitter-share-button').replaceWith(twitterAnchor);
		}
		else {
			modal.find('.modal-footer').prepend(twitterAnchor);
			modal.find('.modal-footer a.twitter-share-button').prepend("\xa0");
		}

		//Facebook Share
		var facebookShare = document.createElement("div");
		facebookShare.setAttribute("class", "fb-share-button");
		facebookShare.setAttribute("data-href", picture);
		facebookShare.setAttribute("data-layout", "button");
		facebookShare.setAttribute("data-size", "large");
		facebookShare.setAttribute("data-iframe", "true");
		
		//For Facebook Share Anchor
		var facebookAnchor = document.createElement("a");
		facebookAnchor.setAttribute("class", "fb-xfbml-parse-ignore");
		facebookAnchor.setAttribute("target", "_blank");
		facebookAnchor.setAttribute("data-href", picture);
		facebookAnchor.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fweblab.cs.uml.edu%2F%7Eddacosta%2Ffinal%2Flanding.html&amp;src=sdkpreparse");
		facebookAnchor.innerHTML = 'Share';
		
		//Check if there is one method
		sizeCheck = modal.find('.modal-footer div.fb-share-button');
		if(sizeCheck.length > 0) {
			modal.find('.modal-footer div.fb-share-button').replaceWith(facebookShare);
			modal.find('.modal-footer div.fb-share-button').append(facebookAnchor);
		}
		else {
			modal.find('.modal-footer').prepend(facebookShare);
			modal.find('.modal-footer div.fb-share-button').append(facebookAnchor);
			modal.find('.modal-footer div.fb-share-button').append("\xa0");
		}
	});
	
	$('#photoEditorModal').on('show.bs.modal', function (event) {
		var anchor = $(event.relatedTarget); // Button that triggered the modal
		var picture = anchor.data('image'); // Extract info from data-* attributes
		var path = anchor.data('path');
		var title = anchor.data('title');
									
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		modal.find('.modal-body img').attr('src', picture);
		
		/*************************** Delete Stuff *****************************************/
		/*function delete_image() {
		sorc = document.getElementById(selected_image);
		pth = sorc.src;
		$.ajax({
		   url: 'delete.php',
		   type: 'post',
		   data: {path: pth},
		   success: function(response){
		   sorc.parentNode.removeChild(sorc);
			}
		  });
		};*/
		//in modal footer
		//id's are # and classes are .
		//img id=imagePreview							change src
		//input name="fileToDelete" id="fileToDelete"		set text
		modal.find('.modal-body img#imagePreview').attr('src', picture);
		//modal.find('.modal-footer input#fileToDelete').val(title);	//was text()
		/********************************************************************/
		
		sessionStorage.setItem("path", picture);
		sessionStorage.setItem("image-name", title);

		//For Edit Button
		var editButton = document.createElement("button");
		editButton.setAttribute("class", "btn btn-primary");
		editButton.setAttribute("id", "editLink");
		editButton.setAttribute("content", "Edit Picture");
		editButton.setAttribute("onclick", "window.location.href = 'editPic.html';");
		editButton.innerHTML = 'Edit Picture';
		
		//Check if there is one method
		var sizeCheck = modal.find('.modal-body .buttons #editLink');
		if(sizeCheck.length > 0) {			
			modal.find('.modal-body .buttons button#editLink').replaceWith(editButton);			
		}
		else {
			modal.find('.modal-body .buttons').prepend(editButton);				
			modal.find('.modal-body .buttons').append("<br><br>");
		}
		/********************************************************************/
		
		//For Delete Button	
		var deleteButton = document.createElement("button");
		deleteButton.setAttribute("class", "btn btn-primary");
		deleteButton.setAttribute("type", "submit");
		deleteButton.setAttribute("form", "delete");
		deleteButton.setAttribute("id", "deleteThis");
		deleteButton.setAttribute("content", "Delete");
		deleteButton.innerHTML = 'Delete';
		
		//Check if there is one method
		var sizeCheck = modal.find('.modal-body form #deleteThis');
		if(sizeCheck.length > 0) {				
			modal.find('.modal-body form #deleteThis').replaceWith(deleteButton);			
		}
		else {			
			modal.find('.modal-body form').append("<br>");
			modal.find('.modal-body form').append(deleteButton);
		}
	/*************************************************************************/
		//For Download anchor
		var downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", picture);
		downloadAnchor.setAttribute("id", "downloadLink");
		downloadAnchor.download = picture;
		
		//For Download Button
		var downloadButton = document.createElement("button");
		downloadButton.setAttribute("class", "btn btn-primary");
		downloadButton.setAttribute("content", "Download");
		downloadButton.innerHTML = 'Download';
		
		//Check if there is one method
		sizeCheck = modal.find('.modal-body .buttons a#downloadLink');
		if(sizeCheck.length > 0) {			
			modal.find('.modal-body .buttons a#downloadLink').replaceWith(downloadAnchor);	
			modal.find('.modal-body .buttons a#downloadLink').append(downloadButton);			
		}
		else {					
			modal.find('.modal-body .buttons').prepend("<br><br>");
			modal.find('.modal-body .buttons').prepend(downloadAnchor);
			modal.find('.modal-body .buttons a#downloadLink').append(downloadButton);
		}

		//Facebook Share
		var facebookShare = document.createElement("div");
		facebookShare.setAttribute("class", "fb-share-button");
		facebookShare.setAttribute("data-href", picture);
		facebookShare.setAttribute("data-layout", "button");
		facebookShare.setAttribute("data-size", "large");
		facebookShare.setAttribute("data-iframe", "true");
		
		//For Facebook Share Anchor
		var facebookAnchor = document.createElement("a");
		facebookAnchor.setAttribute("class", "fb-xfbml-parse-ignore");
		facebookAnchor.setAttribute("target", "_blank");
		facebookAnchor.setAttribute("data-href", picture);
		facebookAnchor.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fweblab.cs.uml.edu%2F%7Eddacosta%2Ffinal%2Flanding.html&amp;src=sdkpreparse");
		facebookAnchor.innerHTML = 'Share';
		
	  //sizeCheck = modal.find('.modal-body .buttons a#downloadLink');
		//Check if there is one method
		sizeCheck = modal.find('.modal-body .buttons .fb-share-button');
		if(sizeCheck.length > 0) {	
			modal.find('.modal-body .buttons div.fb-share-button').replaceWith(facebookShare);
			modal.find('.modal-body .buttons div.fb-share-button').append(facebookAnchor);
		}
		else {
			modal.find('.modal-body .buttons').prepend("<br>");	
			modal.find('.modal-body .buttons').prepend(facebookShare);
			modal.find('.modal-body .buttons div.fb-share-button').append(facebookAnchor);
		}
		
		//For Twitter Share Anchor
		var twitterAnchor = document.createElement("a");
		twitterAnchor.setAttribute("class", "twitter-share-button");
		twitterAnchor.setAttribute("href","https://twitter.com/share");
		twitterAnchor.setAttribute("data-size", "large");
		twitterAnchor.setAttribute("data-text", "Look what I caught!!!");
		twitterAnchor.setAttribute("data-href", picture);
		twitterAnchor.innerHTML = 'Tweet';
		//Check if there is one method
		sizeCheck = modal.find('.modal-body .buttons a.twitter-share-button');
		if(sizeCheck.length > 0) {
			modal.find('.modal-body .buttons a.twitter-share-button').replaceWith(twitterAnchor);
		}
		else {
			modal.find('.modal-body .buttons').prepend("<br><br>");	
			modal.find('.modal-body .buttons ').prepend(twitterAnchor);
		}
	});
});