const propiedades_alquiler = [
    {
        nombre: 'Casa del Mar',
        src: 'assets/img/alq__casa_mar.jpg',
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
        src: 'assets/img/alq__apartamento_urbano.jpg',
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
        src: 'assets/img/alq__villa_montana.jpg',
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
        src: 'assets/img/alq__cabana_bosque.jpg',
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
        src: 'assets/img/alq__penthouse_lujo.jpg',
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
        src: 'assets/img/alq__casa_campestre.jpg',
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
        src: 'assets/img/alq__apartamento_estudio.jpg',
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
        src: 'assets/img/alq__villa_playa.jpg',
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
        src: 'assets/img/alq__casa_colonial.jpg',
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
        src: 'assets/img/alq__loft_artistico.jpg',
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
        src: 'assets/img/alq__casa_selva.jpg',
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
        src: 'assets/img/alq__chalet_alpino.jpg',
        descripcion: 'Chalet en los Alpes con vistas a las montañas nevadas.',
        ubicacion: 'Zermatt, Suiza',
        habitaciones: 4,
        banos: 3,
        costo: 4000,
        smoke: false,
        pets: false
    }
]

const propiedades_venta = [
    {
        nombre: 'Residencia Vista Verde',
        src: 'assets/img/vent_residencia_verde.jpg',
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
        src: 'assets/img/vent_casa_lago.jpg',
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
        src: 'assets/img/vent_torre_penthouse.jpg',
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
        src: 'assets/img/vent_villa_mediterranea.jpg',
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
        src: 'assets/img/vent_chalet_madera.jpg',
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
        src: 'assets/img/vent_casa_campo.jpg',
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
        src: 'assets/img/vent_duplex_moderno.jpg',
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
        src: 'assets/img/vent_mansion_clasica.jpg',
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
        src: 'assets/img/vent_apartamento_familiar.jpg',
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
        src: 'assets/img/vent_casa_minimalista.jpg',
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
        src: 'assets/img/vent_finca_ecologica.jpg',
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
        src: 'assets/img/vent_loft_industrial.jpg',
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
mostrarAlquiler();

//busco 3 numeros random para tomar propiedades de venta y alquiler y mostrarlas en el index
function random3(){
    const numeros = []
    while(numeros.length < 3){
        const aleatorio = Math.floor(Math.random()*12)
        if (!numeros.includes(aleatorio)){
            numeros.push(aleatorio)
        }
    }
    return numeros
}

function mostrarAlquiler(){
    let prop_alquiler = document.getElementById('alquiler')
    let card_html = ``
    let numAlq = random3()
    for(let i = 0; i < 3; i++){
        let pa = propiedades_venta[numAlq[i]]
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
    prop_alquiler.innerHTML = `
        <h2>Propiedades en alquiler</h2>
        <div class="row">
        ` + card_html + `</div>
        <a href="./pages/propiedades_alquiler.html" class="btn btn-dark">Ver todas las propiedades en alquiler</a>`
        
}

function mostrarVenta(){
    let prop_ventas = document.getElementById('venta')
    let card_html = ``
    let numVenta = random3()
    for(let i = 0; i < 3; i++){
        let pv = propiedades_venta[numVenta[i]]
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
        ` + card_html + `</div>
        <a href="./pages/propiedades_venta.html" class="btn btn-dark">Ver todas las propiedades en venta</a>`
}


