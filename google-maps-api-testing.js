
  $(document).ready(function(){
      //create the map, import geojson and proportional circles based on population   

      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(39.766903, -86.177086),
        mapTypeId: 'roadmap',
      });

      map.data.loadGeoJson('https://hifld-dhs-gii.opendata.arcgis.com/datasets/4061dcd767c340d4a42fb7a0c6c5d5b4_0.geojson');

      var count = 0; //number of entries

      map.data.addListener('addfeature', (function(event){
        //each time a feature gets added
        count++;        
      }))

      map.data.addListener('click', (function(event){
        //displays the name on click
        console.log(count);
         new google.maps.InfoWindow({
          content: "<div id='content'>" + event.feature.getProperty("NAME") + "<p>Population: " + event.feature.getProperty("POPULATION") + "</div>",
          position: new google.maps.LatLng(event.feature.getProperty('LATITUDE'), event.feature.getProperty('LONGITUDE'))
        }).open(map)
      }))

      map.data.setStyle(function(feature) {
        //changes from default marker to proportional circle (with helper method)
        return {
          icon: getCircle(feature.getProperty('POPULATION'))
        };
      });

      function getCircle(magnitude) {
      var circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(magnitude, .5) / 10,
        strokeColor: 'white',
        strokeWeight: .5
      };
      return circle;
    }
  })