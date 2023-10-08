let time = new Date().getHours();
const background = document.getElementsByClassName("body")[0];
const icon = document.getElementsByClassName("icon")[0];
const header = document.getElementsByClassName("header")[0];
const logo = document.getElementsByClassName("logo")[0];
const blocks = document.getElementsByClassName("block");

function changeToNightThem() {
    background.style.backgroundImage = "url('backgrounds/night_bg.jpg')";
    icon.src = "icons/moon.png";
    header.style.background = "#293e61";
    logo.src = "icons/QT5night.png";
   	blocks.style.backgroundColor = "rgb(252,213,126)";
}

    
if (time < 8 || time > 8) {
	changeToNightThem();
	
	for (const elem in blocks) {
		console.log("dohodit");
		console.log(elem);
		elem.style.backgroundColor = "rgb(252,213,126)";
		}
	
}
