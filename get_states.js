function getStates(){
  requestStates("http://www.ncdc.noaa.gov/cdo-web/api/v2/locations?locationcategoryid=CITY&sortfield=name&sortorder=asc&limit=1000&offset=1001");
  requestStates("http://www.ncdc.noaa.gov/cdo-web/api/v2/locations?locationcategoryid=CITY&sortfield=name&sortorder=asc&limit=1000");
}


function requestStates(states_url){
  var states_mapped_to_locations = new Object();
  var location = null;
$.getJSON({ url: states_url,
      headers:{
        token: "BJeRYDACOJoPYouWqSbOBnuAzVOtHNQk"
      }
    }, function(data){
      const array_length = data.results.length;
      for (var i = 0; i < array_length; i++){
        var id = data.results[i].id;
        if (id.startsWith("CITY:US")){
          location = data.results[i].name.replace(" US", "").trim();
          states_mapped_to_locations[id] = location;
        }
      }
      for(propertyName in states_mapped_to_locations){
        $('.citylist').append("<option id=" + propertyName + ">" + states_mapped_to_locations[propertyName] + "</option>");
      }
    });
}