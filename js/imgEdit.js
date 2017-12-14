var folder = "imgs/", imgName;
$( document ).ready(function(){
  imgName = localStorage.imageName; ;
  $("#edit_img").append(
    "<div id='" + "imgthing" + "' >" +

    "<img src='"+ folder + imgName +"'>" +

    "</div>"
   );
});
