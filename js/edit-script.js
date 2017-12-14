/*
 * Robert Cucchiara
 * created: 12/8/2017
 * last update: 12/8/2017
 * 
 * This file contains all of the scripts for editing an image
 */

/////////////////////////////////////////////
///// GLOBAL VARIABLES BE HERE //////////////
var CANVAS_ROTATION = 0; // current rotation angle 
var isGreyscale = 0, isInverted = 0; /* sets up the canvas for stuff*/
	
$(document).ready(function(){
	var imgPath = sessionStorage.getItem("path");
	var imgName = sessionStorage.getItem("image-name");
	
	var img = document.createElement("img");
	img.setAttribute("src", imgPath);
	img.setAttribute("data-name", imgName);
	img.setAttribute("id", "imgSource");
	img.setAttribute("style", "display: none;");

	///$('#canvasPicture').append(img);
    document.body.appendChild(img);

    Caman("#editCanvas", imgPath, function(){
        this.brightness(5).render();
    });
    
    var image = document.getElementById("imgSource");
    $("#resWidth").val(image.width);
    $("#resHeight").val(image.height);
    $("#cropWidth").val(image.width);
    $("#cropHeight").val(image.height);
	
});

function updateImage(){
	
    var bright = parseInt($("#brightVal").val());
    var cntrst = parseInt($("#contrastVal").val());
    var     r = parseInt($("#redVal").val()),
            g = parseInt($("#greenVal").val()),
            b = parseInt($("#blueVal").val());
    
    console.log("updating!");
    if(isGreyscale){
        Caman("#editCanvas", function(){
            this.revert();
            this.brightness(bright)
                    .contrast(cntrst)
                    .channels({red: r, green: g, blue: b})
                    .greyscale()
                    .render();
        });
    } else {
        Caman("#editCanvas", function(){
            this.revert();
            this.brightness(bright)
                    .contrast(cntrst)
                    .channels({red: r, green: g, blue: b})
                    .render();
        });
    }
}

$("#brightVal, #contrastVal, #redVal, #greenVal, #blueVal").on("change", function(){
    updateImage();
});

$(function(){
    $("#brightness-slider").slider({
        range: "min",
        max: 5,
        min: -5,
        step: .1,
        value: 0,
        slide: function(event, ui){
            $("#brightVal").val(ui.value);
            updateImage();
        }
    });
    $("#brightness-slider").slider("value", 5);
    $("#brightVal").val($("#brightness-slider").slider("value"));
});

$("#brightVal").on("change", function(){
   $("#brightness-slider").slider("value", this.value); 
});

$(function(){
    $("#contrast-slider").slider({
        range: "min",
        max: 5,
        min: -5,
        step: .1,
        value: 0,
        slide: function(event, ui){
            $("#contrastVal").val(ui.value);
            updateImage();
        }
    });
    $("#contrast-slider").slider("value", 0);
    $("#contrastVal").val($("#contrast-slider").slider("value"));
});

$("#contrastVal").on("change", function(){
   $("#contrast-slider").slider("value", this.value); 
});

$(function(){
    $("#red-slider").slider({
        range: "min",
        max: 100,
        min: -100,
        step: 1,
        value: 0,
        slide: function(event, ui){
            $("#redVal").val(ui.value);
            updateImage();
        }
    });
    $("#red-slider").slider("value", 0);
    $("#redVal").val($("#red-slider").slider("value"));
});

$("#redVal").on("change", function(){
   $("#red-slider").slider("value", this.value); 
});

$(function(){
    $("#green-slider").slider({
        range: "min",
        max: 100,
        min: -100,
        step: 1,
        value: 0,
        slide: function(event, ui){
            $("#greenVal").val(ui.value);
            updateImage();
        }
    });
    $("#green-slider").slider("value", 0);
    $("#greenVal").val($("#green-slider").slider("value"));
});

$("#greenVal").on("change", function(){
   $("#green-slider").slider("value", this.value); 
});

$(function(){
    $("#blue-slider").slider({
        range: "min",
        max: 100,
        min: -100,
        step: 1,
        value: 0,
        slide: function(event, ui){
            $("#blueVal").val(ui.value);
            updateImage();
        }
    });
    $("#blue-slider").slider("value", 0);
    $("#blueVal").val($("#blue-slider").slider("value"));
});

$("#blueVal").on("change", function(){
   $("#blue-slider").slider("value", this.value); 
});

function closeFilters(){
    //document.getElementById("imgEditor").style.display = "none";
    //document.getElementById("resoCropRot").style.display = "inline";
}

function applyResAndCrop(){
    var resWidth = parseInt($("#resWidth").val()),
        resHeight = parseInt($("#resHeight").val());
    var cropWidth = parseInt($("#cropWidth").val()),
        cropHeight = parseInt($("#cropHeight").val()),
        cropX = parseInt($("#cropX").val()),
        cropY = parseInt($("#cropY").val());

    if(document.getElementById("resToCrop").checked){
        
        Caman("#editCanvas", function(){
            this.resize({width: resWidth, height: resHeight});
            this.crop(cropWidth, cropHeight, cropX, cropY);
            this.render();
        });
        
    } else if(document.getElementById("cropToRes").checked){
        
            Caman("#editCanvas", function(){
            this.crop(cropWidth, cropHeight, cropX, cropY);
            this.resize({width: resWidth, height: resHeight});
            this.render();
        });
        
    }

}

function setGreyscale(){
    if(isGreyscale){
        isGreyscale = 0;
    } else {
        isGreyscale = 1;
    }
    updateImage();
}

function replaceImage(someData) {
	
	var formData = new FormData(); // Currently empty
	formData.set('fileToUpload', someData, sessionStorage.getItem("image-name") );
	
		$.ajax({
			type: "POST",
			url: "./imgs/upload.php",
			data: formData, //{'file' : someData}, // someData, //{'file': c},
			contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
			processData: false, // NEEDED, DON'T OMIT THIS
			cache: false,
			success: function(html){
					alert(html);
			}
		});
}

function finishEditing(){
		
    var image = new Image();
    var c = document.getElementById("editCanvas");
    try {
    image.src = c.toDataURL();	//robs stuff
	
	var someData  = c.toDataURL();	// image to data
	
	replaceImage(someData);
		
    var w = window.open('about:blank','image from canvas');
	
    w.document.write("<img src='"+ image +"' alt='from canvas'/>\n\
         <p>add this image to portfolio mate to save changes, sorry this isnt ideal</p>");
    } catch(err){
        alert("I am sorry, an error occured and we could not save your changes");
    }
    //DAVE IF YOU ARE READING THIS YOU PROBABLY WANT TO CLOSE THE WINDOW HERE, MAYBE...
}

function rotateImage(){
    CANVAS_ROTATION += 90;
    if(CANVAS_ROTATION > 360){
        CANVAS_ROTATION = 0;
    }
    console.log(CANVAS_ROTATION);
    Caman("#editCanvas", function(){
        this.rotate(CANVAS_ROTATION);
    });
}