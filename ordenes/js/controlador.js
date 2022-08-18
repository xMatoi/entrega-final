var ordenes=[
    {
        id: 1,
        tipoOrden: 'Comida',
        producto: 'Hamburguesa con queso',
        motoristaEncargado: 'Daniel Medina'
    }
];

var motoristas=[
    {
        _id: 1,
        númeroDriver: '0001',
        nombre: 'Daniel Medina',
        rating: 4,
        img: 'img/kavinsky1.jpg'
    }
];


function generarOrdenes(){
    document.getElementById('contenedor').innerHTML = '';
    ordenes.forEach(function(orden, i){
        document.getElementById('contenedor').innerHTML+=
        `<div class="card" style="width: 18rem;" id="tarjeta">
        <div class="card-body">
          <h5 class="card-title">${orden.producto}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${orden.tipoOrden}</h6>
          <p class="card-text">Motorista encargado: ${orden.motoristaEncargado}</p>
          <a href="#" class="card-link">Editar orden</a>
          <a href="#" class="card-link" onclick = "eliminarOrden(${i})">Eliminar orden</a>
        </div>
      </div>`
    }
        
    );
};

function generarConductores(){
    document.getElementById('contenedor-driver').innerHTML = '';
    console.log('se generaron conductores')
    motoristas.forEach(function(motorista, i){

        let contador = 0;
        let estrellas = '';
        for (let i = 0; i < (motorista.rating); i++) {
             contador += 1;  
             estrellas += '<i class="fa-solid fa-star" id="estrellas"></i>'
        }
        for (let i = 0; i < (5-motorista.rating); i++) {
            estrellas += '<i class="fa-regular fa-star" id="estrellas"></i>'
       }
    
       document.getElementById('contenedor-driver').innerHTML +=
       `<div class="card" style="width: 12rem;" id="tarjeta2">
        <img src=${motorista.img} class="card-img-top" alt="img" id="imagen">
        <div class="card-body">
          <h5 class="card-title">${motorista.nombre}</h5>
          <p class="card-text">Número de motorista: ${motorista.númeroDriver} </p>
          <p class="card-text">Rating:${estrellas}</p>
        </div>
      </div>`
    })
}

function crearOrden(){
    let orden = {
        id : document.getElementById('id').value,
        tipoOrden: document.getElementById('nombre').value,
        producto: document.getElementById('product').value,
        motoristaEncargado: document.getElementById('motorista').value
    }
    
    ordenes.push(orden);
    generarOrdenes();
    }

function eliminarOrden(id) {
    ordenes.splice(id)
    generarOrdenes();
}

function editarOrden(params) {
    
}

generarConductores();
generarOrdenes();

