//Clase
class Articulo{
    constructor(conjunto, nombre, precio, cantidad){
        this.conjunto = conjunto;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
}
const art1 = new Articulo( "zapatillas calzado", "zapatillas deportivas", 12000, 0);
const art2 = new Articulo( "zapatillas calzado", "zapatos formlaes", 10000, 0);
const art3 = new Articulo( "remera", "remera lisa", 3000, 0);
const art4 = new Articulo( "pantalon", "vaquero azul", 4900, 0);
const art5 = new Articulo( "buzo abrigo", "buzo hoodie", 6000, 0);
const art6 = new Articulo( "campera abrigo", "campera termica", 8000, 0);
const art7 = new Articulo( "remera", "blusa de gasa", 3000, 0);
const art8 = new Articulo( "campera abrigo pantalon", "conjunto deportivo", 12500, 0);
const art9 = new Articulo( "zapatillas calzado", "zapatillas urbanas", 9000, 0);
const art10 = new Articulo( "pantalon", "calza de algodon", 2000, 0);
const art11 = new Articulo( "gorro abrigo", "gorro de lana", 2200, 0);
const art12 = new Articulo( "bufanda abrigo", "bufanda de lana", 1500, 0);
const art13 = new Articulo( "zapatillas calzado", "borcegos", 15000, 0);
const art14 = new Articulo( "remera abrigo", "remera termica", 4000, 0);
const art15 = new Articulo( "pantalon abrigo", "jogging gris", 3500, 0);
const art16 = new Articulo( "buzo abrigo", "buzo polar", 5800, 0);
const art17 = new Articulo( "remera", "musculosa blanca", 2100, 0);
const art18 = new Articulo( "pantalon", "pantalon cargo", 5000, 0);
const art19 = new Articulo( "campera abrigo", "campera de cuero", 20000, 0);
const art20 = new Articulo( "buzo abrigo", "buzo negro", 5000, 0);

//Arreglos
const articulos = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12, art13, art14, art15, art16, art17, art18, art19, art20];
const carritoArticulos = [];
const carritoValorTotal = [];

//variables
let closeMain = true;
let genero = "hombre";

//Suma Total de los articulos agregados al carrito.
function sumaTotal(){
    let total = carritoValorTotal.reduce((a, b) => a + b, 0);
    const carritoInfo = prompt(
        `Mi Carrito de Compras:\n` +
        `\n` +
        `${carritoArticulos.join("")}\n` +
        `\n` +
        `Total de la compra: $${total}\n` +
        `\n` +
        `1 | Pagar\n` +
        `2 | ↩`
    );
    switch(carritoInfo){
        case "1":
            alert(
                `Se ha completado la compra!\n` +
                `\n` +
                `Recibira su factura y/o comprobante de compra al siguiente mail:\n` +
                `example******@mail.com\n`
            );
            carritoArticulos.splice(0, carritoArticulos.length);
            carritoValorTotal.splice(0, carritoValorTotal.length);
            mainMenu();
        case "2":
            mainMenu();
        default:
            sumaTotal();
    }
}

//Calzado Hombre
function calzadoH(){
    const calzadoHombre = prompt(
        `Calzado para ${genero}\n` +
        `\n` +
        `1 | ${art1.nombre} $${art1.precio}\n` +
        `2 | ${art2.nombre} $${art2.precio}\n` +
        `\n` +
        `3 | ↩\n` +
        `4 | Inicio`
    );
    switch(calzadoHombre){
        case `1`:
            art1.cantidad = art1.cantidad + 1;
            carritoArticulos.push(`${art1.nombre} $${art1.precio}\n`);
            carritoValorTotal.push(12000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${art1.nombre}\n` +
                `\n` +
                `Cantidad en carrito: ${art1.cantidad}`
            );
            calzadoH();
        case "2":
            art2.cantidad = art2.cantidad + 1;
            carritoArticulos.push(`${art2.nombre} $${art2.precio}\n`);
            carritoValorTotal.push(10000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${art2.nombre}\n` +
                `\n` +
                `Cantidad en carrito ${art2.cantidad}`
            );
            calzadoH();
        case "3":
            productos();
        default:
            calzadoH();
        case "4":
            mainMenu();
    }
}
//Calzado Mujer
function calzadoM(){
    const calzadoMujer = prompt(
        `Calzado para ${genero}\n` +
        `\n` +
        `1 | ${art9.nombre} $${art9.precio}\n` +
        `2 | ${art13.nombre} $${art13.precio}\n` +
        `\n` +
        `3 | ↩\n` +
        `4 | Inicio`
    );
    switch(calzadoMujer){
        case `1`:
            art9.cantidad = art9.cantidad + 1;
            carritoArticulos.push(`${art9.nombre} $${art9.precio}\n`);
            carritoValorTotal.push(9000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${art9.nombre}\n` +
                `\n` +
                `Cantidad en carrito: ${art9.cantidad}`
            );
            calzadoM();
        case "2":
            art13.cantidad = art13.cantidad + 1;
            carritoArticulos.push(`${art13.nombre} $${art13.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${art13.nombre}\n` +
                `\n` +
                `Cantidad en carrito ${art13.cantidad}`
            );
            calzadoM();
        case "3":
            productos();
        default:
            calzadoM();
        case "4":
            mainMenu();
    }
}
//Indumentaria / Hombre
function indumentariaHombre(){
    const indumentariaHombreItems = prompt(
        `Indumentaria para ${genero}\n` +
        `\n` +
        ` 1 | ${art3.nombre} $${art3.precio}\n` +
        ` 2 | ${art4.nombre} $${art4.precio}\n` +
        ` 3 | ${art5.nombre} $${art5.precio}\n` +
        ` 4 | ${art6.nombre} $${art6.precio}\n` +
        ` 5 | ${art12.nombre} $${art12.precio}\n` +
        ` 6 | ${art14.nombre} $${art14.precio}\n` +
        ` 7 | ${art15.nombre} $${art15.precio}\n` +
        ` 8 | ${art16.nombre} $${art16.precio}\n` +
        ` 9 | ${art17.nombre} $${art17.precio}\n` +
        `10 | ${art18.nombre} $${art18.precio}\n` +
        `11 | ${art19.nombre} $${art19.precio}\n` +
        `12 | ${art20.nombre} $${art20.precio}\n` +
        `\n` +
        `13 | ↩\n` +
        `14 | Inicio`
    );
    switch(indumentariaHombreItems){
        case "1":
            art3.cantidad = art3.cantidad + 1;
            carritoArticulos.push(`${art3.nombre} $${art3.precio}\n`);
            carritoValorTotal.push(3000);
            alert(
                `Se ha agregado al carrito de compras:\n` +
                `\n` +
                `${art3.nombre} $${art3.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art3.cantidad}`
            );
            indumentariaHombre();
        case "2":
            art4.cantidad = art4.cantidad + 1;
            carritoArticulos.push(`${art4.nombre} $${art4.precio}\n`);
            carritoValorTotal.push(4900);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${articulo4.nombre} $${art4.precio}\n` +
                `\n` +
                `Cantdad en carrito: ${art4.cantidad}`
            );
            indumentariaHombre();
        case "3":
            art5.cantidad = art5.cantidad + 1;
            carritoArticulos.push(`${art5.nombre} $${art5.precio}\n`);
            carritoValorTotal.push(6000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art5.nombre} $${art5.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art5.cantidad}`
            );
            indumentariaHombre();
        case "4":
            art6.cantidad = art6.cantidad + 1;
            carritoArticulos.push(`${art6.nombre} $${art6.precio}\n`);
            carritoValorTotal.push(8000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art6.nombre} $${art6.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art6.cantidad}`
            );
            indumentariaHombre();
        case "5":
            art12.cantidad = art12.cantidad + 1;
            carritoArticulos.push(`${art12.nombre} $${art12.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art12.nombre} $${art12.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art12.cantidad}`
            );
            indumentariaHombre();
        case "6":
            art14.cantidad = art14.cantidad + 1;
            carritoArticulos.push(`${art14.nombre} $${art14.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art14.nombre} $${art14.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art14.cantidad}`
            );
            indumentariaHombre();
        case "7":
            art15.cantidad = art15.cantidad + 1;
            carritoArticulos.push(`${art15.nombre} $${art15.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art15.nombre} $${art15.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art15.cantidad}`
            );
            indumentariaHombre();
        case "8":
            art17.cantidad = art17.cantidad + 1;
            carritoArticulos.push(`${art17.nombre} $${art17.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art17.nombre} $${art17.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art17.cantidad}`
            );
            indumentariaHombre();
        case "9":
            art17.cantidad = art17.cantidad + 1;
            carritoArticulos.push(`${art17.nombre} $${art17.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art17.nombre} $${art17.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art17.cantidad}`
            );
            indumentariaHombre();
        case "10":
            art18.cantidad = art18.cantidad + 1;
            carritoArticulos.push(`${art18.nombre} $${art18.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art18.nombre} $${art18.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art18.cantidad}`
            );
            indumentariaHombre();
        case "11":
            art19.cantidad = art19.cantidad + 1;
            carritoArticulos.push(`${art19.nombre} $${art19.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art19.nombre} $${art19.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art19.cantidad}`
            );
            indumentariaHombre();
        case "12":
            art20.cantidad = art20.cantidad + 1;
            carritoArticulos.push(`${art20.nombre} $${art20.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art20.nombre} $${art20.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art20.cantidad}`
            );
            indumentariaHombre();
        case "13":
            productos();
        default:
            indumentariaHombre();
        case "14":
            mainMenu();
    }
}
//Indumentaria / Mujer
function indumentariaMujer(){
    genero = "mujer";
    const indumentariaMujerItems = prompt(
        `Indumentaria para ${genero}\n` +
        `\n` +
        ` 1 | ${art7.nombre} $${art7.precio}\n` +
        ` 2 | ${art10.nombre} $${art10.precio}\n` +
        ` 3 | ${art8.nombre} $${art8.precio}\n` +
        ` 4 | ${art11.nombre} $${art11.precio}\n` +
        ` 5 | ${art12.nombre} $${art12.precio}\n` +
        ` 6 | ${art14.nombre} $${art14.precio}\n` +
        ` 7 | ${art15.nombre} $${art15.precio}\n` +
        ` 8 | ${art16.nombre} $${art16.precio}\n` +
        ` 9 | ${art17.nombre} $${art17.precio}\n` +
        `10 | ${art18.nombre} $${art18.precio}\n` +
        `11 | ${art19.nombre} $${art19.precio}\n` +
        `12 | ${art20.nombre} $${art20.precio}\n` +
        `\n` +
        `13 | ↩\n` +
        `14 | Inicio`
    );
    switch(indumentariaMujerItems){
        case `1`:
            art7.cantidad = art7.cantidad + 1;
            carritoArticulos.push(`${art7.nombre} $${art7.precio}\n`);
            carritoValorTotal.push(3000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art7.nombre} $${art7.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art7.cantidad}`
            );
            indumentariaMujer();
        case `2`:
            art10.cantidad = art10.cantidad + 1;
            carritoArticulos.push(`${art10.nombre} $${art10.precio}\n`);
            carritoValorTotal.push(2000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art10.nombre} $${art10.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art10.cantidad}`
            );
            indumentariaMujer();
        case `3`:
            art8.cantidad = art8.cantidad + 1;
            carritoArticulos.push(`${art8.nombre} $${art8.precio}\n`);
            carritoValorTotal.push(12500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art8.nombre} $${art8.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art8.cantidad}`
            );
            indumentariaMujer();
        case `4`:
            art6.cantidad = art6.cantidad + 1;
            carritoArticulos.push(`${art6.nombre} $${art6.precio}\n`);
            carritoValorTotal.push(8000);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art6.nombre} $${art6.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art6.cantidad}`
            );
            indumentariaHombre();
        case "5":
            art12.cantidad = art12.cantidad + 1;
            carritoArticulos.push(`${art12.nombre} $${art12.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art12.nombre} $${art12.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art12.cantidad}`
            );
            indumentariaHombre();
        case "6":
            art14.cantidad = art14.cantidad + 1;
            carritoArticulos.push(`${art14.nombre} $${art14.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art14.nombre} $${art14.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art14.cantidad}`
            );
            indumentariaHombre();
        case "7":
            art15.cantidad = art15.cantidad + 1;
            carritoArticulos.push(`${art15.nombre} $${art15.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art15.nombre} $${art15.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art15.cantidad}`
            );
            indumentariaHombre();
        case "8":
            art17.cantidad = art17.cantidad + 1;
            carritoArticulos.push(`${art17.nombre} $${art17.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art17.nombre} $${art17.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art17.cantidad}`
            );
            indumentariaHombre();
        case "9":
            art17.cantidad = art17.cantidad + 1;
            carritoArticulos.push(`${art17.nombre} $${art17.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art17.nombre} $${art17.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art17.cantidad}`
            );
            indumentariaHombre();
        case "10":
            art18.cantidad = art18.cantidad + 1;
            carritoArticulos.push(`${art18.nombre} $${art18.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art18.nombre} $${art18.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art18.cantidad}`
            );
            indumentariaHombre();
        case "11":
            art19.cantidad = art19.cantidad + 1;
            carritoArticulos.push(`${art19.nombre} $${art19.precio}\n`);
            carritoValorTotal.push(1500);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art19.nombre} $${art19.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art19.cantidad}`
            );
            indumentariaHombre();
        case "12":
            art11.cantidad = art11.cantidad + 1;
            carritoArticulos.push(`${art11.nombre} $${art11.precio}\n`);
            carritoValorTotal.push(2200);
            alert(
                `Se ha agregado en el carrito de compras:\n` +
                `\n` +
                `${art11.nombre} $${art11.precio}\n` +
                `\n` +
                `Cantidad en carrito: ${art11.cantidad}`
            );
            indumentariaMujer();
        case `13`:
            productos();
        default:
            indumentariaMujer();
        case `14`:
            genero = "hombre";
            mainMenu();
    }
}
//Productos categorias
function productos(){
    const productosCategoria = prompt(
        `Articulos de ${genero}:\n` +
        `\n` +
        `1 | Calzado\n` +
        `2 | Indumentaria\n` +
        `\n` +
        `3 | ↩\n`
    );
    switch(productosCategoria){
        case "1":
            if(genero == "hombre"){
                calzadoH();
            }else{
                calzadoM();
            }
        case "2":
            if(genero == "hombre"){
                indumentariaHombre();
            }else{
                indumentariaMujer();
            };
        case "3":
            mainMenu();
        default:
            productos();
    }
}

//Menu principal de la tienda
function mainMenu(){
    const userMenuPrincipal = prompt(
        `Tienda de indumentaria.\n` +
        `\n` +
        `seleccione una categoria:\n` +
        `\n` +
        `1 | Hombre\n` +
        `2 | Mujer\n` +
        `3 | Filtrar articulo\n` +
        `4 | Buscar articulo\n` +
        `\n` +
        `5 | Carrito\n`
    );
    switch(userMenuPrincipal){
        default:
            mainMenu();
        case "1":
            productos();
        case "2":
            genero = "mujer";
            productos();
        case "3":
            filtros();
        case "4":
            busqueda();
        case "5":
            sumaTotal();
    }
}
//Busqueda
function busqueda(){
    const userBusq = prompt(
        `Que estas buscando?\n` +
        `\n` +
        `1 | ↩`
    );
    if(userBusq == "1"){
        mainMenu();
    }else if(userBusq.length > 0){
        const resultadoBusq = articulos.find((elBusq) => elBusq.nombre.includes(userBusq))
        const mostrarBusq = `${resultadoBusq.nombre} $${resultadoBusq.precio}`;
        alert(
            `Se encontro mediante (${userBusq}):\n` +
            `\n` +
            `${mostrarBusq}\n`
        );
        busqueda();
    }else{
        busqueda();
    }
}

//Filtros
function filtros(){
    const userFilter = prompt(
        `Filtrar articulos por:\n` +
        `\n` +
        `1 | Precio tope\n` +
        `2 | Categoria\n` +
        `\n` +
        `3 | ↩`
    );
    switch(userFilter){
        case "1":
            const precioUser = parseFloat(prompt(
                `Digite el precio tope de los productos:`
            ));
            const resultadoFiltroPrecio = articulos.filter(elemento => elemento.precio <= precioUser);
            let userFilterMostrar = resultadoFiltroPrecio.reduce((acumular, elementosA) => acumular + "\n" + elementosA.nombre + "   $" + elementosA.precio, "");
            const precioUserOpc = prompt(
                `Articulos con un precio menor/igual a ${precioUser}:\n` +
                `${userFilterMostrar}\n` +
                `\n` +
                `1 | ↩\n` +
                `2 | Inicio`
            );
            switch(precioUserOpc){
                case "1":
                    filtros();
                case "2":
                    mainMenu();
            }
        case "2":
            const articuloUser = prompt(
                `Que estas Buscando?\n` +
                `\n` +
                `Sugerencias:\n` +
                `abrigo\n` +
                `pantalon\n` +
                `buzo\n` +
                `zapatillas\n`
            );
            const resultadoFiltroArticulo = articulos.filter((elementoA) => elementoA.conjunto.includes(articuloUser));
            let userArticuloMostrar = resultadoFiltroArticulo.reduce((acumularB, elementosB) => acumularB + "\n" + elementosB.nombre + "  $" + elementosB.precio, "");
            const busquedaUserOpc = prompt(
                `Su busqueda: ${articuloUser}\n` +
                `${userArticuloMostrar}\n` +
                "\n" +
                `1 | ↩\n` +
                `2 | Inicio`
            );
            switch(busquedaUserOpc){
                case "1":
                    filtros();
                case "2":
                    mainMenu();
            }
        default:
            filtros();
        case "3":
            mainMenu();
    }
}


//Ejecucion
while(closeMain){
    mainMenu();
}