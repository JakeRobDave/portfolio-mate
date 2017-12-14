var folder = "imgs/",
newImgSpot = "<div class=\"image\" id=\"image\"></div>",
basePath = 'http://weblab.cs.uml.edu/~ddacosta/portfolio-mate/',
editImgUrl = 'editor.html',
lastSortImgArry=[],
flag = 0;
		
function imgTagHelper(val){
	var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);

	if(lastPathSegment == "editor.html") {
		return "<div class='col-sm-6' id='" + val + "_div' >" +
		'<a class="thumbnail" href="#" data-path="' + folder + val + '" data-toggle="modal" data-title="' + val + '" data-body="' + val + '"  data-image="' + folder + val + '" data-target="#photoEditorModal" >'+
		"<img class='user_imgs thumbnail img-responsive' type='file' id='" + val +"' src='"+ folder + val +"' min-height='100' min-width='100' >" +
		"</a>"+
		"</div>";
	}
	else if(lastPathSegment == "landing.html"){
		return "<div class='col-sm-6' id='" + val + "_div' >" +
		'<a class="thumbnail" href="#" data-path="' + folder + val + '" data-toggle="modal" data-title="' + val + '" data-body="' + val + '"  data-image="' + folder + val + '" data-target="#landingModal" >'+
		"<img class='user_imgs thumbnail img-responsive' type='file' id='" + val +"' src='"+ folder + val +"' min-height='100' min-width='100' >" +
		"</a>"+
		"</div>";
	}
}

//
// This function sets up all the images and also finds the base address of the
// server document.referrer ex:http://www.cs.uml.edu/~jadamson/portfolio-mate/
$( document ).ready(function() {
  $.ajax({
    url : folder,
    success: function (data) {
		var counter = 0;
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
		
				counter++;
				var currentRowIndex = Math.floor(((counter + 1)/2));
				var currentRow = "row" + currentRowIndex;
				temp = '#' + currentRow;
				
				$(temp).append( imgTagHelper(val) );
				
				//if isEven, then create new row
				if( (counter % 2) == 0 ) {
					var row = document.createElement("div");
					var nextRow = "row" + (currentRowIndex + 1);
					//window.alert(counter + " : " + nextRow );
					row.setAttribute("class", "row");
					row.setAttribute("id", nextRow);
					$("#pageImages").append(row);
				}
				
                var imgObj = new OurImage(val, '')
                if(imgFiles.indexOf(imgObj) == -1)
                  imgFiles.push(imgObj);
                lastSortImgArry.push(imgObj);
            }
        });
      }
  });

  return; 
});

function findSize(name){
  var myImg = document.getElementById(name);
  return myImg.naturalWidth * myImg.naturalHeight;
}

function setUpFileObj(name){
  // fileInput is a HTMLInputElement: <input type="file" multiple id="myfileinput">
  var fileInput = document.getElementById(name);

  // files is a FileList object (simliar to NodeList)
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    alert(files[i].name + " has a last modified date of " + files[i].lastModifiedDate);
  }

}

// returns the address of the dynamicly created edit page
// function takes the name of a function
function goToEdit(name) {
  localStorage.imageName=String(name);
  window.location.href= basePath + editImgUrl;
}

function sortSize(){
  if(imgFiles.length ==0){
    return;
  }
  var temp = lastSortImgArry.sort(compareSize);
  $("#pageImages").empty();
  for(var i = 0; i < temp.length;i++){
    $("#pageImages").append(imgTagHelper(temp[i].name));
  }
  return;
}

function compareSize(a,b) {
  if (a.size < b.size)
    return -1;
  if (a.size > b.size)
    return 1;
  return 0;
}

function sortReverse(){
  if(imgFiles.length ==0){
    return;
  }
  var temp = lastSortImgArry.reverse();
  $("#pageImages").empty();
  for(var i = 0; i < temp.length;i++){
    $("#pageImages").append(imgTagHelper(temp[i].name));
  }
}

// sets images back to default state
function displayImages(){
  $("#pageImages").empty();
  for(var i = 0; i < imgFiles.length;i++){
    $("#pageImages").append(imgTagHelper(imgFiles[i].name));
  }
}

$("#search_button").click( function(event) {
  event.preventDefault();
  search();
});

$("#exit_search_button").click( function(event) {
  event.preventDefault();
  displayImages();
});

function search(){
  var itemName = document.forms["form_1"]["search_text"].value;
  var tempStr = lastSortImgArry.map( x => x.name);
  var regexFromMyArray = new RegExp(tempStr.toString().replace(/,/g, '|'), 'gi');
  var matches = itemName.match(regexFromMyArray) || [];
  $("#pageImages").empty();
  if (matches.length == 0) {
    $("#pageImages").append("<h1>Could Not Find Item<h1>");
    return;
  }
  lastSortImgArry = [];
  for(var i = 0; i < matches.length; i++){
    lastSortImgArry.push(new OurImage (matches[i], "", ""));
     $("#pageImages").append(imgTagHelper(matches[i]));
   }
  return;
}
