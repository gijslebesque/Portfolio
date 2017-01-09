
// declare map variable
var map

//set empty array to save markers
var markers = []



//initialize map

function initMap() {
	//Get style from JSON
$.getJSON('./assets/json_file/map_styling.json', (data) => {
		let styledMapType = new google.maps.StyledMapType(data,{name: 'Styled Map'})
		map.mapTypes.set('styled_map', styledMapType)
		map.setMapTypeId('styled_map')
	})
	//Constructor that creates a new map
	map = new google.maps.Map(document.getElementById('map'), {
		//center of the map
		center: {lat: 52.3717892, lng: 4.8926152},
		//level of zoom
		zoom: 15
	})
	//call findUserLocation
	findUserLocation()

	var infowindow = new google.maps.InfoWindow()

	var marker, i

}
//declare function
function findUserLocation () {
	//if nagviagor finds geolocation
	if (navigator.geolocation) {
		//create new infowindow
		infowindow = new google.maps.InfoWindow()
		//find coordinates of user's current possition
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		}
		navigator.geolocation.getCurrentPosition(function(position) {


			//Ajax resquest to get data from database
			$.get( "/data", function( data ) {

				currentPosition = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					author: "you",
					poem: "You are here"
				}

				data.push(currentPosition)

				//looping over database data (which is an array)
				for (var i = 0; i < data.length; i++) {
					marker = new google.maps.Marker({
				    	//get position from db
					    position: {lat: data[i].lat, lng: data[i].lng},
					    //load in map
					    map: map,
					    //let animations drop
					    animation: google.maps.Animation.DROP,
					    //title of marker is author of poem
					    title: data[i].author
					    //safe infowindow into marker object
					    
				    })


					markers.push(marker)
					console.log(marker)

				    google.maps.event.addListener(marker,'click', (function(marker,i) {
						//open infowindow when clicked.
						return function() {
							infowindow.close()
							infowindow.setContent(data[i].poem)
							infowindow.open(map, marker)

						}
					}) (marker,i))
					
				}

				for (var i = 0; i < markers.length; i++) {
					distance = google.maps.geometry.spherical.computeDistanceBetween(markers[9].position, markers[i].position)
					console.log(distance / 1000)
				}

			})

		}, function() {
			handleLocationError(true, marker, map.getCenter())
		}, options)
	} else {
      	// Browser doesn't support Geolocation
      	handleLocationError(false, marker, map.getCenter())
  	}

      //error handeling
    function handleLocationError(browserHasGeolocation, marker, currentPosition) {
      	location.setPosition(currentPosition);
      	location.setContent(browserHasGeolocation ?
      		'Error: The Geolocation service failed.' :
      		'Error: Your browser doesn\'t support geolocation.')
    }
 }