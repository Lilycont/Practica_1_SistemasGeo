var initMap = () => {
    const coordenadas = {
      lat: 20.526698,
      lng: -101.371894,
    };
  
    var styledMapType = new google.maps.StyledMapType(
      [
        //COLOR DEL FONDO DEL MAPA
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#fff9f9",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        //RELLENO DE LAS ETIQUETAS
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#fec8d8",
            },
          ],
        },
        //BORDE DE LAS ETIQUETAS
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f6d2d6",
            },
          ],
        },
        // TEXTO PUNTOS DE INTERES
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f49eb7",
            },
          ],
        },
        //COLOR FONDO DE PARQUES
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#6e3b64",
            },
          ],
        },
        //COLOR DE TEXTO DE PARQUES
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f49eb7",
            },
          ],
        },
        //COLOR DE BORDE TE TEXTO DE PARQUES
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        //CAMINOS PEQUENIOS
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ff1087",
            },
          ],
        },
        //COLOR DEL TEXTO DE LOS CAMINOS GRANDES
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d291bc",
            },
          ],
        },
        //CAMINOS GRANDES
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ff82e6",
            },
          ],
        },
        //CARRETERAS
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#ff82e6",
            },
          ],
        },
        //COLOR TEXTO CAMINOS PEQUENIOS
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c080fb",
            },
          ],
        },
        //COLOR DE FONDO DEL AGUA
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#abf3ff",
            },
          ],
        },
        //COLOR DEL TEXTO DEL AGUA
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d",
            },
          ],
        },
      ],
      {
        name: "Pink Mode",
      }
    );
  
    icono = {
      url: "https://the-barberettes.co.uk/wp-content/uploads/2018/09/map-pin-icon.png",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(25, 50),
    };
  
    var properties = {
      center: coordenadas,
      zoom: 16,
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "style_map"],
      },
    };
  
    var mapa = document.getElementById("divMap");
  
    var map = new google.maps.Map(mapa, properties);
  
    new google.maps.Marker({
      position: coordenadas,
      map,
      title: "Abby's Store",
      icon: icono,
    });
    map.mapTypes.set("style_map", styledMapType);
    map.setMapTypeId("style_map");
  };
  