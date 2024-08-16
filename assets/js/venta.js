const propiedades_venta = [
    {
        nombre: 'Residencia Vista Verde',
        src: '../assets/img/vent_residencia_verde.jpg',
        descripcion: 'Casa moderna con amplio jardín y vistas al parque.',
        ubicacion: 'Santiago, Chile',
        habitaciones: 4,
        banos: 3,
        costo: 350000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa del Lago',
        src: '../assets/img/vent_casa_lago.jpg',
        descripcion: 'Encantadora casa junto al lago, perfecta para familias.',
        ubicacion: 'Ginebra, Suiza',
        habitaciones: 3,
        banos: 2,
        costo: 900000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Penthouse en la Torre',
        src: '../assets/img/vent_torre_penthouse.jpg',
        descripcion: 'Lujoso penthouse en el centro financiero.',
        ubicacion: 'Ciudad de México, México',
        habitaciones: 5,
        banos: 3,
        costo: 1200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Villa Mediterránea',
        src: '../assets/img/vent_villa_mediterranea.jpg',
        descripcion: 'Hermosa villa con diseño mediterráneo y piscina privada.',
        ubicacion: 'Ibiza, España',
        habitaciones: 4,
        banos: 2,
        costo: 950000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Chalet de Madera',
        src: '../assets/img/vent_chalet_madera.jpg',
        descripcion: 'Chalet rústico en la montaña, ideal para invierno.',
        ubicacion: 'Chamonix, Francia',
        habitaciones: 3,
        banos: 2,
        costo: 800000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de Campo',
        src: '../assets/img/vent_casa_campo.jpg',
        descripcion: 'Casa de campo con huerto y establos.',
        ubicacion: 'Toscana, Italia',
        habitaciones: 5,
        banos: 3,
        costo: 650000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Dúplex Moderno',
        src: '../assets/img/vent_duplex_moderno.jpg',
        descripcion: 'Dúplex con diseño minimalista y tecnología de punta.',
        ubicacion: 'Berlín, Alemania',
        habitaciones: 3,
        banos: 2,
        costo: 500000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Mansión Clásica',
        src: '../assets/img/vent_mansion_clasica.jpg',
        descripcion: 'Mansión con arquitectura clásica y jardines extensos.',
        ubicacion: 'Londres, Reino Unido',
        habitaciones: 6,
        banos: 4,
        costo: 2500000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento Familiar',
        src: '../assets/img/vent_apartamento_familiar.jpg',
        descripcion: 'Amplio apartamento ideal para familias en zona tranquila.',
        ubicacion: 'Toronto, Canadá',
        habitaciones: 4,
        banos: 2,
        costo: 700000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Minimalista',
        src: '../assets/img/vent_casa_minimalista.jpg',
        descripcion: 'Casa con diseño minimalista y espacios abiertos.',
        ubicacion: 'Oslo, Noruega',
        habitaciones: 3,
        banos: 2,
        costo: 450000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Finca Ecológica',
        src: '../assets/img/vent_finca_ecologica.jpg',
        descripcion: 'Finca autosostenible con energías renovables.',
        ubicacion: 'Mendoza, Argentina',
        habitaciones: 4,
        banos: 2,
        costo: 530000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Loft Industrial',
        src: '../assets/img/vent_loft_industrial.jpg',
        descripcion: 'Loft con estilo industrial en zona artística.',
        ubicacion: 'Brooklyn, Estados Unidos',
        habitaciones: 2,
        banos: 1,
        costo: 850000,
        smoke: false,
        pets: false
    }
];

mostrarVenta();

function mostrarVenta(){
    let prop_ventas = document.getElementById('venta')
    let card_html = ``
    for (const pv of propiedades_venta) {
        card_html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${pv.src}" class="card-img-top" alt="del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">
                            ${pv.nombre}
                        </h5>
                        <p class="card-text">
                            ${pv.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${pv.ubicacion}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${pv.habitaciones} |
                            <i class="fas fa-bath"></i> ${pv.banos}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${pv.costo}</p>`
        if(pv.smoke){
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
        if(pv.pets){
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
    prop_ventas.innerHTML = `
        <h2>Propiedades en venta</h2>
        <div class="row">
        ` + card_html + `</div>`
}