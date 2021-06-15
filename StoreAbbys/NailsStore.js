var cargarNails = () => {
    var rowList = document.getElementById('rowList')
    // '<div class="col-md-3 col-sm-6 col-12 text-center fuente1">'
    // + '<img src="'+  +'"  height="550" width="1000" class="img-fluid" >'
    // +  '<p class="my-1">'+  +'</p>'
    // + '<p class="my-2">Precio</p>'
    // + '<p>$'+  +'</p></div>'

    fetch('https://01hbx16x69.execute-api.us-east-2.amazonaws.com/produccion/api/nails')
    .then(response => response.json())
    .then((data) => {
        data.forEach(e => {
        const div = '<div class="col-md-3 col-sm-6 col-12 text-center fuente1">'
        + '<img src="'+ e.imagen +'"  height="550" width="1000" class="img-fluid" >'
        +  '<p class="my-1">'+ e.nombre +'</p>'
        + '<p class="my-2">Precio</p>'
        + '<p>$'+ e.precio +'</p></div>'
        rowList.innerHTML += div;
        });
    });
}

var cargarRandom = () =>{
    var imgGrande = document.getElementById("imgGrande");

    fetch('https://01hbx16x69.execute-api.us-east-2.amazonaws.com/produccion/api/nails/random')
    .then(response => response.json())
    .then((data) => {
        imgGrande.src = data[0].imagen;
    });
}

cargarRandom();
cargarNails();