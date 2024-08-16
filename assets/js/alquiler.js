const propiedades_alquiler = [
    {
        nombre: 'Casa del Mar',
        src: '../assets/img/alq_casa_mar.jpg',
        descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
        ubicacion: 'Cancún, México',
        habitaciones: 3,
        banos: 2,
        costo: 2500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento Urbano',
        src: '../assets/img/alq_apartamento_urbano.jpg',
        descripcion: 'Moderno apartamento en el centro de la ciudad.',
        ubicacion: 'Madrid, España',
        habitaciones: 2,
        banos: 1,
        costo: 1800,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Villa de la Montaña',
        src: '../assets/img/alq_villa_montana.jpg',
        descripcion: 'Villa acogedora en la cima de la montaña.',
        ubicacion: 'Aspen, Estados Unidos',
        habitaciones: 4,
        banos: 2,
        costo: 3500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Cabaña del Bosque',
        src: '../assets/img/alq_cabana_bosque.jpg',
        descripcion: 'Cabaña rústica en medio de un bosque tranquilo.',
        ubicacion: 'Bariloche, Argentina',
        habitaciones: 2,
        banos: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de Lujo',
        src: '../assets/img/alq_penthouse_lujo.jpg',
        descripcion: 'Penthouse exclusivo con vista panorámica de la ciudad.',
        ubicacion: 'Nueva York, Estados Unidos',
        habitaciones: 5,
        banos: 3,
        costo: 7000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa Campestre',
        src: '../assets/img/alq_casa_campestre.jpg',
        descripcion: 'Encantadora casa rodeada de naturaleza.',
        ubicacion: 'Toscana, Italia',
        habitaciones: 3,
        banos: 2,
        costo: 2800,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento Estudio',
        src: '../assets/img/alq_apartamento_estudio.jpg',
        descripcion: 'Pequeño y funcional estudio ideal para una persona.',
        ubicacion: 'Tokio, Japón',
        habitaciones: 1,
        banos: 1,
        costo: 900,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Villa en la Playa',
        src: '../assets/img/alq_villa_playa.jpg',
        descripcion: 'Amplia villa con acceso directo a la playa.',
        ubicacion: 'Phuket, Tailandia',
        habitaciones: 4,
        banos: 2,
        costo: 3200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Colonial',
        src: '../assets/img/alq_casa_colonial.jpg',
        descripcion: 'Casa histórica con detalles coloniales.',
        ubicacion: 'Cartagena, Colombia',
        habitaciones: 3,
        banos: 2,
        costo: 2400,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft Artístico',
        src: '../assets/img/alq_loft_artistico.jpg',
        descripcion: 'Espacioso loft con diseño moderno y minimalista.',
        ubicacion: 'San Francisco, Estados Unidos',
        habitaciones: 2,
        banos: 1,
        costo: 2600,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en la Selva',
        src: '../assets/img/alq_casa_selva.jpg',
        descripcion: 'Casa en plena selva con vistas impresionantes.',
        ubicacion: 'Amazonas, Brasil',
        habitaciones: 3,
        banos: 1,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Chalet Alpino',
        src: '../assets/img/alq_chalet_alpino.jpg',
        descripcion: 'Chalet en los Alpes con vistas a las montañas nevadas.',
        ubicacion: 'Zermatt, Suiza',
        habitaciones: 4,
        banos: 3,
        costo: 4000,
        smoke: false,
        pets: false
    }
]

mostrarVenta();

function mostrarVenta(){
    let prop_alquileres = document.getElementById('alquiler')
    let card_html = ``
    for (const pa of propiedades_alquiler) {
        card_html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${pa.src}" class="card-img-top" alt="del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">
                            ${pa.nombre}
                        </h5>
                        <p class="card-text">
                            ${pa.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${pa.ubicacion}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${pa.habitaciones} |
                            <i class="fas fa-bath"></i> ${pa.banos}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${pa.costo}</p>`
        if(pa.smoke){
            card_html += `
                        <p class="text-success">
                            <i class="fas fa-smoking"></i> Permitido fumar
                        </p>
                    `
        }
        else{
            card_html += `
                        <p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>
                    `
        }
        if(pa.pets){
            card_html += `
                        <p class="text-success">
                            <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>
                    `
        }
        else{
            card_html +=`
                        <p class="text-danger">
                            <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>
                    `
        }
        card_html +=`
                    </div>
                </div>
            </div>
        `
    }
    prop_alquileres.innerHTML = `
        <h2>Propiedades en alquiler</h2>
        <div class="row">
        ` + card_html + `</div>`
}