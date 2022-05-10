const plContainer = document.getElementById("plContainer");
const  shopCartTable = document.getElementById("shopCatTable");
const shopCart = [];

//Lista de productos
let pl = "Premier League";
const plShirts = [
    { id: 0, league: pl, club: "Manchester United", precio: 90, 
    imagen: "./images/manchester-united-jersey.jpg" },
    { id: 1, league: pl, club: "Arsenal", precio: 80, 
    imagen: "./images/arsenal-jersey.jpg" },
    { id: 2, league: pl, club: "Chelsea", precio: 85, 
    imagen: "./images/chelsea-jersey.png" },
    { id: 3, league: pl, club: "Tottenham Hotspur", precio: 70, 
    imagen: "./images/spurs-jersey.png" },
    { id: 4, league: pl, club: "West Ham United", precio: 60, 
    imagen: "./images/westham-jersey.webp" },
    { id: 5, league: pl, club: "Newcastle United", precio: 45, 
    imagen: "./images/newcastle-jersey.webp" },
    { id: 6, league: pl, club: "Liverpool", precio: 85, 
    imagen: "./images/liverpool-jersey.jpg" },
    { id: 7, league: pl, club: "Leicester City", precio: 60, 
    imagen: "./images/leicester-jersey.jpg" },
]
//..............

//Agrego cards para mostrar mis productos en venta dentro del HTML
const plCard = (item) => {
    return (
        `<li>
            <img src="${item.imagen}" alt="${item.club}"></img>
            <h3>${item.club}</h3>
            <p>${item.league}</p>
            <div><button onclick="addShopCart(${item.id})" type="button" class="plBox__boton">Agregar al Carrito</button><span>€${item.precio}</span></div>
        </li>`
    );
}

//creacion de cards con los datos de la lista de productos.
const shopCartRow = (item) => {
    return (
        `<tr>
            <td>${item.id}</td>
            <td>${item.league}</td>
            <td>${item.club}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio * item.cantidad} (€${item.precio})</td>
        </tr>`
    );
}

//subida de productos al html
const pushProducts = (data, boxContainer, shopTalbe) => {
    let plCardContainer = "";
    data.forEach((element) => {
        plCardContainer += shopTalbe ? shopCartRow(element) : plCard(element);
    });
    boxContainer.innerHTML = plCardContainer;
}
pushProducts(plShirts, plContainer, false);

//Evento creado para que el usuario agregue productos al carrito de compras.
const addShopCart = (id) =>{
    const productSelected = plShirts.find(item => item.id === id);
    const search = shopCart.findIndex(element => element.id === id);
    
    if (search === -1){
    shopCart.push({
        id: productSelected.id,
        league: productSelected.league,
        club: productSelected.club,
        cantidad: 1,
        precio: productSelected.precio,
    });
    } else{
        shopCart[search].cantidad = shopCart[search].cantidad + 1;
    }
    pushProducts(shopCart, shopCartTable, true)
}

