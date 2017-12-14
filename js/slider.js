$(function() {
	
	$("#brightSlider").slider({ 
		range: "min",
		    step: 1,
		    min: 600,
		    max: 999999,
		    value: 600,
		    slide: function( event, ui ) {
		    $("#brightness").val( ui.value );
		    $(ui.value).val($('#brightness').val());
		}
	    });
	
	$("#brightness").keyup(function() {
		$("#brightSlider").slider("value" , $(this).val())
		    });
	
	$( "#brightness" ).on( "change", function() {
		$( "#brightSlider" ).slider( "value", this.value );
	    });









	$("#contrastSlider").slider({
		range: "min",
                    step: 1,
                    min: 600,
                    max: 999999,
                    value: 600,
                    slide: function( event, ui ) {
                    $("#contrast").val( ui.value );
                    $(ui.value).val($('#contrast').val());
		}
            });

        $("#contrast").keyup(function() {
		$("#contrastSlider").slider("value" , $(this).val())
                    });

        $( "#contrast" ).on( "change", function() {
		$( "#contrastSlider" ).slider( "value", this.value );
            });








        $("#colorSlider").slider({
		range: "min",
                    step: 1,
                    min: 600,
                    max: 999999,
                    value: 600,
                    slide: function( event, ui ) {
                    $("#color").val( ui.value );
                    $(ui.value).val($('#color').val());
		}
            });

        $("#color").keyup(function() {
		$("#colorSlider").slider("value" , $(this).val())
                    });

        $( "#color" ).on( "change", function() {
		$( "#colorSlider" ).slider( "value", this.value );
            });


    });
