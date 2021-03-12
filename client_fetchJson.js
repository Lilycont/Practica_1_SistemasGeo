

        var paises = document.getElementById("paises");
        fetch('paises1.json')
        .then( function(response){

            response.json().then( function(datos){

                datos.forEach( registro => {
                    console.log(registro.country);
                    let nombre = document.createElement("p");
                    nombre.textContent = "País: " + registro.country + ", casos:" + registro.cases;
                    paises.appendChild(nombre);
                });
                

            });

        });

  