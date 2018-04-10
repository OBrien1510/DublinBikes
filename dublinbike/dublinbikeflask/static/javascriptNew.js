// Alasa's function to open up a new pop-up window when one of the markers is selected.
// The URL needs to be changed to show the weather and station Google charts, etc.
function poponclick(){
    var testwindow = window.open("detailed", "_blank",  "width=600,height=400");
    testwindow.moveTo(400, 400);
}
  
function mapInit() {    
	var mapCenter = {lat: 53.3498, lng: -6.2603};
    var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 14, 
    center: mapCenter});
  		
  	$.getJSON($SCRIPT_ROOT + '/_map_data', function(data) {
      				
      	// Create empty array 'index'
		var index = [];
		// Add (i.e. 'push') the next xID item to the array
      	for(var xID in data) {
      		index.push(xID);		
      	}
      			
      	// Create empty array 'index'
		var index = [];
		// Add (i.e. 'push') the next xID item to the array
      	for(var xID in locations) {
      		index.push(xID);		
      	}
          
      	// Fill map up with markers based on json data
        // Right now all markers are being generated, but they are being given all the same
        // content, when they should be given content depending on their own personal info.
		for(i = 0; i < index.length; i++) {
        	var myUrl = "stations/"+i;
    		var mytext = index[i] + "<br> Station No.: " + "<br> Free bikes: <br>" + "<a id='popUp' href='#' onclick='poponclick();return false;'>Click for more details</a>";
            var myinfowindow = new google.maps.InfoWindow({content: mytext});
    			
      	// Fill map up with markers based on json data
        // Right now all markers are being generated, but they are being given all the same
        // content, when they should be given content depending on their own personal info.
		for(i = 0; i < index.length; i++) {
    		var mytext = index[i] + "<br> Station No.: " + "<br> Free bikes: ";
    		var myinfowindow = new google.maps.InfoWindow({content: mytext});
             
			var position = new google.maps.LatLng(data[index[i]].latitude, data[index[i]].longitude);
        	var contentString = '<div>' +
        						'<h2>' + index[i] + '</h2>' +
        						'<p>Available Bikes: ' + data[index[i]].available_bikes + '</p>' +
        						'<p>Available Bike Stands: ' + data[index[i]].available_stands + '</p>' +
        						'</div>';
        			
        	var myinfowindow = new google.maps.InfoWindow({content: contentString});
        			
    		var marker = new google.maps.Marker({
    			position: position, 
    			map: map,
    			infowindow: myinfowindow
    		});
    				
    		google.maps.event.addListener(marker, 'click', function() {
        		this.infowindow.open(map, this);
			});
    				
		}
				
	});

}
      	
window.setInterval(function(){
  	mapInit()
}, 300000);