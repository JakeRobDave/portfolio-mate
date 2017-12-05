var folder = "imgs/",
newImgSpot = "<div class=\"image\" id=\"image\"></div>";

$(document).ready(function(){
  $("#image").each(function(i){
    $(this).append("<img src='"+folder+(i)+".png' width='79' height='79' />");
  });
});


$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("body").append( "<img src='"+ folder + val +"'>" );
            }
        });
    }
});
