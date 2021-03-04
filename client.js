const datos = [
  {
    posicion: {
      lat: 21.152639,
      lng: -101.711598,
    },
    titulo: "Universidad DeLaSalle Bajío AC.",
    direccion:
      "Avenida Universidad 602, Lomas del Campestre, 37150 León, Gto, México.",
    telefono: "477 710 8500.",
    imagen: "src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Rector%C3%ADa.jpg/386px-Rector%C3%ADa.jpg",
  },
  {
    posicion: {
      lat: 20.526659,
      lng: -101.371897,
    },
    titulo: "Tienda Abby",
    direccion: "Privada El Tucan #111",
    telefono: "429 6950093",
    imagen: "src=https://images.unsplash.com/photo-1587651113910-f4f7d5e6b2d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    posicion: {
      lat: 20.530815695017534,
      lng: -101.37156227983898,
    },
    titulo: "Unidad Deportiva",
    direccion: "Ex, Hda. Cerro Gordo S/N, Club Campestre, León, Gto., México",
    telefono: "429 6950093",
    imagen: "src=https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
  },
  {
    posicion: {
      lat: 20.524369,
      lng: -101.374858,
    },
    titulo: "Hogar",
    direccion: "Francisco I Madero ",
    telefono: "429 6950093",
    imagen: "src=https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  },
  {
    posicion: {
      lat: 20.5267228,
      lng: -101.3774252,
    },
    titulo: "Jardin",
    direccion: "Centro ",
    telefono: "429 6950093",
    imagen: "src=https://images.unsplash.com/photo-1565969142815-787d35173249?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

const retornarString = (nombre, direccion, telefono,imagen) => {
  let informacion = `<div class='card'><h1>${nombre}</h1>`;
  informacion += `<h6>Dirección:<p>${direccion}</p></h6>`;
  informacion += `<h6>Teléfono:<p>${telefono}</p></h6>`;
  informacion += `<img class=' img-fluid rounded'${imagen}></div>`;

  return informacion;
};

function iniciaMapa() {
  var propiedades = {
    center: {
      lat: 21.152639,
      lng: -101.711598,
    },
    zoom: 14,
  };

  const mapa = document.getElementById("map");
  const map = new google.maps.Map(mapa, propiedades);

  

  for(let i=0;i<datos.length;i++){
    let d=datos[i];
    let index;
    
        let propiedadesMarcador = {
          position: d.posicion,
          map,
          title: `Marcardor ${index}`,
        };
    
        let marcador = new google.maps.Marker(propiedadesMarcador);
    
        map.setCenter(d.posicion);
    
        let infowindow = new google.maps.InfoWindow({
          content: retornarString(d.titulo, d.direccion, d.telefono,d.imagen),
        });
    
        marcador.addListener("click", () => {
          infowindow.open(map, marcador);
        });
    
    }



}
