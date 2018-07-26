$(document).ready(function(){ 
	console.log("Ready!");


	
	$("#enter_button").click(function() {

		
		var animal = $("#animal").val();

		
		if (animal == ("small dog")) {
			var image_source = "https://cms-uploads.adoptapet.com/4/5/c/9.png";	
			console.log("hi");
		} 
		else if (animal == "big dog") {
			image_source = "http://kissmycocoa.com/logos/TexTrans.gif";	
			$("#animal_image").html("");
		}
		
		else if(animal== "medium dog") {
			image_source = "https://images.wagwalkingweb.com/media/breed/airedale-terrier/appearance/airedale-terrier.png?auto=compress&fit=max";
			$("#animal_image").html("")
		}
		
		else {
			$("#error_message").html("Not a small dog, medium dog or big dog!");
		}
		
		$("#animal_image").attr('src', image_source);

	});

});