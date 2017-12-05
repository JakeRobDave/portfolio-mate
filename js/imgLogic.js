var folder = "imgs/",
newImgSpot = "<div class=\"image\" id=\"image\"></div>";

$('#f').on('change', function(ev) {
    var f = ev.target.files[0];
    var fr = new FileReader();

    fr.onload = function(ev2) {
        console.dir(ev2);
        $('#i').attr('src', ev2.target.result);
    };

    fr.readAsDataURL(f);
});

$(document).ready(function(){
  $("#image").each(function(i){
    $(this).append("<img src='"+folder+(i)+".png' width='79' height='79' />");
  });
});
