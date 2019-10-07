

// Code used from Google Maps API documentation //
  
var map;
var infowindow;
var center = {lat: 53.3498, lng: -6.2603}
var request;
var service;
var markers = [];


function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12,
     styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
  });





request ={
  location: center,
  radius: 5000,
  types: ['night_club']

};

infowindow = new google.maps.InfoWindow();

service = new google.maps.places.PlacesService(map);

service.nearbySearch(request, callback);

google.maps.event.addListener(map, 'rightclick', function(event) {
  map.setCenter(event.latLng)
  clearResults(markers)
  
  var request = {
    location: event.latLng,
    radius: 5000,
    types: ['night_club']
  };
  service.nearbySearch(request, callback);
})


}

function callback(results, status) {
  if(status ==google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
     markers.push(createMarker(results[i]));
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  })
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  return marker;
}

function clearResults(markers) {
  for (var m in markers) {
    markers[m].setMap(null)
  }
  markers = []
}

google.maps.event.addDomListener(window, 'load', createMap);

/* onClick background image change */

//var images=new Array('https://images.unsplash.com/photo-1565882135296-49e76ca5b2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1422745621071-c0fc788eebfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1554191765-016992e268ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');


$(".navbar-brand").on(click, function() {
     $("body").style('background-image', 'url(../images/dublin-orange.jpg)');
    
 });


