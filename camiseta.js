const plContainer = document.getElementById("plContainer");
const  shopCartTable = document.getElementById("shopCatTable");
const shopCart = [];

//Lista de productos
let pl = "Premier League";
const plShirts = [
    { id: 0, league: pl, club: "Manchester United", precio: 90, 
    imagen: "https://images.footballfanatics.com/manchester-united/manchester-united-cup-home-shirt-2021-22-kids-with-pogba-6-printing_ss4_p-12075835+pv-1+u-jeifhvg8je32rfwkjs0+v-dec0655ec4b241cd94a05cd72d902e27.jpg?_hv=1&w=600" },
    { id: 1, league: pl, club: "Arsenal", precio: 80, 
    imagen: "https://www.amstadion.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prz_d_1_10.jpg" },
    { id: 2, league: pl, club: "Chelsea", precio: 85, 
    imagen: "https://static.nike.com/a/images/t_default/ab96d56f-fbe7-45ad-aaf8-2d8dbdf9c004/primera-equipacion-stadium-chelsea-fc-2021-22-camiseta-de-futbol-bC7dvB.png" },
    { id: 3, league: pl, club: "Tottenham Hotspur", precio: 70, 
    imagen: "https://static.nike.com/a/images/t_default/a553a0df-40dd-4d54-8556-6ddc26c59360/jersey-de-f%C3%BAtbol-tottenham-hotspur-2021-22-stadium-R3Hgqx.png" },
    { id: 4, league: pl, club: "West Ham United", precio: 60, 
    imagen: "https://http2.mlstatic.com/D_NQ_NP_772659-MLA48777437089_012022-O.webp" },
    { id: 5, league: pl, club: "Newcastle United", precio: 45, 
    imagen:"https://images.sportsdirect.com/images/products/37709903_l.jpg" },
    { id: 6, league: pl, club: "Liverpool", precio: 85, 
    imagen: "https://www.24onlinesmi.com/images/k/liverpool%20jersey%202021-877wpw.jpg" },
    { id: 7, league: pl, club: "Leicester City", precio: 60, 
    imagen: "https://cdn11.bigcommerce.com/s-g61ujcw369/images/stencil/1280x1280/products/1485/8519/IMG_1061__31019.1625094043.JPG?c=1?imbypass=on" },
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

