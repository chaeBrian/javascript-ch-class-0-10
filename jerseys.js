const jerseysContainer = document.getElementById("jerseysContainer");
const shopCartTable = document.getElementById("shopCartTable");
const shopCart = [];
//Lista de productos
const jerseys = [
    { id: 1, sport: "football", team: "Borussia Dortmund", price: 90,
    image: "../images/footballjerseys/dortmund.webp" },
    { id: 2, sport: "football", team: "Paris Saint-Germain", price: 110,
    image: "../images/footballjerseys/psg.webp" },
    { id: 3, sport: "football", team: "Chelsea", price: 95,
    image: "../images/footballjerseys/chelsea.webp" },
    { id: 4, sport: "football", team: "Liverpool", price: 95,
    image: "../images/footballjerseys/liverpool.webp" },
    { id: 5, sport: "NBA", team: "Brooklyn", price: 80,
    image: "../images/nbajerseys/brooklyn.webp" },
    { id: 6, sport: "NBA", team: "Boston", price: 85,
    image: "../images/nbajerseys/boston.webp" },
    { id: 7, sport: "NBA", team: "Dallas", price: 89,
    image: "../images/nbajerseys/dallas.webp" },
    { id: 8, sport: "NBA", team: "Spurs", price: 89,
    image: "../images/nbajerseys/spurs.webp" },
    { id: 9, sport: "NFL", team: "Panthers", price: 78,
    image: "../images/nfljerseys/panthers.webp" },
    { id: 10, sport: "NFL", team: "Rams", price: 88,
    image: "../images/nfljerseys/rams.webp" },
    { id: 11, sport: "NFL", team: "Vikings", price: 80,
    image: "../images/nfljerseys/vikings.webp" },
    { id: 12, sport: "NFL", team: "Dolphins", price: 80,
    image: "../images/nfljerseys/dolphins.webp" },
]
localStorage.setItem("jerseys", JSON.stringify(jerseys));
let jerseysInside = JSON.parse(localStorage.getItem("jerseys"));
//..............
//Agrego cards para mostrar mis productos en venta dentro del HTML
let jerseysCard = (item) => {
    return (
        `<li>
            <img src="${item.image}" alt="${item.team}"></img>
            <h3>${item.team}</h3>
            <p>${item.sport}</p>
            <div><button onclick="addShopCart(${item.id})" type="button" class="plBox__boton">🛒</button><span>€${item.price}</span></div>
        </li>`
    );
}
let botonFootball = document.getElementById("botonFootball");
botonFootball.addEventListener("click", ansBotonFootball);
function ansBotonFootball(){

}
//creacion de cards con los datos de la lista de productos.
const shopCartRow = (item) => {
    return (
        `<tr>
            <td>${item.id}</td>
            <td>${item.sport}</td>
            <td>${item.team}</td>
            <td>${item.lot}</td>
            <td>${item.price * item.lot} (€${item.price})</td>
        </tr>`
    );
}
//subida de productos al html
const pushProducts = (data, boxContainer, shopTable) => {
    let jerseysCardContainer = "";
    data.forEach((element) => {
        jerseysCardContainer += shopTable ? shopCartRow(element) : jerseysCard(element);
    });
    boxContainer.innerHTML = jerseysCardContainer;
}
pushProducts(jerseysInside, jerseysContainer, false);
//Evento creado para que el usuario agregue productos al carrito de compras.
const addShopCart = (id) =>{
    const productSelected = jerseysInside.find(item => item.id === id);
    const search = shopCart.findIndex(element => element.id === id);
    
    if (search === -1){
    shopCart.push({
        id: productSelected.id,
        sport: productSelected.sport,
        team: productSelected.team,
        lot: 1,
        price: productSelected.price,
    });
    } else{
        shopCart[search].lot = shopCart[search].lot + 1;
    }
    pushProducts(shopCart, shopCartTable, true)
    sessionStorage.setItem("shopCart", JSON.stringify(shopCart));
}