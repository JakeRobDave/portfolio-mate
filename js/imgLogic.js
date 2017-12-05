var folder = "imgs/",
newImgSpot = "<div class=\"image\" id=\"image\"></div>";

$(document).ready(function(){
  $("#image").each(function(i){
    $(this).append("<img src='"+folder+(i)+".png' width='79' height='79' />");
  });
});
