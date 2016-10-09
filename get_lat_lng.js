var locat;

function getLatLng(city_id, name){
	$.getJSON({
        url: "http://www.ncdc.noaa.gov/cdo-web/api/v2/stations?locationid=" + city_id,
        async: false,
      headers:{
        token: "BJeRYDACOJoPYouWqSbOBnuAzVOtHNQk"
      }
    }, function(data){
    	var city_to_id_and_latlng = {	"city_id": city_id,
    										"id": data.results[0].id,
    										"lat": data.results[0].latitude,
    										"lng": data.results[0].longitude
    									};
    	addPointToMap(city_to_id_and_latlng, name);
        locat = city_to_id_and_latlng;
    })
}

function submitPressed(){
	var names = [];
	resetMarkers();

	var e = document.getElementById("startpoint");
	names.push(e.options[e.selectedIndex].text);
    getLatLng(e.options[e.selectedIndex].id, e.options[e.selectedIndex].text);
    var port = getClosestAirport(locat);
    addPointToMap(port, port.name);
    names.push(port.name);

	e = document.getElementById("endpoint");
	names.push(e.options[e.selectedIndex].text);
	getLatLng(e.options[e.selectedIndex].id, e.options[e.selectedIndex].text);
    port = getClosestAirport(locat);
    addPointToMap(port, port.name);
    names.push(port.name);

	fillInSpaces(names);
}