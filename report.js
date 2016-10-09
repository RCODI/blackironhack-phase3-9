function fillInSpaces(names_of_cities){
	console.log("Filling in spaces")
	var count = 0;
	const spacing_number = 12 / names_of_cities.length;
	names_of_cities.forEach(function(name){
		console.log(name);
		$("#report-container").append("<div class=\" report-city col-md-" + spacing_number + "\">" + name + "</div>");
	});
	$(".report-city").each(function(){
		$(this).append("<div class=\" circle city-info\" id=\"" + count + "\"></div>");
		var value = getRandomInt(0, 101);
		Circles.create({
			id: count,
			value,
			radius: 50,
			width: 10,
			number: 7.13,
			text: "" + value + "%",
			colors:     ['#D3B6C6', '#4B253A'],
    		duration:   400
		})
		count++;
	})
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getClosestAirport(locat){
	var shortest_distance = 1000000;
	var closest_airport = locat;
	airports.forEach(function(airport){
		var new_distance = google.maps.geometry.spherical.computeDistanceBetween(
			new google.maps.LatLng(locat.lat, locat.lng), new google.maps.LatLng(airport.lat, airport.lng));
		if(shortest_distance > new_distance){
			shortest_distance = new_distance;
			closest_airport = airport;
		}
	})
	console.log(closest_airport);
	return closest_airport;
}

//google.maps.geometry.spherical.computeDistanceBetween (latLngA, latLngB);