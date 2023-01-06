//e.keycode hangi tusa basıldıgını verir
var numberOfButtons =
	document.querySelectorAll(".button").length; //7 suan

for (var j = 0; j < numberOfButtons; j++) {//tüm butonlara eventlistener ekleme 0 1 2 3 tıklandıgında

document.querySelectorAll(".button")[j]
.addEventListener("click", function(e) {
console.log("agaa")
console.log(this)
console.log(e.target) //! this e.target yerine geciyor burada aynı deger veriyor  divini
console.log(this.innerHTML) //! this e.target yerine geciyor burada aynı deger veriyor  divini
console.log(e.target.innerHTML) //! this e.target yerine geciyor burada aynı deger veriyor  divini
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);

    
});
}

document.addEventListener("keypress", function(event) {
   console.log("bastıgın tusun keycodu:"+event.keyCode)
   console.log("bastıgın tusun keyi:"+event.key)
sound(event.key);
animation(event.key);
    

});


function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("./1.mp3");
	sound1.play();
	Audio.currentKey="";

	break;

	case "a":
	var sound2 = new Audio("./2.mp3");
	sound2.play();
	
	break;

	case "s":
	var sound3 = new Audio("./1.mp3");
	sound3.play();

	break;

	case "d":
	var sound4 = new  Audio("./2.mp3");
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio("./3.mp3");
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio("./1.mp3");
	sound6.play();
	break;

	case "l":
	var sound7 =new Audio("./1.mp3");
	sound7.play();
	break;

	default: console.log(key+" switch case defaulttan geliyor");
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
