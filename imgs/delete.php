<?php
		
//This one automatically adds the PRE tags around the var_dump output so you get nice formatted arrays.
function var_dump_pre($mixed = null) {
  echo '<pre>';
  var_dump($mixed);
  echo '</pre>';
  return null;
}
//This one returns the value of var_dump instead of outputting it.
function var_dump_ret($mixed = null) {
  ob_start();
  var_dump($mixed);
  $content = ob_get_contents();
  ob_end_clean();
  return $content;
}

$target_dir = "./";
$target_file = $target_dir . basename($_FILES["fileToDelete"]["name"]);
$deleteSuccess = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ". " ;
        $uploadOk = 1;
		//addded this line
		echo 'Hello ' . htmlspecialchars($_FILES["name"]) . '!';
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
	
	//new - DAVIDS ADDITION, still doesn't work
	//chmod($target_file,0755); //Change the file permissions if allowed
    
	//If file doesn't exist, error
	if(!unlink($target_file)) {
		echo ("Error deleting $target_file");
	}	
	else {
		echo "The file ". basename($_FILES["fileToDelete"]["name"]). " has been deleted.".
			'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
			<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js"></script>
			<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/additional-methods.min.js"></script>';
	} //.'<script> $( document ).ready(function() {window.location.href = "../landing.html";});</script>'
} else {
	echo "The file ". basename($_FILES["fileToDelete"]["name"]). " is not in our portfolio.".
			'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
			<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js"></script>
			<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/additional-methods.min.js"></script>';
}

?>
