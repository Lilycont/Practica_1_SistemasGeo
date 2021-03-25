var iniciaMapa = () => {

    var styledMapType = new google.maps.StyledMapType(
      [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#212121"
          }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#212121"
          }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
            "color": "#8A18C4"
          }]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#00610b"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1b1b1b"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#2c2c2c"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#EF8CD4"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#F887B1"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3c3c3c"
          }]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
            "color": "#AC174E"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#D5B2C1"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#52CBE0"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3d3d3d"
          }]
        }
      ], {
        name: 'Mapa Oscuro'
      }
    );
  
    var propiedades = {
      center: {
        lat: 21.152639,
        lng: -101.711598,
      },
      zoom: 14,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
      }
    };
  
  
    var mapa = document.getElementById('map');
  
    var map = new google.maps.Map(mapa, propiedades);
  
    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');
  }