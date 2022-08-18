var motoristas = []; 
motoristas = [
    {
        id: 1,
        nombre: 'Daniel Medina',
        númeroDriver: '0001',
        rating: 4,
        img: 'img/kavinsky1.jpg'
    }
];

var index = 0;

console.log(motoristas)

function generarConductores(){
    document.getElementById('contenedor').innerHTML = '';
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
    
       document.getElementById('contenedor').innerHTML +=
       `<div class="card" style="width: 12rem;" id="tarjeta${i+1}">
        <img src=${motorista.img} class="card-img-top" alt="img" id="imagen">
        <div class="card-body">
          <h5 class="card-title">${motorista.nombre}</h5>
          <p class="card-text">Número de motorista: ${motorista.númeroDriver} </p>
          <p class="card-text">Rating:${estrellas}</p>
        </div>
      </div>`
    })
}


function crearMotorista(){
let motorista = {
    id : document.getElementById('id-driver').value,
    nombre: document.getElementById('nombre').value,
    númeroDriver: document.getElementById('numDriver').value,
    rating: document.getElementById('rating').value,
    img: document.getElementById('img-selector').value
}

motoristas.push(motorista);
generarConductores();
}

function editar(id){
    let motorista = motoristas[id];
    document.getElementById('id-driver').value = motorista.id;
    document.getElementById('nombre').value = motorista.nombre;
    document.getElementById('numDriver').value = motorista.rating;
    document.getElementById('rating').value = motorista.img;
    
    index = id; 
}

generarConductores();


