var openModalProducts = (titulo, src1, src2, src3, src4, tit1, tit2, tit3, tit4, sub1, sub2, sub3, sub4) => {
    const carrousel =     
    '<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">'
    +'<div class="carousel-indicators">'
    +  '<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
    // INDICADOR CARRUSEL CAMBIAR INDEX
    +  '<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>'
    // FIN INDICADOR CARRUSEL
    +  '<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>'
    +  '<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>'
    +'</div>'
    +'<div class="carousel-inner">'
    +  '<div class="carousel-item active">'
    +    '<img src="'+src1+'" class="d-block w-100" alt="...">'
    +   '<div class="carousel-caption d-none d-md-block">'
    +    '<h5>'+tit1+'</h5>'
    +    '<p>'+sub1+'</p>'
    +   '</div>'
    +  '</div>'
    // INICIO ITEM DE CARRUSEL
    +  '<div class="carousel-item">'
    +    '<img src="'+src2+'" class="d-block w-100" alt="...">'
    +   '<div class="carousel-caption d-none d-md-block">'
    +    '<h5>'+tit2+'</h5>'
    +    '<p>'+sub2+'</p>'
    +   '</div>'
    +  '</div>'
    // FIN ITEM DE CARRUSEL
    +  '<div class="carousel-item">'
    +    '<img src="'+src3+'" class="d-block w-100" alt="...">'
    +   '<div class="carousel-caption d-none d-md-block">'
    +    '<h5>'+tit3+'</h5>'
    +    '<p>'+sub3+'</p>'
    +   '</div>'
    +  '</div>'
    +  '<div class="carousel-item">'
    +    '<img src="'+src4+'" class="d-block w-100" alt="...">'
    +   '<div class="carousel-caption d-none d-md-block">'
    +    '<h5>'+tit4+'</h5>'
    +    '<p>'+sub4+'</p>'
    +   '</div>'
    +  '</div>'
    +'</div>'
    +'<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">'
    +  '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
    +  '<span class="visually-hidden">Previous</span>'
    +'</button>'
    +'<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">'
    +  '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
    +  '<span class="visually-hidden">Next</span>'
    +'</button>'
    +'</div>'

    Swal.fire({
        title: `<strong><u>${titulo}</u></strong>`,
        html: carrousel,
        showConfirmButton: false,
    })
}

var openModalRings = (titulo, precio, imgUrl) => {
    Swal.fire({
        title: titulo,
        text: precio,
        imageUrl: imgUrl,
        imageWidth: 400,
        imageHeight: 400,
        showConfirmButton: false,
    })
}