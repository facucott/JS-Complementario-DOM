const BBDD = [
    {
        "id": 1,
        "nombre": "Preacher, Sinner & Gambler (Vinilo)",
        "img": "./img/vinilo.png",
        "precio": 3500,
        "cantidad":1
    },
    {
        "id": 2,
        "nombre": "Preacher, Sinner & Gambler (CD)",
        "img": "./img/cd.png",
        "precio": 1200,
        "cantidad":1
    },
    {
        "id": 3,
        "nombre": 'Taza <br> (Modelo "Suitcase")',
        "img": "./img/taza1.png",
        "precio": 700,
        "cantidad":1
    },
    {
        "id": 4,
        "nombre": '"Preacher, Sinner & Gambler" (Remera)',
        "img": "./img/remera.png",
        "precio": 2500,
        "cantidad":1
    },
    {
        "id": 5,
        "nombre": 'Calcomanía <br> (Suitcase)',
        "img": "./img/calco.png",
        "precio": 100,
        "cantidad":1
    },
    {
        "id": 6,
        "nombre": 'Poster <br> (Juan, Facu, Gabo)',
        "img": "./img/poster1.png",
        "precio": 500,
        "cantidad":1
    },
    {
        "id": 7,
        "nombre": 'Poster <br> (Facu)',
        "img": "./img/posterfacu.png",
        "precio": 500,
        "cantidad":1
    },
    {
        "id": 8,
        "nombre": 'Poster <br> (Gabo)',
        "img": "./img/postergabo.png",
        "precio": 500,
        "cantidad":1
    },
    {
        "id": 9,
        "nombre": 'Poster <br> (Juan)',
        "img": "./img/posterjuan.png",
        "precio": 500,
        "cantidad":1
    },
]

const carrito = [];

function renderizarProductos(){
    let tienda = document.getElementById('tienda');    
    
    BBDD.forEach((productos)=>{
        
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem; background-color: #d4bf97; border:none">
            <img class="card-img-top" src="${productos.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${productos.nombre}</h5>
                <p>$${productos.precio}</p>
                <button class="btn" style="background-color:black; color: #d4bf97">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `
        tienda.innerHTML += productoHTML
    });

}
renderizarProductos();

function filtroPrecio(){

    let bd = BBDD.filter(producto => producto.precio > 70);
    console.log(bd);

}