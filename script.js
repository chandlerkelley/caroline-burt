// function playSound(soundfile) {
//   // document.getElementById("click").innerHTML= "<embed src='audio/click.mp3' hidden='true' autostart='true' loop='false' />";
//   document.getElementById("click").innerHTML= "<embed src='audio/click.ogg' hidden='true' autostart='true' loop='false' />";
// }

$(function() {
	
	function changeTitle() {
		switch($(".home-title").attr("src")) {
		case "images/caroline-title.png":
			$(".home-title").attr("src", "images/caroline-title-blue.png")
			break;
		case "images/caroline-title-blue.png":
			$(".home-title").attr("src", "images/caroline-title-green.png")
			break;
		case "images/caroline-title-green.png":
			$(".home-title").attr("src", "images/caroline-title-gold.png")
			break;
		case "images/caroline-title-gold.png":
			$(".home-title").attr("src", "images/caroline-title.png")
			break;
		default:
			console.log("Error")
		}
	};
	
	setInterval(changeTitle, 160);
})