var playing = false;
var audio;

function playMusic(song){
	if(!playing){
		audio = new Audio(song);
		audio.play(song);
		playing = true;
	} else{
		audio.pause(song);
		playing = false;
	}
}

document.getElementById("sondre").onmouseover = function(){
	document.getElementById("sondreoggud").style.visibility = "visible";
} 

document.getElementById("sondre").onmouseleave = function(){
	document.getElementById("sondreoggud").style.visibility = "hidden";
} 

function myMap() {
  var myCenter = new google.maps.LatLng(59.916904,10.742683);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  map.setZoom(17);
}

